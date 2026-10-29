import { useState } from 'react';
import { SIGNUP_OPTIONS } from '../data/league.js';
import { useFormStatus } from './useFormStatus.js';
import FormNotice from './FormNotice.jsx';

const Select = ({ name, label, options, required, disabled }) => (
  <label>
    <span>{label}</span>
    <select name={name} required={required} disabled={disabled} defaultValue="">
      <option value="" disabled={required}>Please Select...</option>
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  </label>
);

export default function SignupForm() {
  const { status, onSubmit } = useFormStatus('Sign Up');
  const [conference, setConference] = useState('');
  const isWeekday = conference.startsWith('Weekday');

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-grid">
        <label>
          <span>Captain First Name</span>
          <input name="captain_first_name" autoComplete="given-name" required />
        </label>
        <label>
          <span>Captain Last Name</span>
          <input name="captain_last_name" autoComplete="family-name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          <span>Phone Number</span>
          <input type="tel" name="phone" autoComplete="tel" required />
        </label>
        <label>
          <span>Team Name</span>
          <input name="team_name" required />
        </label>
        <label>
          <span>Conference</span>
          <select name="conference" required value={conference} onChange={(e) => setConference(e.target.value)}>
            <option value="" disabled>Please Select...</option>
            {SIGNUP_OPTIONS.conferences.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </label>
        <Select
          name="preferred_day"
          label="Preferred Day (for Weekday Conferences only)"
          options={SIGNUP_OPTIONS.days}
          disabled={!isWeekday}
        />
        <Select name="preferred_time" label="Preferred Time" options={SIGNUP_OPTIONS.times} />
        <Select
          name="second_choice_day"
          label="Second Choice (for Weekday Conferences only)"
          options={SIGNUP_OPTIONS.days}
          disabled={!isWeekday}
        />
        <Select name="second_choice_time" label="Second Choice" options={SIGNUP_OPTIONS.times} />
      </div>
      <button type="submit" className="btn btn-accent" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Submit'}
      </button>
      <FormNotice status={status} successText="Thanks! Your team sign up has been received." />
      <p className="form-fineprint">
        *By submitting this form you are agreeing to the Staten Island Alumni League Rules and Payment Structure for
        your chosen Season Length
      </p>
    </form>
  );
}
