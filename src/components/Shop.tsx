// Магазин — переключатель Мужское/Женское, секции по категориям

import { useState } from 'react';
import { products } from '../data/products';
import type { ProductCategory, ProductGender } from '../types';

const labels: Record<ProductCategory, string> = {
  Tops: 'Футболки и топы',
  Bottoms: 'Штаны и низ',
  Outerwear: 'Верхняя одежда',
  Accessories: 'Аксессуары',
};

export default function Shop({ onSelect }: { onSelect: (id: string) => void }) {
  const [gender, setGender] = useState<ProductGender>('male');

  const categories: ProductCategory[] = ['Tops', 'Bottoms', 'Outerwear', 'Accessories'];

  // Функция-фильтр: товары по полу и категории
  const byCategory = (cat: ProductCategory) =>
    products.filter((p) => p.gender === gender && p.category === cat);

  return (
    <section id="shop" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-light text-black">
            {gender === 'male' ? 'Мужчинам' : 'Женщинам'}
          </h2>
          <div className="w-12 h-[1px] bg-black mx-auto mt-4" />
        </div>

        {/* Переключатель пола */}
        <div className="flex justify-center gap-0 mb-16">
          <button
            onClick={() => setGender('male')}
            className={`px-8 py-3 text-xs tracking-[0.2em] uppercase transition-all ${
              gender === 'male' ? 'bg-black text-white' : 'bg-white text-gray-400 border border-gray-200 hover:border-black'
            }`}
          >
            Мужское
          </button>
          <button
            onClick={() => setGender('female')}
            className={`px-8 py-3 text-xs tracking-[0.2em] uppercase transition-all ${
              gender === 'female' ? 'bg-black text-white' : 'bg-white text-gray-400 border border-gray-200 hover:border-black'
            }`}
          >
            Женское
          </button>
        </div>

        {/* Секции по категориям */}
        {categories.map((cat) => {
          const items = byCategory(cat);
          if (items.length === 0) return null;

          return (
            <div key={cat} className="mb-14">
              {/* Название категории */}
              <h3 className="text-xl font-light text-black mb-6 tracking-tight">
                {labels[cat]}
              </h3>

              {/* Карточки товаров */}
              <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
                {items.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => onSelect(product.id)}
                    className="group flex-shrink-0 w-[180px] sm:w-[220px] cursor-pointer"
                  >
                    {/* Фото товара (лиц не видно — всё чёрно-белое) */}
                    <div className="aspect-[3/4] overflow-hidden bg-gray-200 mb-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                      />
                      {product.isNew && (
                        <span className="absolute top-2 left-2 bg-white/90 text-black text-[9px] tracking-widest uppercase px-2 py-1">
                          Новинка
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-medium text-black truncate">{product.name}</h4>
                    <p className="text-sm text-gray-500 mt-0.5">${product.price}</p>

                    {/* Цвета */}
                    <div className="flex gap-1.5 mt-2">
                      {product.colors.map((c) => (
                        <span
                          key={c}
                          className="w-3 h-3 rounded-full border border-gray-300"
                          style={{
                            backgroundColor: c === 'Black' ? '#000' : c === 'White' ? '#fff' : '#a3a3a3',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
