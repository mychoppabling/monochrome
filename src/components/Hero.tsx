export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      <div className="ink-container">
        <div className="ink-blob ink-blob-1" />
        <div className="ink-blob ink-blob-2" />
        <div className="ink-blob ink-blob-3" />
        <div className="ink-blob ink-blob-4" />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/8 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/8 to-transparent" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col px-4 mx-auto max-w-3xl">
        <div className="flex-1" />

        <div className="flex items-center justify-center">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-extralight text-white leading-none tracking-[-0.03em]">
            MONOCHROME
          </h1>
        </div>

        <div className="flex-1 flex flex-col items-center justify-start pt-8 sm:pt-12 lg:pt-16">
          <div className="w-16 h-[1px] bg-white/30 mb-6" />

          <p className="text-white/60 text-sm sm:text-base font-light max-w-lg text-center">
            Чёрный — это не цвет. Это отсутствие цвета. Или — его абсолют.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#shop"
              className="bg-white text-black px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-gray-200 transition-colors"
            >
              В магазин
            </a>
            <a
              href="#collections"
              className="border border-white/30 text-white px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:border-white transition-colors"
            >
              Коллекции
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <svg className="w-5 h-5 text-white/30 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
