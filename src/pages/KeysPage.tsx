import { useCart } from '../context/CartContext';
import { keyList } from '../data/shop';
import KeyCard from '../components/KeyCard';
import LootTable from '../components/LootTable';

export default function KeysPage() {
  const { addItem } = useCart();

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

  const kres = keyList.find((item) => item.id === 'kres')!;
  const others = keyList.filter((item) => item.id !== 'kres');

  return (
    <section className="section">
      <div className="container">
        <div className="key-featured-wrap" id="kres">
          <article className="product-card key-card key-card-featured" style={{ borderColor: kres.color }}>
            <div className="card-header-row">
              <span className="mini-index" style={{ color: kres.color }}>{kres.name}</span>
              <span className="mini-label">NAJLEPSZA</span>
            </div>
            <p className="product-description">Najlepsza skrzynia na serwerze. Specjalnie za 15 zł.</p>
            <div className="amount-selector multi">{[1, 3, 5, 10].map((value) => (
              <button key={value} type="button" className="selector-button">{value}</button>
            ))}</div>
            <div className="price-row"><span className="price-tag" style={{ color: '#e7c36a' }}>15 zł</span><span className="old-price">15 zł</span></div>
            <div className="card-actions" style={{ justifyContent: 'flex-start' }}>
              <button type="button" className="primary-button" onClick={() => handleKeyAdd(kres.id, 1)}>Dodaj do koszyka</button>
            </div>
            <LootTable rows={kres.drops} />
          </article>
        </div>

        <div className="cards-grid other-keys">
          {others.map((item) => (
            <KeyCard key={item.id} item={item} onAddToCart={handleKeyAdd} />
          ))}
        </div>

        <div className="rules-boxes">
          <article className="info-box">
            <h3>Jak działa otwieranie</h3>
            <p>Ruletka w GUI trwa około 4 sekundy. Możesz pominąć po 1s. Klucze są przypisane do nicku i nie wypadają przy śmierci. /bitwa wyzwij &lt;nick&gt; &lt;klucz&gt; rozstrzyga remis lub lepszy drop.</p>
          </article>
          <article className="info-box warning-box">
            <h3>Ostrzeżenie przy Spaczonym</h3>
            <p>Klucz Spaczony może dać śmieć. Może wypaść rzecz, której nie ma w innych skrzyniach. To opisany drop, nie powód do zwrotu.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
