import CopyIp from '../components/CopyIp';

export default function JoinPage() {
  return (
    <section className="section">
      <div className="container join-layout">
        <div className="panel-block">
          <h1>Dołącz do serwera</h1>
          <div className="ip-display-row">
            <span className="ip-display">kraniec.pl</span>
            <CopyIp />
          </div>
          <div className="status-pill">serwer włączony · sloty 200</div>
        </div>

        <div className="info-grid">
          <article className="info-box">
            <h3>Wersja</h3>
            <p>Java 1.21+, nie bedrock.</p>
          </article>
          <article className="info-box">
            <h3>Non-premium</h3>
            <p>Uruchom launcher, dodaj serwer, wpisz nick, który zostanie zapisany na pierwszym wejściu.</p>
          </article>
          <article className="info-box">
            <h3>Premium</h3>
            <p>Ta sama IP, ten sam serwer. Login premium działa bez dodatkowych kroków.</p>
          </article>
          <article className="info-box">
            <h3>Po wejściu</h3>
            <p>Spawn, tab z komendami, /warp skrzynie, /klucze.</p>
          </article>
        </div>

        <div className="problem-box">
          <h3>Częste problemy</h3>
          <ul>
            <li>zła wersja</li>
            <li>firewall</li>
            <li>nick ze spacją — niedozwolony</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
