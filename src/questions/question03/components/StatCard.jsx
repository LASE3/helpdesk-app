export default function StatCard({ title, value = 0 }) {
  return (
    <article className="q03-stat-card">
      <h3>{title}</h3>
      <p>{value ?? 0}</p>
    </article>
  );
}
