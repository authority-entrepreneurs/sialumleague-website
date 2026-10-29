import { useMemo, useState } from 'react';

// Responsive table with optional click-to-sort column headers.
// columns: [{ key, label, numeric?, sortable?, render?(row), sortValue?(row) }]
export default function DataTable({ columns, rows, caption, sortable = true, emptyText = 'No results found.' }) {
  const [sort, setSort] = useState({ key: null, dir: 'desc' });

  const sorted = useMemo(() => {
    if (!sort.key) return rows;
    const col = columns.find((c) => c.key === sort.key);
    const value = col.sortValue || ((r) => r[col.key]);
    return [...rows].sort((a, b) => {
      const va = value(a);
      const vb = value(b);
      if (va == null && vb == null) return 0;
      if (va == null) return 1;
      if (vb == null) return -1;
      const cmp = typeof va === 'number' && typeof vb === 'number' ? va - vb : String(va).localeCompare(String(vb));
      return sort.dir === 'asc' ? cmp : -cmp;
    });
  }, [rows, columns, sort]);

  const toggle = (key) =>
    setSort((s) =>
      s.key !== key ? { key, dir: 'desc' } : s.dir === 'desc' ? { key, dir: 'asc' } : { key: null, dir: 'desc' }
    );

  return (
    <div className="table-wrap">
      <table className="data-table">
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>
            {columns.map((c) => {
              const canSort = sortable && c.sortable !== false;
              const active = sort.key === c.key;
              return (
                <th
                  key={c.key}
                  className={c.numeric ? 'num' : undefined}
                  aria-sort={active ? (sort.dir === 'asc' ? 'ascending' : 'descending') : undefined}
                >
                  {canSort ? (
                    <button type="button" className={`sort-btn${active ? ' is-active' : ''}`} onClick={() => toggle(c.key)}>
                      {c.label}
                      <span className="sort-arrow" aria-hidden="true">
                        {active ? (sort.dir === 'asc' ? '▲' : '▼') : '↕'}
                      </span>
                    </button>
                  ) : (
                    c.label
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sorted.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="empty">
                {emptyText}
              </td>
            </tr>
          ) : (
            sorted.map((row, i) => (
              <tr key={i}>
                {columns.map((c) => (
                  <td key={c.key} className={c.numeric ? 'num' : undefined} data-label={c.label}>
                    {c.render ? c.render(row) : row[c.key] ?? ''}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
