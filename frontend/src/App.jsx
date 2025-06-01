import HeroSection from './components/HeroSection'
import ServerStatus from './components/ServerStatus'
import UploadSection from './components/UploadSection'

export default function App() {
  return (
    <div className="h-screen bg-gradient-to-br from-cyan-900 via-gray-900 to-black text-white font-sans px-4 py-8 relative overflow-hidden">
      <div className="absolute top-4 right-4 z-50">
        <ServerStatus />
      </div>

      <div className="snap-y snap-proximity overflow-y-scroll scroll-smooth h-full">
        <section className="snap-start min-h-screen flex items-center justify-center py-10 scroll-mt-16">
          <HeroSection />
        </section>

        <section id="upload-section" className="snap-start min-h-screen flex items-center justify-center py-10 scroll-mt-16">
          <UploadSection />
        </section>
      </div>
    </div>
  )
}
