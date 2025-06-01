import { ArrowDownCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-2/5 flex flex-col text-white px-4 relative">
  

  {/* Hero Body */}
  <div className="flex flex-1 flex-col justify-center items-center w-full max-w-5xl mx-auto text-center px-4">
    <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-cyan-400">
      SkimPDF
    </h1>
    <p className="mt-4 text-xl sm:text-2xl text-gray-300 font-medium">
      Summarize PDFs instantly with AI. Fast. Simple. No noise.
    </p>

    <div className="mt-6 text-gray-400 text-base sm:text-lg space-y-1">
      <p>• Upload a PDF — short or long</p>
      <p>• Get a clean summary in seconds</p>
      <p>• Powered by BART-Large under the hood</p>
    </div>

    <a
      href="#upload-section"
      className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 transition-all duration-200 text-white text-lg font-semibold rounded-xl shadow-md"
    >
      Try It Now
      <ArrowDownCircle className="w-5 h-5" />
    </a>
  </div>
</section>

  );
};

export default HeroSection;
