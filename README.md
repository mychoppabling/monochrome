# MONOCHROME

Минималистичный интернет-магазин чёрно-белой одежды.

**Стек:** React + Vite + TypeScript + Tailwind CSS

## Запуск

```bash
npm install
npm run dev
```

## Структура проекта

```
src/
├── types.ts               # Типы (товар, корзина)
├── CartContext.tsx         # Контекст корзины (React Context)
├── data/products.ts       # Данные товаров и коллекций
├── components/
│   ├── Header.tsx          # Шапка + навигация
│   ├── Hero.tsx            # Главный экран
│   ├── FeaturedCollections.tsx  # Избранные коллекции
│   ├── Shop.tsx            # Магазин (пол + категории)
│   ├── ProductModal.tsx    # Детальный просмотр товара
│   ├── CartSidebar.tsx     # Корзина
│   └── Footer.tsx          # Подвал
├── App.tsx                 # Сборка приложения
├── main.tsx                # Точка входа
└── index.css               # Стили
```

