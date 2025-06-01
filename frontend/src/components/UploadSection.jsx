import { useState } from 'react'

const UploadSection = () => {
  const [file, setFile] = useState(null)
  const [summary, setSummary] = useState(null)

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]
    setFile(selectedFile)
    console.log("Selected file:", selectedFile)
  }

  const handleUpload = async (event) => {
    event.preventDefault()
    if (!file) return

    const formData = new FormData()
    formData.append('pdfFile', file)

    try {
      const response = await fetch('http://127.0.0.1:8000/upload', {
        method: 'POST',
        body: formData,
      })
      if (response.ok) {
        console.log("Uploaded")
        const data = await response.json()
        setSummary(data.summary)
      } else {
        console.error('File upload failed')
      }
    } catch (error) {
      console.log("Error during file upload: ", error)
    }
  }

  return (
    <div className="min-h-screen  text-white flex items-center justify-center p-4">
      <div className="bg-black/40 backdrop-blur-lg border border-cyan-500 shadow-lg rounded-2xl p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-cyan-400 mb-3">PDF Summarizer</h1>
        <p className="text-gray-300 mb-6">
          Upload your PDF and receive a crisp, AI-generated summary in seconds.
        </p>

        <form onSubmit={handleUpload} className="space-y-4">
          <div>
            <label htmlFor="pdfInput" className="block text-sm font-medium text-gray-300 mb-1">
              Choose a PDF file
            </label>
            <input
              type="file"
              id="pdfInput"
              accept="application/pdf"
              onChange={handleFileChange}
              className="w-full text-white file:bg-cyan-600 file:hover:bg-cyan-700 file:border-none file:rounded-lg file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white cursor-pointer bg-gray-800 rounded-lg border border-gray-600 p-1"
            />
          </div>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 transition-colors text-white px-6 py-2 rounded-lg shadow-md font-semibold"
          >
            Upload & Summarize
          </button>
        </form>

        {summary && (
          <div className="mt-8 p-6 bg-gray-900 border border-cyan-500 rounded-xl shadow-inner">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Summary</h2>
            <p className="text-gray-200 whitespace-pre-wrap leading-relaxed">{summary}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default UploadSection
