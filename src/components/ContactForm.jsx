import { useFormStatus } from './useFormStatus.js';
import FormNotice from './FormNotice.jsx';

export default function ContactForm() {
  const { status, onSubmit } = useFormStatus('Contact Form');

  return (
    <form className="form form-dark" onSubmit={onSubmit}>
      <div className="form-grid">
        <label>
          <span>First Name</span>
          <input name="first_name" autoComplete="given-name" required />
        </label>
        <label>
          <span>Last Name</span>
          <input name="last_name" autoComplete="family-name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          <span>Phone Number</span>
          <input type="tel" name="phone" autoComplete="tel" />
        </label>
        <label className="full">
          <span>Message</span>
          <textarea name="message" rows="5" required />
        </label>
      </div>
      <button type="submit" className="btn btn-accent" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Submit'}
      </button>
      <FormNotice status={status} successText="Thanks! Your message has been sent. We'll be in touch soon." />
    </form>
  );
}
