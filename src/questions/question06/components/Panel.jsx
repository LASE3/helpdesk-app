export default function Panel({ title, children }) {
  return (
    <section className="q06-panel">
      <h3>{title}</h3>
      {children}
    </section>
  );
}
