import HeroSection from './components/HeroSection'
import UploadSection from './components/UploadSection'
import HeaderSection from './components/HeaderSection'

export default function App() {
  return (
    <div className="h-screen bg-gradient-to-br from-cyan-900 via-gray-900 to-black text-white font-sans px-4 py-8 relative overflow-hidden">
      <HeaderSection />

      <div className="snap-y snap-mandatory overflow-y-scroll scroll-smooth h-full">
        <section className="snap-start min-h-[75vh] flex items-center justify-center py-6 scroll-mt-16">
          <HeroSection />
        </section>

        <section id="upload-section" className="snap-start min-h-[75vh] flex items-center justify-center py-6 scroll-mt-16">
          <UploadSection />
        </section>
      </div>
    </div>
  )
}
