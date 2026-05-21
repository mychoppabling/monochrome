// Боковая панель корзины

import { useCart } from '../useCart';

const colorNames: Record<string, string> = {
  Black: 'Чёрный', White: 'Белый', Gray: 'Серый',
};

export default function CartSidebar() {
  const { items, isOpen, close, changeQty, remove, total } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Затемнение фона */}
      <div className="fixed inset-0 bg-black/40 z-50" onClick={close} />

      {/* Панель */}
      <div className="fixed top-0 right-0 bottom-0 w-full sm:w-[380px] bg-white z-50 flex flex-col shadow-xl">
        {/* Шапка */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm tracking-widest uppercase">Корзина</h2>
          <button onClick={close} className="text-sm text-gray-400 hover:text-black">✕</button>
        </div>

        {/* Товары */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="text-sm text-gray-400 text-center mt-20">Корзина пуста</p>
          ) : (
            <div className="space-y-4">
              {items.map((item, i) => (
                <div key={`${item.productId}-${i}`} className="flex gap-3 pb-4 border-b border-gray-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-20 object-cover grayscale shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-black truncate">{item.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {colorNames[item.color]} / {item.size}
                    </p>
                    <p className="text-sm text-black mt-1">${item.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => changeQty(item.productId, item.size, item.color, -1)}
                        className="w-6 h-6 border border-gray-200 text-xs flex items-center justify-center hover:bg-gray-50"
                      >
                        −
                      </button>
                      <span className="text-xs w-3 text-center">{item.quantity}</span>
                      <button
                        onClick={() => changeQty(item.productId, item.size, item.color, 1)}
                        className="w-6 h-6 border border-gray-200 text-xs flex items-center justify-center hover:bg-gray-50"
                      >
                        +
                      </button>
                      <button
                        onClick={() => remove(item.productId, item.size, item.color)}
                        className="ml-auto text-gray-300 hover:text-red-400 text-xs"
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Итого */}
        {items.length > 0 && (
          <div className="px-5 py-4 border-t border-gray-100 space-y-3">
            <div className="flex justify-between">
              <span className="text-sm tracking-widest uppercase text-gray-500">Итого</span>
              <span className="text-base font-medium">${total.toFixed(2)}</span>
            </div>
            <button className="w-full py-3 bg-black text-white text-xs tracking-widest uppercase hover:bg-gray-800 transition-colors">
              Оформить заказ
            </button>
          </div>
        )}
      </div>
    </>
  );
}
