import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import RanksPage from './pages/RanksPage';
import KeysPage from './pages/KeysPage';
import JoinPage from './pages/JoinPage';
import RulesPage from './pages/RulesPage';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';

export default function App() {
  return (
    <CartProvider>
      <div className="app-shell">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sklep" element={<ShopPage />} />
            <Route path="/rangi" element={<RanksPage />} />
            <Route path="/klucze" element={<KeysPage />} />
            <Route path="/dolacz" element={<JoinPage />} />
            <Route path="/regulamin" element={<RulesPage />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
