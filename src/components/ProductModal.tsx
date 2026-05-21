// Модальное окно товара — детальный просмотр

import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../useCart';
import type { ProductSize, ProductColor } from '../types';

// Названия цветов на русском
const colorNames: Record<ProductColor, string> = {
  Black: 'Чёрный',
  White: 'Белый',
  Gray: 'Серый',
};

export default function ProductModal({
  productId,
  onClose,
}: {
  productId: string | null;
  onClose: () => void;
}) {
  const product = products.find((p) => p.id === productId);
  const { add } = useCart();

  const [size, setSize] = useState<ProductSize | null>(null);
  const [color, setColor] = useState<ProductColor | null>(null);
  const [done, setDone] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    if (!size || !color) return;
    add(product, size, color);
    setDone(true);
    setTimeout(() => { setDone(false); onClose(); }, 800);
  };

  // Название категории на русском
  const catName: Record<string, string> = {
    Tops: 'Верх', Bottoms: 'Низ', Outerwear: 'Верхняя одежда', Accessories: 'Аксессуары',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto grid sm:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрыть */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-gray-100 text-sm"
        >
          ✕
        </button>

        {/* Фото товара */}
        <div className="aspect-[4/5] bg-gray-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* Информация */}
        <div className="p-6 sm:p-8 flex flex-col">
          <span className="text-[10px] tracking-widest text-gray-400 uppercase">
            {catName[product.category] || product.category}
          </span>

          <h2 className="text-xl sm:text-2xl font-light text-black mt-2 leading-tight">
            {product.name}
          </h2>

          <p className="text-lg text-black mt-2">${product.price}</p>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">{product.description}</p>

          {/* Цвет */}
          <div className="mt-6">
            <p className="text-xs tracking-widest text-gray-500 uppercase mb-2">
              Цвет: <span className="text-black">{color ? colorNames[color] : '—'}</span>
            </p>
            <div className="flex gap-2">
              {product.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    color === c ? 'border-black scale-110' : 'border-gray-200'
                  }`}
                  style={{ backgroundColor: c === 'Black' ? '#000' : c === 'White' ? '#fff' : '#a3a3a3' }}
                />
              ))}
            </div>
          </div>

          {/* Размер */}
          <div className="mt-5">
            <p className="text-xs tracking-widest text-gray-500 uppercase mb-2">
              Размер: <span className="text-black">{size || '—'}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`min-w-[40px] h-9 text-xs tracking-widest uppercase border transition-all ${
                    size === s ? 'bg-black text-white border-black' : 'bg-white text-gray-600 border-gray-200 hover:border-black'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Кнопка */}
          <button
            onClick={handleAdd}
            disabled={!size || !color}
            className={`mt-auto pt-6 w-full py-4 text-xs tracking-widest uppercase transition-all ${
              done
                ? 'bg-gray-800 text-white'
                : size && color
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            {done ? '✓ Добавлено' : 'В корзину'}
          </button>
        </div>
      </div>
    </div>
  );
}
