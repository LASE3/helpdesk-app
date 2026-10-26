export default function Badge({ label, tone = "blue" }) {
  const safeTone = ["blue", "green", "orange"].includes(tone) ? tone : "blue";
  return <span className={`q04-badge q04-badge--${safeTone}`}>{label}</span>;
}
