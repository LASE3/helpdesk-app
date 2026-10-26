export default function Badge({ label, tone = "blue" }) {
  const safeTone = ["blue", "green", "orange", "red", "gray"].includes(tone)
    ? tone
    : "blue";
  return <span className={`q06-badge q06-badge--${safeTone}`}>{label}</span>;
}
