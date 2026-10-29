export default function PageHero({ title, image, children }) {
  return (
    <section className="page-hero" style={image ? { backgroundImage: `url(${image})` } : undefined}>
      <div className="container page-hero-inner">
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}
