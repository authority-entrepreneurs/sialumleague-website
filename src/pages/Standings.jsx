import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import DataTable from '../components/DataTable.jsx';
import { STANDINGS } from '../data/league.js';

const pct = (r) => (r.w + r.l ? r.w / (r.w + r.l) : null);
const diff = (r) => (r.pf != null && r.pa != null ? r.pf - r.pa : null);

const COLUMNS = [
  { key: 'team', label: 'Team', render: (r) => <strong>{r.team}</strong> },
  { key: 'w', label: 'W', numeric: true },
  { key: 'l', label: 'L', numeric: true },
  {
    key: 'pct',
    label: 'PCT',
    numeric: true,
    sortValue: pct,
    render: (r) => (pct(r) == null ? '—' : pct(r).toFixed(3).replace(/^0/, '')),
  },
  { key: 'pf', label: 'Points For', numeric: true },
  { key: 'pa', label: 'Points Against', numeric: true },
  {
    key: 'diff',
    label: 'Diff',
    numeric: true,
    sortValue: diff,
    render: (r) => {
      const d = diff(r);
      if (d == null) return '';
      return <span className={d > 0 ? 'pos' : d < 0 ? 'neg' : undefined}>{d > 0 ? `+${d}` : d}</span>;
    },
  },
];

export default function Standings() {
  return (
    <>
      <PageHero title="Standings" image="/images/hero-standings.jpg" />
      <Section variant="light">
        <p className="table-hint">Tap a column header to sort.</p>
        {STANDINGS.map((div) => (
          <div key={div.title} className="table-block">
            <h2 className="table-title">{div.title}</h2>
            <DataTable columns={COLUMNS} rows={div.teams} />
          </div>
        ))}
      </Section>
    </>
  );
}
