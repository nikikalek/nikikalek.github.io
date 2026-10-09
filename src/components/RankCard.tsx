import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Rank } from '../data/shop';

export default function RankCard({ rank, onAddToCart }: { rank: Rank; onAddToCart: (rankId: string, duration: '30d' | 'forever') => void }) {
  const [duration, setDuration] = useState<'30d' | 'forever'>('30d');

  return (
    <article className="product-card rank-card" style={{ borderTop: rank.id === 'elita' ? '2px solid #e7c36a' : undefined }}>
      <div className="product-topline" style={{ color: rank.color }}>
        {rank.prefix}
      </div>
      <h3>{rank.name}</h3>
      <p className="product-description">{rank.description}</p>

      <div className="segmented-control" role="tablist" aria-label={`Wybór czasu dla ${rank.name}`}>
        <button type="button" className={duration === '30d' ? 'active' : ''} onClick={() => setDuration('30d')}>
          30 dni
        </button>
        <button type="button" className={duration === 'forever' ? 'active' : ''} onClick={() => setDuration('forever')}>
          na zawsze
        </button>
      </div>

      <div className="price-row">
        <span className="price-tag">{rank.price[duration]} zł</span>
      </div>

      <ul className="perk-list">
        {rank.perks.slice(0, 4).map((perk) => (
          <li key={perk}>{perk}</li>
        ))}
      </ul>

      <div className="card-actions">
        <button type="button" className="primary-button" onClick={() => onAddToCart(rank.id, duration)}>
          Dodaj do koszyka
        </button>
        <Link to="/rangi" className="ghost-button">
          Porównaj
        </Link>
      </div>
    </article>
  );
}
