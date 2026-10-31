export default function StatCard({ title, value }) {
  return (
    <article className="ticket-stat-card">
      <span>{title}</span>
      <strong>{value}</strong>
    </article>
  );
}
