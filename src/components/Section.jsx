// Themed page section. variant: "light" (white texture), "dark" (black texture),
// "court" (hardwood floor) or "hoop" (photo background).
export default function Section({ variant = 'light', title, id, className = '', children }) {
  return (
    <section id={id} className={`section section-${variant} ${className}`}>
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
