import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useLenis } from './hooks/useLenis';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import './App.css';

// Lazy load heavy components for better code splitting
const AboutSection = lazy(() => import('./components/AboutSection'));
const ShopPage = lazy(() => import('./components/ShopPage'));
const CartPage = lazy(() => import('./components/CartPage'));
const CheckoutPage = lazy(() => import('./components/CheckoutPage'));

// Loading component
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    color: '#dda0dd',
    fontSize: '1.2rem',
    fontWeight: '600'
  }}>
    Loading...
  </div>
);

// Smaller loading component for sections
const SectionLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    color: '#dda0dd',
    fontSize: '1rem'
  }}>
    Loading section...
  </div>
);

function HomePage() {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const footer = document.querySelector('.footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShopClick = () => {
    navigate('/shop');
  };

  return (
    <div className="app">
      <Navbar
        onAboutClick={handleAboutClick}
        onContactClick={handleContactClick}
        onShopClick={handleShopClick}
      />
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <AboutSection />
      </Suspense>
      <Footer />
    </div>
  );
}

function App() {
  useLenis(); // Initialize Lenis for smooth scrolling

  return (
    <CartProvider>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </Suspense>
      </Router>
    </CartProvider>
  );
}

export default App;
