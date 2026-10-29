// Site-wide content and links, taken from https://www.sialumleague.com/

export const SITE = {
  name: 'Staten Island Alumni League',
  shortName: 'SIAL',
  phone: '(347) 212-0084',
  phoneHref: 'tel:+13472120084',
  signupShortLink: 'https://bit.ly/SIALsignup',
  signupForm:
    'https://docs.google.com/forms/d/1rXN26mVcLOoAf9TwootqT3VXJZups7W0HcPcoPonXk0/viewform?edit_requested=true',
  facebook: 'https://www.facebook.com/sialumnileague/',
  instagram: 'https://www.instagram.com/sialumnileague/',
  locationsMapEmbed: 'https://www.google.com/maps/d/u/0/embed?mid=1kYak_L2mwIALattLy-2GKKiqeWnAqDp0',
};

// Primary navigation (same order as the original site menu)
export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/standings', label: 'Standings' },
  { to: '/rules', label: 'Rules' },
  { to: '/signup', label: 'Sign Up' },
];

// Every page on the site (the original footer "Pages" widget)
export const ALL_PAGES = [
  { to: '/', label: 'Home' },
  { to: '/past-results', label: 'Past Results' },
  { to: '/rules', label: 'Rules' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/signup', label: 'Sign Up' },
  { to: '/standings', label: 'Standings' },
  { to: '/stats', label: 'Stats' },
];

const mapsSearch = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

// Home page "Locations" list
export const LOCATIONS = [
  { name: 'JumpShotz', address: '120 Androvette Street', href: mapsSearch('JumpShotz, 120 Androvette Street, Staten Island, NY') },
  { name: 'Holy Family', address: '366 Watchogue Road', href: mapsSearch('Holy Family, 366 Watchogue Road, Staten Island, NY') },
  { name: 'I.S.75', address: '455 Huguenot Avenue', href: mapsSearch('I.S. 75, 455 Huguenot Avenue, Staten Island, NY') },
  { name: 'I.S.34', address: '528 Academy Avenue', href: mapsSearch('I.S. 34, 528 Academy Avenue, Staten Island, NY') },
];

// Gyms referenced by the schedule (Google Maps links from the original site)
export const VENUES = {
  is51: {
    name: 'IS 51',
    href: 'https://www.google.com/maps/place/I.S.+051+Edwin+Markham/@40.6229743,-74.1470973,17z/data=!3m1!4b1!4m6!3m5!1s0x89c24dca46e4189b:0xde4863f16c62f9a8!8m2!3d40.6229743!4d-74.1445224!16s%2Fm%2F076382v',
  },
  holyFamily: {
    name: 'Holy Family',
    href: 'https://www.google.com/maps/place/Holy+Family+Roman+Catholic+Church/@40.6162419,-74.1436956,17z/data=!3m1!4b1!4m5!3m4!1s0x89c24c33809d86f3:0x6c92b1dcebdcb56!8m2!3d40.6162285!4d-74.1414003',
  },
  stRitas: {
    name: 'Saint Rita’s',
    // The original link was truncated; rebuilt from the coordinates it contained.
    href: 'https://www.google.com/maps/search/?api=1&query=40.6042573,-74.1314658',
  },
};
