type Props = {
  rows: Array<{ label: string; values: Record<'vip' | 'svip' | 'sponsor' | 'elita', string> }>;
};

export default function CompareTable({ rows }: Props) {
  const columns = ['vip', 'svip', 'sponsor', 'elita'] as const;

  return (
    <div className="compare-wrap">
      <table className="compare-table">
        <thead>
          <tr>
            <th>Perk</th>
            <th>VIP</th>
            <th>SVIP</th>
            <th>SPONSOR</th>
            <th>ELITA</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <td>{row.label}</td>
              {columns.map((column) => (
                <td key={column}>{row.values[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
