export default function StatCard({ title, value = 0 }) {
  return (
    <article className="q06-stat">
      <span>{title}</span>
      <strong>{value}</strong>
    </article>
  );
}
