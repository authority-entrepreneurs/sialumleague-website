import { SITE } from '../data/site.js';

export default function FormNotice({ status, successText }) {
  if (status === 'sent') {
    return <p className="form-notice success" role="status">{successText}</p>;
  }
  if (status === 'fallback' || status === 'error') {
    return (
      <p className="form-notice warn" role="status">
        {status === 'error' ? 'Something went wrong sending your message. ' : ''}
        Please call us at <a href={SITE.phoneHref}>{SITE.phone}</a> or use our{' '}
        <a href={SITE.signupForm} target="_blank" rel="noopener noreferrer">online sign up form</a>.
      </p>
    );
  }
  return null;
}
