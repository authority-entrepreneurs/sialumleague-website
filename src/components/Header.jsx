import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV, SITE } from '../data/site.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label={`${SITE.name} – Home`}>
          <img src="/images/logo.png" alt="" width="48" height="48" />
          <span className="brand-text">
            Staten Island <span>Alumni League</span>
          </span>
        </Link>

        <button
          className={`hamburger${open ? ' is-open' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="primary-nav" className={`primary-nav${open ? ' is-open' : ''}`} aria-label="Site Navigation">
          <ul>
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} className={item.to === '/signup' ? 'nav-cta' : undefined}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
