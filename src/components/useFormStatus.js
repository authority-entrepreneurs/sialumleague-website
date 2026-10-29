import { useState } from 'react';
import { submitForm } from './submitForm.js';

// status: idle | sending | sent | fallback | error
export function useFormStatus(formName) {
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    try {
      const sent = await submitForm(formName, data);
      setStatus(sent ? 'sent' : 'fallback');
      if (sent) form.reset();
    } catch {
      setStatus('error');
    }
  };

  return { status, onSubmit };
}
