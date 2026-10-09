import { Link } from 'react-router-dom';
import { pages } from './headerData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">KRANIEC · kraniec.pl · <a href="https://discord.gg/kraniec" target="_blank" rel="noopener noreferrer">discord.gg/kraniec</a></div>
          <p>Minecraft jest znakiem towarowym Mojangu.</p>
        </div>
        <nav className="footer-nav" aria-label="Linki do podstron">
          {pages.map(({ to, label }) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </nav>
        <p className="footer-note">Płatności na tej wersji strony nie są podłączone.</p>
      </div>
    </footer>
  );
}
