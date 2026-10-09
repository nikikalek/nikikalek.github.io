import { r } from 'node:stream';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { bundles, keyList, rankList } from '../data/shop';
import RankCard from '../components/RankCard';

export default function ShopPage() {
  const { addItem } = useCart();
  const [filter, setFilter] = useState<'all' | 'ranks' | 'keys' | 'bundles'>('all');

  const catalog = [
    ...((filter === 'all' || filter === 'ranks') ? rankList.slice().reverse() : []),
    ...((filter === 'all' || filter === 'keys') ? keyList.slice().sort((a, b) => b.weight - a.weight) : []),
    ...((filter === 'all' || filter === 'bundles') ? bundles : []),
  ];

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
    });
  };

  const handleKeyAdd = (keyId: string, quantity: number) => {
    const key = keyList.find((item) => item.id === keyId);
    if (!key) return;
    addItem({
      type: 'key',
      productId: key.id,
      variant: quantity,
      nick: '',
      price: key.prices[quantity as 1 | 3 | 5 | 10],
      label: `${key.name} · ${quantity} szt.`,
    });
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-header-shop">
          <h1>Sklep</h1>
          <div className="filter-row">
            {['all', 'ranks', 'keys', 'bundles'].map((choice) => (
              <button key={choice} type="button" className={filter === choice ? 'filter-button active' : 'filter-button'} onClick={() => setFilter(choice as 'all' | 'ranks' | 'keys' | 'bundles')}>
                {choice === 'all' ? 'Wszystko' : choice === 'ranks' ? 'Rangi' : choice === 'keys' ? 'Klucze' : 'Zestawy'}
              </button>
            ))}
          </div>
        </div>

        <div className="cards-grid">
          {catalog.map((entry) => {
            if ('id' in entry && 'prefix' in entry) {
              return <RankCard key={entry.id} rank={entry} onAddToCart={handleRankAdd} />;
            }
            if ('id' in entry && 'basePrice' in entry) {
              return <div key={entry.id}>placeholder</div>;
            }
            return (
              <article key={entry.id} className="product-card bundle-card">
                <div className="product-topline">Zestaw</div>
                <h3>{entry.name}</h3>
                <p>{entry.description}</p>
                <div className="price-row">
                  <span className="price-tag">{entry.price} zł</span>
                  <span className="old-price">{entry.original} zł</span>
                </div>
                <button type="button" className="primary-button" onClick={() => addItem({ type: 'bundle', productId: entry.id, variant: 'bundle', nick: '', price: entry.price, label: entry.name })}>Dodaj do koszyka</button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
