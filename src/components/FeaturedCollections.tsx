// Избранные коллекции — три карточки в сетке

import { collections } from '../data/products';

export default function FeaturedCollections() {
  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-3">Коллекции</p>
          <h2 className="text-3xl sm:text-5xl font-light text-black">Избранное</h2>
          <div className="w-12 h-[1px] bg-black mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {collections.map((c) => (
            <a key={c.id} href="#" className="group relative aspect-[4/5] overflow-hidden bg-gray-100 block">
              <img
                src={c.image}
                alt={c.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

              {/* Уголки */}
              <div className="absolute top-3 left-3 w-6 h-[1px] bg-white/80" />
              <div className="absolute top-3 left-3 w-[1px] h-6 bg-white/80" />
              <div className="absolute bottom-3 right-3 w-6 h-[1px] bg-white/80" />
              <div className="absolute bottom-3 right-3 w-[1px] h-6 bg-white/80" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-light text-white">{c.name}</h3>
                <p className="text-white/60 text-sm mt-1">{c.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
