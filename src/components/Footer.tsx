// Подвал сайта

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Магазин */}
          <div>
            <h4 className="text-xs tracking-widest text-white/40 uppercase mb-4">Магазин</h4>
            {['Футболки', 'Штаны', 'Верхняя одежда', 'Аксессуары'].map((l) => (
              <a key={l} href="#" className="block text-sm text-white/60 hover:text-white py-1 transition-colors">{l}</a>
            ))}
          </div>
          {/* Компания */}
          <div>
            <h4 className="text-xs tracking-widest text-white/40 uppercase mb-4">Компания</h4>
            {['О нас', 'Магазины', 'Карьера'].map((l) => (
              <a key={l} href="#" className="block text-sm text-white/60 hover:text-white py-1 transition-colors">{l}</a>
            ))}
          </div>
          {/* Поддержка */}
          <div>
            <h4 className="text-xs tracking-widest text-white/40 uppercase mb-4">Поддержка</h4>
            {['Контакты', 'Доставка', 'Возврат'].map((l) => (
              <a key={l} href="#" className="block text-sm text-white/60 hover:text-white py-1 transition-colors">{l}</a>
            ))}
          </div>
          {/* Соцсети */}
          <div>
            <h4 className="text-xs tracking-widest text-white/40 uppercase mb-4">Мы в</h4>
            {['Instagram', 'Twitter', 'TikTok'].map((l) => (
              <a key={l} href="#" className="block text-sm text-white/60 hover:text-white py-1 transition-colors">{l}</a>
            ))}
          </div>
        </div>

        {/* Подписка */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/40 font-light mb-4">
            Подпишитесь на новости коллекций
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30"
            />
            <button className="bg-white text-black px-6 py-3 text-xs tracking-widest uppercase hover:bg-gray-200 transition-colors">
              Подписаться
            </button>
          </div>
        </div>

        <p className="text-xs text-white/20 text-center mt-8">
          &copy; {new Date().getFullYear()} MONOCHROME
        </p>
      </div>
    </footer>
  );
}
