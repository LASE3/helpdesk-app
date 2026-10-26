export default function Panel({ title, children }) {
  return (
    <section className="q05-panel">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
