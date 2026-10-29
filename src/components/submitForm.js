// Posts form data to VITE_FORM_ENDPOINT (e.g. Formspree). Returns false when no
// endpoint is configured so the caller can show the fallback contact options.
export async function submitForm(formName, data) {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
  if (!endpoint) return false;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ form: formName, ...data }),
  });
  if (!res.ok) throw new Error(`Form submission failed (${res.status})`);
  return true;
}
