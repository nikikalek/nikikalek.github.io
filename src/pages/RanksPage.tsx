import { useCart } from '../context/CartContext';
import { compareRows, keyList, rankList } from '../data/shop';
import CompareTable from '../components/CompareTable';
import RankCard from '../components/RankCard';

export default function RanksPage() {
  const { addItem } = useCart();

  const handleRankAdd = (rankId: string, duration: '30d' | 'forever') => {
    const rank = rankList.find((item) => item.id === rankId);
    if (!rank) return;
    addItem({ type: 'rank', productId: rank.id, variant: duration, nick: '', price: rank.price[duration], label: `${rank.name} · ${duration === '30d' ? '30 dni' : 'na zawsze'}` });
  };

  return (
    <section className="section">
      <div className="container">
        <p className="page-intro">Na arenie BoxPvP każdy ma ten sam kit. Ranga nie zwiększa obrażeń.</p>
        <CompareTable rows={compareRows} />
        <div className="cards-grid four-up">
          {rankList.map((rank) => (
            <RankCard key={rank.id} rank={rank} onAddToCart={handleRankAdd} />
          ))}
        </div>

        <div className="details-stack">
          {rankList.map((rank) => (
            <details key={rank.id} className="detail-block">
              <summary>{rank.name}</summary>
              <div className="detail-content">
                {rank.perks.map((perk) => (
                  <div key={perk}>{perk}</div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
