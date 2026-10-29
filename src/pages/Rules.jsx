import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import { RULES } from '../data/league.js';

export default function Rules() {
  return (
    <>
      <PageHero title="League Rules" image="/images/hero-rules.jpg" />
      <Section variant="light">
        <div className="rules">
          <h2 className="rules-heading">Rules and Regulations</h2>
          <p className="rules-badge">{RULES.intro}</p>
          <ol className="rules-list">
            {RULES.main.map((r) => (
              <li key={r} className={r.startsWith('**') ? 'emphasis' : undefined}>
                {r.replace(/\*\*/g, '')}
              </li>
            ))}
          </ol>

          <div className="rules-alert">
            {RULES.important.map((r) => (
              <p key={r}>{r}</p>
            ))}
          </div>

          <h2 className="rules-heading">Additional Rules</h2>
          <ul className="rules-list bullets">
            {RULES.additional.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
