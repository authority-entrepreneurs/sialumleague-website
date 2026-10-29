import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import { PinIcon } from '../components/Icons.jsx';
import { SCHEDULE } from '../data/league.js';
import { VENUES } from '../data/site.js';

function Venue({ id }) {
  const v = VENUES[id];
  return (
    <a href={v.href} target="_blank" rel="noopener noreferrer" className="venue-link">
      <PinIcon /> {v.name}
    </a>
  );
}

export default function Schedule() {
  return (
    <>
      <PageHero title="Schedule" image="/images/hero-schedule.jpg" />

      <Section variant="dark" title="Past Results" className="compact">
        <div className="center">
          <Link to="/past-results" className="btn btn-accent btn-lg">Game Results</Link>
        </div>
      </Section>

      <Section variant="light">
        <div className="schedule-days">
          {SCHEDULE.map((d) => (
            <article key={d.day} className="day-card">
              <header className="day-head">
                <h2>{d.day}</h2>
                <span className="day-date">{d.date || 'N/A'}</span>
              </header>

              {d.games.length === 0 ? (
                <p className="no-games">No games scheduled</p>
              ) : (
                <div className="table-wrap">
                  <table className="data-table schedule-table">
                    <thead>
                      <tr>
                        <th>League</th>
                        <th>Home (White)</th>
                        <th>Away (Black)</th>
                        <th>Time</th>
                        <th>Gym</th>
                        <th>Refs</th>
                      </tr>
                    </thead>
                    <tbody>
                      {d.games.map((g, i) => (
                        <tr key={i}>
                          <td data-label="League"><span className="tag">{g.league}</span></td>
                          <td data-label="Home (White)"><span className="team team-home">{g.home}</span></td>
                          <td data-label="Away (Black)"><span className="team team-away">{g.away}</span></td>
                          <td data-label="Time" className="nowrap">{g.time}</td>
                          <td data-label="Gym"><Venue id={g.venue} /></td>
                          <td data-label="Refs">{g.refs}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
