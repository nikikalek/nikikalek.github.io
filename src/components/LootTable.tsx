type Props = {
  rows: Array<{ label: string; chance: number; color: string }>;
};

export default function LootTable({ rows }: Props) {
  return (
    <div className="loot-table">
      {rows.map((row) => (
        <div key={row.label} className="loot-row">
          <div className="loot-label">
            <span className="loot-color" style={{ background: row.color }} />
            <span>{row.label}</span>
          </div>
          <div className="loot-bar-wrap">
            <div className="loot-bar" style={{ width: `${row.chance}%`, background: row.color }} />
          </div>
          <div className="loot-chance">{row.chance}%</div>
        </div>
      ))}
    </div>
  );
}
