import { useState } from 'react';
import type { KeyItem } from '../data/shop';

export default function KeyCard({ item, onAddToCart }: { item: KeyItem; onAddToCart: (keyId: string, variant: number) => void }) {
  const [variant, setVariant] = useState<1 | 3 | 5 | 10>(1);

  return (
    <article className={`product-card key-card ${item.special ? 'key-card-danger' : ''}`} style={{ borderColor: item.color }}>
      {item.tag ? <div className="card-badge">{item.tag}</div> : null}
      <div className="card-header-row">
        <span className="mini-index" style={{ color: item.color }}>{item.name}</span>
        {item.featured ? <span className="mini-label">NAJLEPSZA</span> : null}
      </div>

      <p className="product-description">{item.note ?? item.description}</p>

      <div className="amount-selector" role="radiogroup" aria-label={`Wybór ilości dla ${item.name}`}>
        {[1, 3, 5, 10].map((value) => (
          <button
            key={value}
            type="button"
            className={variant === value ? 'selected' : ''}
            onClick={() => setVariant(value as 1 | 3 | 5 | 10)}
          >
            {value}
          </button>
        ))}
      </div>

      <div className="price-row">
        <span className="price-tag" style={{ color: item.featured ? '#e7c36a' : item.color }}>
          {item.prices[variant]} zł
        </span>
        <span className="old-price">{item.basePrice * variant} zł</span>
      </div>

      <div className="discount-line">
        oszczędzasz {item.basePrice * variant - item.prices[variant]} zł
      </div>

      <button type="button" className="primary-button" onClick={() => onAddToCart(item.id, variant)}>
        Dodaj do koszyka
      </button>
    </article>
  );
}
