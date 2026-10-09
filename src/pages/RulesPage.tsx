const rules = [
  'Zakaz cheatów, x-ray, makr walki, exploitów dupe. Kara: ban stały.',
  'Zakaz obrażania rodziny i danych osobowych. Mute, potem ban.',
  'Reklama innych serwerów: ban.',
  'Administracja może wycofać przedmiot z błędu skrzynki. Oddaje klucz, nie gotówkę.',
  'Areny BoxPvP są wyrównane. Szukanie „kita rangowego” na arenie jest bezcelowe i nie jest podstawą reklamacji.',
  'Klucze i rangi są na nick. Oddanie nicku komuś = oddanie usług. Nie przenosimy na inny nick, chyba że nick został skradziony i jest na to dowód w ciągu 14 dni.',
  'Combat tag 15 sekund. Wylogowanie w tagu = śmierć.',
  'Usługa cyfrowa. Po nadaniu rangi lub klucza na nick brak odstąpienia, zgodnie z wyjątkiem dla treści cyfrowej dostarczonej od razu. To jest prosty zapis, bez kancelarii.',
  'Chargeback albo fałszywy przelew = ban nicku i powiązanych, bez dyskusji.',
  'Ceny na stronie są cenami brutto w złotych.',
  'Klucz Eventowy może leżeć na koncie do startu eventu. To nie jest wada.',
  'Klucz Spaczony może dać śmieć. To opisany drop, nie powód do zwrotu.',
  'Awaria płatności: piszesz na discord.gg/kraniec z mailem i nickiem. Nie obiecuj czasu reakcji krótszego niż 48h.',
  'Serwer może zresetować mapę sezonem. Rangi czasowe lecą dalej według daty. Rangi „na zawsze” obowiązują do końca projektu, nie do końca sezonu mapy. Klucze nieotwarte przechodzą sezon. Przedmioty z mapy nie.',
  'Brak powiązania z Mojang i Microsoft. Minecraft jest znakiem towarowym Mojang.',
];

export default function RulesPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Regulamin</h1>
        <ol className="rules-list">
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ol>
        <p className="rules-date">Regulamin obowiązuje od 9 października 2026.</p>
      </div>
    </section>
  );
}
