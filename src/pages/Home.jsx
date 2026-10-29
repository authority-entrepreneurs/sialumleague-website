import { Link } from 'react-router-dom';
import Section from '../components/Section.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { ExternalIcon, FacebookIcon, InstagramIcon, PhoneIcon, PinIcon } from '../components/Icons.jsx';
import { ABOUT } from '../data/league.js';
import { LOCATIONS, SITE } from '../data/site.js';

const QUICK_LINKS = [
  { to: '/schedule', label: 'Schedule', text: "This week's games, gyms & refs" },
  { to: '/standings', label: 'Standings', text: 'Records across every division' },
  { to: '/rules', label: 'Rules', text: 'League rules & regulations' },
  { to: '/signup', label: 'Sign Up', text: 'Conferences, pricing & registration' },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero-inner">
          <img src="/images/logo.png" alt={SITE.name} className="home-hero-logo" width="320" height="320" />
          <div className="home-hero-copy">
            <p className="eyebrow">Adult Men's &amp; Women's Basketball</p>
            <h1>{SITE.name}</h1>
            <a href={SITE.phoneHref} className="call-now">
              <PhoneIcon /> Call Now: {SITE.phone}
            </a>
            <div className="hero-actions">
              <a href={SITE.signupShortLink} className="btn btn-accent btn-lg" target="_blank" rel="noopener noreferrer">
                Sign Up For Next Season
              </a>
              <Link to="/schedule" className="btn btn-dark btn-lg">View Schedule</Link>
            </div>
          </div>
        </div>
      </section>

      <Section variant="light" title="About SIAL">
        <p className="lead center">{ABOUT}</p>
        <div className="quick-links">
          {QUICK_LINKS.map((q) => (
            <Link key={q.to} to={q.to} className="quick-link">
              <strong>{q.label}</strong>
              <span>{q.text}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section variant="dark" className="cta-band">
        <h2 className="section-title">Ready to Join?</h2>
        <p className="lead center">Choose the league that fits your schedule best.</p>
        <div className="center">
          <a href={SITE.signupShortLink} className="btn btn-accent btn-lg" target="_blank" rel="noopener noreferrer">
            Sign Up For Next Season
          </a>
        </div>
      </Section>

      <Section variant="court" title="Follow us on Social Media" className="social-section">
        <div className="social-buttons">
          <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-lg">
            <FacebookIcon /> Facebook
          </a>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-lg">
            <InstagramIcon /> Instagram
          </a>
        </div>
      </Section>

      <Section variant="hoop" id="locations">
        <h2 className="section-title">
          Our <span className="highlight">Locations</span>
        </h2>
        <div className="locations-grid">
          <div className="map-frame">
            <iframe
              src={SITE.locationsMapEmbed}
              title="Staten Island Alumni League locations map"
              loading="lazy"
              allowFullScreen
            />
          </div>
          <ul className="location-list">
            {LOCATIONS.map((l) => (
              <li key={l.name}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  <PinIcon />
                  <span>
                    <strong>{l.name}</strong>
                    {l.address}
                  </span>
                  <ExternalIcon />
                </a>
              </li>
            ))}
            <li>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-block">
                <InstagramIcon /> Follow on Instagram
              </a>
            </li>
          </ul>
        </div>
      </Section>

      <Section variant="dark" title="Contact Us" id="contact">
        <ContactForm />
      </Section>
    </>
  );
}
