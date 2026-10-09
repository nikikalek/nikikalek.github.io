import { Link } from 'react-router-dom';
import { rankList, keyList, bundles, keyOrder } from '../data/shop';
import { status } from '../data/status';
import { useCart } from '../context/CartContext';
import RankCard from '../components/RankCard';
import CopyIp from '../components/CopyIp';
import PortalRing from '../components/PortalRing';

export default function HomePage() {
  const { addItem } = useCart();

  const handleRankAdd = (rankId: string, duration: '30d' | 'forever') => {
    const rank = rankList.find((item) => item.id === rankId);
    if (!rank) return;
    addItem({
      type: 'rank',
      productId: rank.id,
      variant: duration,
      nick: '',
      price: rank.price[duration],
      label: `${rank.name} · ${duration === '30d' ? '30 dni' : 'na zawsze'}`,
      item: rank,
    });
  };

  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">serwer java 1.21+</span>
            <h1>KRANIEC</h1>
            <p className="lead">Koniec mapy. Najlepszy klucz kosztuje 15 zł.</p>
            <div className="hero-actions">
              <CopyIp label="Kopiuj IP" />
              <Link to="/klucze#kres" className="ghost-button large">Zobacz Klucz Kresu</Link>
            </div>
            <div className="trust-row">
              <span>non-premium</span>
              <span>•</span>
              <span>BoxPvP</span>
              <span>•</span>
              <span>Strefa Kresu</span>
            </div>
          </div>

          <div className="hero-art">
            <PortalRing size={460} />
            <div className="price-overlay">
              <span className="tiny-label">KLUCZ KRESU</span>
              <span className="big-price">15 zł</span>
              <span className="tiny-copy">za sztukę, od razu na nick</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container trust-band">
        Areny bez pay-to-win. Klucze na nick. Klucz Kresu 15 zł.
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Rangi</h2>
            <Link to="/rangi">porównaj</Link>
          </div>
          <div className="cards-grid four-up">
            {rankList.map((rank) => (
              <RankCard key={rank.id} rank={rank} onAddToCart={handleRankAdd} />
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-panel">
        <div className="container key-spotlight">
          <div className="money-box">
            <div className="eyebrow dark">Klucz Kresu</div>
            <div className="price-hero">15 zł</div>
            <ul>
              <li>pieniądze</li>
              <li>netherite</li>
              <li>elytra</li>
            </ul>
          </div>
          <div className="ladder-box">
            {keyOrder.map((keyId) => {
              const key = keyList.find((item) => item.id === keyId)!;
              const isActive = keyId === 'kres';
              return (
                <div key={key.id} className={`ladder-item ${isActive ? 'active' : ''}`}>
                  <span className="ladder-name">{key.name}</span>
                  <span className="ladder-dot" style={{ background: key.color }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col-boxes">
          <article className="info-box">
            <h3>BoxPvP</h3>
            <p>Spawn bez PvP. Areny 1v1, 2v2 i FFA. Kit jest wyrównany, bez różnicy rang. Ranga nie daje obrażeń. Śmierć na arenie nic nie zabiera i wracasz na spawn.</p>
          </article>
          <article className="info-box">
            <h3>Strefa Kresu</h3>
            <p>Wyspa purpuru z PvP. Tutaj działają przedmioty ze skrzynek. Śmierć zabiera ekwipunek, ale nie klucze i nie rangi. ELITA nie lata w tej strefie.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container join-steps">
          <h2>Jak wejść</h2>
          <div className="steps-grid">
            <div className="step-card">
              <span>01</span>
              <h3>Launcher 1.21+</h3>
              <p>Uruchom najnowszy launcher Java 1.21+.</p>
            </div>
            <div className="step-card">
              <span>02</span>
              <h3>Dodaj serwer</h3>
              <p>Dodaj adres <strong>kraniec.pl</strong> jako serwer.</p>
            </div>
            <div className="step-card">
              <span>03</span>
              <h3>Wejdź</h3>
              <p>Wystarczy kliknąć dołącz i wejść na spawn.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
