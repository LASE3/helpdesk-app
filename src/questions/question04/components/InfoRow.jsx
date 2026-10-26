export default function InfoRow({ label, value }) {
  return (
    <div className="q04-info-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
