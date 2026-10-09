import { NavLink } from 'react-router-dom';
import CopyIp from './CopyIp';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const links = [
  { to: '/', label: 'Start' },
  { to: '/sklep', label: 'Sklep' },
  { to: '/rangi', label: 'Rangi' },
  { to: '/klucze', label: 'Klucze' },
  { to: '/dolacz', label: 'Jak dołączyć' },
  { to: '/regulamin', label: 'Regulamin' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { openCart, total } = useCart();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand-mark" aria-label="Strona główna">
          <span className="brand-name">KRANIEC</span>
          <span className="brand-dot" />
        </NavLink>

        <nav className="main-nav" aria-label="Nawigacja główna">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <button type="button" className="cart-button" onClick={openCart} aria-label="Otwórz koszyk">
            Koszyk ({total} zł)
          </button>
          <CopyIp />
        </div>

        <button type="button" className="mobile-menu-button" aria-label="Otwórz menu" onClick={() => setOpen((v) => !v)}>
          {open ? 'Zamknij' : 'Menu'}
        </button>
      </div>

      {open ? (
        <div className="mobile-menu">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className="mobile-link">
              {link.label}
            </NavLink>
          ))}
          <CopyIp label="Kopiuj IP" />
        </div>
      ) : null}
    </header>
  );
}
