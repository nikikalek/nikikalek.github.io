import { useCart } from '../context/CartContext';
import type { CartItem } from '../types';

const PAYMENT_MESSAGE = 'Płatność nie jest podłączona. Ten koszyk jest gotowy pod Tebex, EasyPay albo CraftingStore — nie nadajemy rangi z tej strony.';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, total, clearCart, updateQuantity } = useCart();
  const [nick, setNick] = useState('');
  const [voucher, setVoucher] = useState('');
  const [error, setError] = useState('');

  const validateNick = (value: string) => /^[A-Za-z0-9_]{3,16}$/.test(value);

  const handleCheckout = (method: string) => {
    if (!nick.trim()) {
      setError('Wpisz nick Minecraft w formacie 3–16 znaków.');
      return;
    }
    if (!validateNick(nick)) {
      setError('Nick jest niepoprawny. Użyj 3–16 znaków: litery, cyfry, podkreślnik.');
      return;
    }
    if (items.length === 0) {
      setError('Koszyk jest pusty.');
      return;
    }
    setError('');
    const message = `${method}: ${PAYMENT_MESSAGE}`;
    window.alert(message);
  };

  if (!isOpen) return null;

  return (
    <div className="drawer-backdrop" onClick={closeCart}>
      <aside className="cart-drawer" onClick={(event) => event.stopPropagation()} aria-label="Koszyk">
        <div className="drawer-header">
          <h3>Koszyk</h3>
          <button type="button" className="icon-button" onClick={closeCart} aria-label="Zamknij koszyk">×</button>
        </div>

        <label className="field-label">
          <span>Nick Minecraft</span>
          <input value={nick} onChange={(e) => setNick(e.target.value)} placeholder="np. KraniecPlayer" />
        </label>

        {error ? <div className="form-error">{error}</div> : null}

        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <strong>{item.label}</strong>
                <div className="cart-meta">{item.type === 'key' ? `x${item.variant}` : item.variant === 'forever' ? 'na zawsze' : '30 dni'}</div>
              </div>
              <div className="cart-right">
                <span>{item.price} zł</span>
                {item.type === 'key' ? (
                  <div className="cart-quantity-row">
                    {[1, 3, 5, 10].map((value) => (
                      <button key={value} type="button" className={Number(item.variant) === value ? 'selected' : ''} onClick={() => updateQuantity(item.id, value)}>
                        {value}
                      </button>
                    ))}
                  </div>
                ) : null}
                <button type="button" className="link-button" onClick={() => removeItem(item.id)}>Usuń</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <span>Suma</span>
          <strong>{total} zł</strong>
        </div>

        <div className="payment-grid">
          {['BLIK', 'Przelewy24', 'PaySafeCard', 'Voucher'].map((method) => (
            <button key={method} type="button" className="payment-button" onClick={() => handleCheckout(method)}>
              {method}
            </button>
          ))}
        </div>

        {voucher ? (
          <div className="voucher-box">
            <label>Voucher</label>
            <input value={voucher} onChange={(e) => setVoucher(e.target.value)} placeholder="Wpisz kod" />
            <button type="button" onClick={() => handleCheckout('Voucher')}>Zatwierdź</button>
          </div>
        ) : (
          <div className="voucher-box">
            <label>Voucher</label>
            <input value={voucher} onChange={(e) => setVoucher(e.target.value)} placeholder="Wpisz kod" />
          </div>
        )}

        <button type="button" className="secondary-button" onClick={clearCart}>Wyczyść koszyk</button>
      </aside>
    </div>
  );
}
