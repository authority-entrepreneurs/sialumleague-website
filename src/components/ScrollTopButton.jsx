import { useEffect, useState } from 'react';

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      className={`scroll-top${visible ? ' is-visible' : ''}`}
      title="Scroll to Top"
      aria-label="Scroll to Top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg width="22" height="22" viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M24.958 18.491l-8.008-8.008c-0.534-0.534-1.335-0.534-1.868 0l-8.008 8.008c-0.534 0.534-0.534 1.335 0 1.868s1.335 0.534 1.868 0l7.074-7.074 7.074 7.074c0.267 0.267 0.667 0.4 0.934 0.4s0.667-0.133 0.934-0.4c0.534-0.534 0.534-1.335 0-1.868z"
        />
      </svg>
    </button>
  );
}
