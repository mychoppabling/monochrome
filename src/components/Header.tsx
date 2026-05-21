// Шапка — три колонки: навигация | логотип | корзина

import { useCart } from '../useCart';
import { useState } from 'react';

const links = ['Магазин', 'Коллекции', 'О нас', 'Контакты'];

export default function Header() {
  const [menu, setMenu] = useState(false);
  const { toggle, count } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/*
          Три равные колонки:
          слева — навигация, центр — логотип, справа — корзина
        */}
        <div className="grid grid-cols-3 items-center h-16">
          {/* Левая колонка: навигация */}
          <nav className="hidden sm:flex gap-8 justify-start">
            {links.map((l) => (
              <a key={l} href="#" className="text-xs tracking-widest uppercase text-gray-600 hover:text-black transition-colors">
                {l}
              </a>
            ))}
          </nav>
          <button className="sm:hidden text-sm tracking-widest uppercase justify-self-start" onClick={() => setMenu(!menu)}>
            ☰
          </button>

          {/* Центр: логотип */}
          <a href="#" className="text-center text-lg sm:text-xl font-extralight tracking-[0.3em] text-black">
            MONOCHROME
          </a>

          {/* Правая колонка: корзина */}
          <button onClick={toggle} className="relative text-xs tracking-widest uppercase justify-self-end">
            Корзина
            {count > 0 && (
              <span className="absolute -top-2 -right-4 w-4 h-4 bg-black text-white text-[9px] flex items-center justify-center rounded-full">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {menu && (
        <div className="sm:hidden bg-white border-t px-4 py-4 space-y-3" onClick={() => setMenu(false)}>
          {links.map((l) => (
            <a key={l} href="#" className="block text-sm tracking-widest uppercase text-gray-600">
              {l}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
