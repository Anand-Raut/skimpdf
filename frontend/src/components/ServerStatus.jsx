import { useState, useEffect } from 'react'

export default function ServerStatus() {
  const [status, setStatus] = useState("🟡 Checking...")

  useEffect(() => {
    const checkServer = async () => {
      try {
        const res = await fetch("http://localhost:8000/", { timeout: 5000 })
        if (!res.ok) throw new Error()
        setStatus("🟢 Connected")
      } catch {
        setStatus("🔴 Disconnected")
      }
    }

    checkServer()
    const interval = setInterval(checkServer, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-800 border border-cyan-500 text-sm text-white mr-8 px-3 py-1 rounded-full shadow-lg font-mono w-32">
      {status}
    </div>
  )
}
