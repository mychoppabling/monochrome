// ============================================================
// Главный файл приложения
// ============================================================
// Всё просто:
// - Header, Hero, Collections, Shop, Footer — секции страницы
// - ProductModal — всплывает при клике на товар
// - CartSidebar — выезжает при клике на корзину
// - CartProvider — обёртка для корзины (React Context)

import { useState } from 'react';
import { CartProvider } from './CartContext.tsx';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import Shop from './components/Shop';
import ProductModal from './components/ProductModal';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';

export default function App() {
  // Какой товар открыт в модалке (null = закрыта)
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <CartProvider>
      <div className="min-h-screen bg-white text-black font-sans">
        {/* Шумовая текстура */}
        <div className="noise-overlay" />

        <Header />
        <Hero />
        <FeaturedCollections />
        <Shop onSelect={setSelectedId} />
        <Footer />

        {/* Модалка товара */}
        <ProductModal
          productId={selectedId}
          onClose={() => setSelectedId(null)}
        />

        {/* Корзина */}
        <CartSidebar />
      </div>
    </CartProvider>
  );
}
