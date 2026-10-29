import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import DataTable from '../components/DataTable.jsx';
import { PPG_LEADERS } from '../data/league.js';

const COLUMNS = [
  { key: 'rank', label: '#', numeric: true, sortable: false, render: (r) => r.rank },
  { key: 'name', label: 'Name', render: (r) => <strong>{r.name}</strong> },
  { key: 'ppg', label: 'PPG', numeric: true, render: (r) => r.ppg.toFixed(1) },
  { key: 'team', label: 'Team' },
];

const rows = PPG_LEADERS.map((p, i) => ({ ...p, rank: i + 1 }));

export default function Stats() {
  return (
    <>
      <PageHero title="Stats" image="/images/hero-schedule.jpg" />
      <Section variant="light">
        <div className="table-block narrow">
          <h2 className="table-title">PPG Leaders</h2>
          <DataTable columns={COLUMNS} rows={rows} />
        </div>
      </Section>
    </>
  );
}
