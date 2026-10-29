import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import DataTable from '../components/DataTable.jsx';
import { PAST_RESULTS } from '../data/league.js';

const COLUMNS = [
  { key: 'date', label: 'Date' },
  { key: 'home', label: 'Home' },
  { key: 'away', label: 'Away' },
  { key: 'score', label: 'Score', numeric: true },
];

export default function PastResults() {
  return (
    <>
      <PageHero title="Past Results" image="/images/hero-standings.jpg" />
      <Section variant="light">
        <div className="table-block narrow">
          <DataTable columns={COLUMNS} rows={PAST_RESULTS} />
        </div>
      </Section>
    </>
  );
}
