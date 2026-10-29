import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import SignupForm from '../components/SignupForm.jsx';
import { ADDITIONAL_COSTS, CONFERENCES, PAYMENT_METHODS, PAYMENT_TERMS } from '../data/league.js';
import { SITE } from '../data/site.js';

export default function SignUp() {
  return (
    <>
      <PageHero title="Sign Up" image="/images/court.jpg" />

      <Section variant="dark" title="Conferences">
        <div className="pricing-grid">
          {CONFERENCES.map((c) => (
            <article key={c.name} className="price-card">
              <h3>{c.name}</h3>
              <p className="price">
                <span className="currency">$</span>
                {c.price}
                <span className="per">Per Team</span>
              </p>
              <ul>
                <li><span>Location</span>{c.location}</li>
                <li><span>Games</span>{c.games} Games GTD</li>
                <li><span>Time Slots</span>{c.slots}</li>
              </ul>
              <a href={SITE.signupForm} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-block">
                Sign Up
              </a>
            </article>
          ))}
        </div>
        <ul className="payment-terms">
          {PAYMENT_TERMS.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </Section>

      <Section variant="light" title="Additional Costs">
        <ul className="cost-list">
          {ADDITIONAL_COSTS.map((c) => (
            <li key={c.label}>
              <strong>{c.amount}</strong>
              <span>{c.label}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section variant="court" title="Sign Up!" id="register">
        <div className="signup-layout">
          <div className="card">
            <SignupForm />
          </div>
          <aside className="card payment-card">
            <h3>Payment</h3>
            <ul>
              {PAYMENT_METHODS.map((p) => (
                <li key={p.method}>
                  <span>{p.method}</span>
                  <strong>{p.value}</strong>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
