import { ArrowDownCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center  text-white px-4">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-cyan-400 drop-shadow-md">
          Instantly Summarize Your PDFs
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300">
          Upload any PDF and get a clean, AI-generated summary powered by BART-Large.
        </p>
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
