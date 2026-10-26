export default function Header({ systemName }) {
  return (
    <header className="q06-header">
      <div>
        <span className="eyebrow">LIVE DATA OVERVIEW</span>
        <h2>{systemName}</h2>
        <p>Ticket activity, team workload and operational summary.</p>
      </div>
      <span className="q06-status">● Sample Data</span>
    </header>
  );
}
