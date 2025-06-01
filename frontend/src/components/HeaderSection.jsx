import ServerStatus from "./ServerStatus";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-black bg-opacity-50 backdrop-blur-md border-b border-cyan-700 z-50">
      <h1
        className="text-cyan-400 text-3xl font-extrabold tracking-wide cursor-pointer select-none
                   hover:text-cyan-300 transition-colors duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="SkimPDF - Back to top"
      >
        SkimPDF
      </h1>
      <div className="text-white">
        <ServerStatus />
      </div>
    </header>
  );
}
