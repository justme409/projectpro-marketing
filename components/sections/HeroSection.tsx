'use client'

export function HeroSection() {
  const scrollToFeatures = () => {
    const element = document.getElementById('features')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            AI‑generated ITPs & Management Plans for <span className="text-emerald-600">Civil Engineering</span>
          </h1>
          <p className="mb-10 text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Automatically generate Inspection & Test Plans and Project Management Plans from your drawings and specs — then manage lots, NCRs, and drawings in one place.
          </p>
          <div className="flex items-center justify-center">
            <button
              onClick={scrollToFeatures}
              className="border border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-8 py-3 text-lg font-medium rounded-md transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}



