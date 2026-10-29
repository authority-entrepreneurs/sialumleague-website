// League data, taken from https://www.sialumleague.com/

export const ABOUT =
  'Staten Island Alumni League was created to accommodate all different level of play, for Adults. We run both; Mens and Womens Leagues. In our league, you will be able to choose which league fits your schedule best. Talent, Organization, and Officiating are all high quality, which we take pride in. We are happy you are ready to join our league!';

// ---------- Schedule ----------
// Each day lists its games; days with no games show "N/A" like the original.
export const SCHEDULE = [
  { day: 'Sunday', date: null, games: [] },
  {
    day: 'Monday',
    date: '10/26',
    games: [
      { league: 'Eastern Conference', home: 'SNIPERS', away: 'SI FLAMINGOS', time: '8:30PM', venue: 'stRitas', refs: 'RAY/BUTCH' },
    ],
  },
  {
    day: 'Tuesday',
    date: '10/27',
    games: [
      { league: 'Western Conference', home: 'REDEEM TEAM', away: 'GOOFBALLS', time: '8:00 PM', venue: 'is51', refs: 'BUTCH/ANTHONY' },
      { league: 'Western Conference', home: 'DAWAH', away: '2FG HOUNDS', time: '9:00 PM', venue: 'is51', refs: 'BUTCH/ANTHONY' },
    ],
  },
  {
    day: 'Wednesday',
    date: '10/28',
    games: [
      { league: 'Western Conference', home: 'HOOP MAFIA', away: 'SCARY ISLAND', time: '8:20PM', venue: 'is51', refs: 'BUTCH/GIL' },
      { league: 'Western Conference', home: 'PETTY GANG', away: 'WHO U BANK WITH', time: '9:15PM', venue: 'is51', refs: 'BUTCH/GIL' },
    ],
  },
  {
    day: 'Thursday',
    date: '10/29',
    games: [
      { league: 'Western Conference', home: 'THE LIGHT', away: 'PRIMETIME', time: '8:00PM', venue: 'is51', refs: 'BUTCH/GIL' },
      { league: 'Western Conference', home: 'REDEEM TEAM', away: 'CHIPCHASERS', time: '9:00PM', venue: 'is51', refs: 'BUTCH/GIL' },
    ],
  },
  { day: 'Friday', date: null, games: [] },
];

// ---------- Standings ----------
const t = (team, w, l, pf = null, pa = null) => ({ team, w, l, pf, pa });

export const STANDINGS = [
  {
    title: 'Western Conference All Stars',
    teams: [
      t('SCARY ISLAND', 5, 1, 489, 379),
      t('CHIP CHASERS', 2, 4, 434, 466),
      t('HOOP MAFIA', 3, 3, 363, 390),
      t('JIMMY MAX', 3, 3, 425, 443),
      t('2FG HOUNDS', 1, 5, 395, 508),
      t('REDEEM TEAM', 6, 0, 499, 375),
      t('GOOFBALLS', 2, 4, 362, 391),
      t('THE LIGHT', 1, 5, 403, 508),
      t('DAWAH', 0, 6, 403, 480),
      t('PRIMETIME', 4, 2, 388, 357),
      t('WHO U BANK WITH', 3, 3, 380, 373),
      t('PETTY GANG', 6, 0, 459, 372),
    ],
  },
  {
    title: 'Eastern Conference All Stars',
    teams: [
      t('BAMS 83', 4, 3, 493, 460),
      t('FIRST ROUND EXIT', 0, 7, 351, 573),
      t('OUT OF SHAPE BALLERS', 3, 4, 428, 432),
      t('SNIPERS', 6, 1, 522, 473),
      t('ACES', 2, 5, 418, 439),
      t('BUCKET FACTORY', 4, 3, 381, 378),
      t('FROZEN BANANAS', 5, 2, 524, 449),
      t('THE DEPARTED', 4, 3, 486, 432),
      t('SI FLAMINGOS', 2, 5, 441, 459),
      t('LOTSO', 5, 2, 469, 463),
    ],
  },
  {
    title: 'Old Timers Division',
    teams: ['Heat', 'Celtics', "76'ers", 'Milwaukee', 'Lakers', 'Suns', 'Warriors'].map((n) => t(n, 0, 0, 0, 0)),
  },
  {
    title: 'High School Division',
    teams: ['Lakers', 'Warriors', 'Suns', 'Clippers', 'Knicks', 'Nets', 'Bulls', 'Bucks'].map((n) => t(n, 0, 0)),
  },
  {
    title: 'Diamond Division',
    teams: ['Sparks', 'Liberty', 'Mercury', 'Lynx', 'Storm', 'Sky', 'Mercury', 'Aces'].map((n) => t(n, 0, 0)),
  },
];

