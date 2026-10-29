import { Link } from 'react-router-dom';
import { ALL_PAGES, SITE } from '../data/site.js';
import { FacebookIcon, InstagramIcon, PhoneIcon } from './Icons.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img src="/images/logo.png" alt={SITE.name} className="footer-logo" width="96" height="96" />
          <a href={SITE.phoneHref} className="footer-phone">
            <PhoneIcon /> {SITE.phone}
          </a>
          <div className="social-row">
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div>
          <h5>Pages</h5>
          <ul className="footer-links">
            {ALL_PAGES.map((p) => (
              <li key={p.to}>
                <Link to={p.to}>{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5>Join the League</h5>
          <p>Ready for next season? Sign your team up today.</p>
          <a href={SITE.signupShortLink} className="btn btn-accent" target="_blank" rel="noopener noreferrer">
            Sign Up For Next Season
          </a>
        </div>
      </div>

      <div className="copyright">
        Copyright © {new Date().getFullYear()} {SITE.name}
      </div>
    </footer>
  );
}
