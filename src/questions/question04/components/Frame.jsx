export default function Frame({
  title,
  subtitle = "Support Center",
  children,
}) {
  return (
    <article className="q04-frame">
      <header className="q04-frame-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </header>
      <div className="q04-frame-body">{children}</div>
    </article>
  );
}