// ---------- Stats ----------
export const PPG_LEADERS = [
  { name: 'Lebron James', ppg: 28.4, team: 'Lakers' },
  { name: 'Kawhi Leonard', ppg: 27.6, team: 'Clippers' },
  { name: 'Devin Booker', ppg: 27.1, team: 'Suns' },
  { name: 'James Harden', ppg: 26.7, team: 'Rockets' },
  { name: 'Russell Westbrook', ppg: 26.3, team: 'Rockets' },
  { name: 'Anthony Davis', ppg: 24.0, team: 'Lakers' },
  { name: 'Luka Doncic', ppg: 23.2, team: 'Mavericks' },
  { name: 'Kemba Walker', ppg: 22.9, team: 'Celtics' },
  { name: 'Demar Derozan', ppg: 21.5, team: 'Spurs' },
  { name: 'Kyle Lowry', ppg: 19.8, team: 'Raptors' },
];

// ---------- Past Results ----------
export const PAST_RESULTS = [
  { date: 'July', home: 'Home', away: 'Away', score: '100-50' },
  { date: 'July', home: 'Away', away: 'Home', score: '50-100' },
];

// ---------- Sign Up ----------
export const CONFERENCES = [
  { name: "Sat Morning Men's League", price: 550, location: 'IS34', games: 8, slots: '9am-12pm' },
  { name: "Sun Night Women's League", price: 550, location: 'Holy Family', games: 8, slots: '7pm-10pm' },
  { name: "Weekday Men's League", price: 600, location: 'IS75', games: 10, slots: '8pm & 9pm' },
  { name: "Weekday Late Men's League", price: 550, location: 'Holy Family', games: 8, slots: '8:45pm & 9:45pm' },
];

export const PAYMENT_TERMS = [
  'All payments are due by Week 3',
  'At least 50% of the league fee is due by Week 1',
  'Credit Card must be left on file if not paid in full by Week 1',
];

export const ADDITIONAL_COSTS = [
  { amount: '$100', label: 'Forfeit Fee (for payment of referees and scorekeeper)' },
  { amount: '$60', label: 'per game for referees and scorekeeper' },
  { amount: '$40', label: 'for an additional player added to the roster (includes shirt)' },
  { amount: '$20', label: 'for an additional jersey (per jersey)' },
];

export const PAYMENT_METHODS = [
  { method: 'Cash App', value: '$SalvatoreFabozzi' },
  { method: 'Venmo', value: '@Sal-Fabozzi' },
  { method: 'Check', value: 'Staten Island Alumni League' },
];

export const SIGNUP_OPTIONS = {
  conferences: ["Saturday Morning (Men's)", "Sunday Evening (Women's)", "Weekday (Men's)", "Weekday Late (Men's)"],
  days: ['Monday', 'Tuesday', 'Wednesday'],
  times: [
    '9:00am (Saturday)',
    '10:00am (Saturday)',
    '11:00am (Saturday)',
    '12:00pm (Saturday)',
    '7:00pm (Sunday)',
    '8:00pm (Sunday)',
    '9:00pm (Sunday)',
    '10:00pm (Sunday)',
    '8:00pm (Weekday)',
    '9:00pm (Weekday)',
    '9:45pm (Weekday Late)',
    '10:45 (Weekday Late)',
  ],
};

// ---------- Rules ----------
export const RULES = {
  intro: 'College Rules',
  main: [
    'Prior to the Jump: Everyone has an appropriate league jersey; if not, a technical foul (2 shots) will take place prior to the tip.',
    '**IF A TEAM HAS 2 GAMES IN 1 WEEK, THEY ARE EXCUSED TO WEAR JERSEY/ HOWEVER, THEY MUST WEAR THE PROPER COLOR THEY WERE ASSIGNED TO THAT GAME**',
    'Games will start no later than 10 mins after game time with whatever players are present. (if there aren’t enough players to start, clock will run with team present receiving 1 point every minute that passes). A forfeit will be declared at halftime if the team still isn’t there!',
    'Any team that is 10 min late or more for their game LOSES their 1st Half TIMEOUTS',
    '20 minute halves. Running clock.',
    'Halftime is two (2) Minutes, clock will run to start and end halftime!',
    'Clock stops in the last min of 1st half & the last min (1) of 2nd Half. If a team is leading by 20 or more points the clock will not stop!',
    'Jerseys are $25 each. If you already have a Staten Island Alumni League jersey, you don’t have to purchase a new one.',
    'No players allowed to be ADDED after Week 4! (Must play 4 Reg season games to participate in Playoffs)',
    'Players are allowed 5 personal fouls, you are disqualified from game with 6 personal fouls, no exceptions!. per Game',
    '7 team fouls- 1 and 1/ 10 team fouls- 2 shots',
    'Teams are provided with two 30 second timeouts per half.',
    'Overtime will be 3 minutes, 1 timeout only, no carry-overs/ Clock stops LAST MINUTE.',
    'Scorekeeper will be responsible for keeping fouls and points',
    'Players that have played 4 or more regular season games and names are on roster will be allowed to play in playoffs',
    'Two technical fouls one game suspension',
    'Negative energy such as swearing, taunting, disrespecting the refs or any other foul play will not be tolerated',
  ],
  important: [
    'FORFEIT FEE IS $120 – THIS COVERS PAYING FOR THE REFEREES AND THE SCOREKEEPER. FEE MUST BE PAID BEFORE NEXT GAME! GAMES FOR YOUR TEAM WILL NOT BE SCHEDULED UNLESS THE FORFEIT FEE IS PAID!',
    'YOU ARE EXPECTED TO MAKE EVERY GAME YOUR TEAM IS SCHEDULED. PLEASE NOTE THAT WE ARE MANAGING MULTIPLE LEAGUES AND CHANGES IN SCHEDULE AFFECT THE ENTIRE WAY OUR SEASON IS RAN! ANYTIME YOU NEED A SPECIFIC DAY OFF, LET US KNOW PRIOR SO WE CAN ACCOMMODATE.',
    'Any of these rules not obeyed can potentially lead to a player or team being ejected from the league without refund.',
  ],
  additional: [
    'All substitutes must come from the scorer’s table not the bench. You must inform the scorekeeper that you want to sub, the scorekeeper will hit the horn at the next dead ball, and the referee will blow the whistle for you to sub in!',
    'With all inbounds after a dead ball, the ball must be given to the referee first and the referee when then give it back to you to inbound!',
    'Clock does NOT stop when a basket is scored!',
    'Grabbing the ball after a basket is made, rolling the ball away after a basket is made, stepping over the inbound line (not making contact with the inbounder or the ball)  after the basket is made are all examples of a delay-of-game.',
    'Throwing the ball in the air, slamming the ball against the floor, kicking the ball away, stepping over the inbound line (making contact with the inbounder or the ball) are all examples of a technical foul.',
  ],
};
