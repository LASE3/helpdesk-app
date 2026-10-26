import Panel from "./components/Panel.jsx";
import StatCard from "./components/StatCard.jsx";
import "../../style/question03.css";
export default function Question03() {
  const open = 35;
  const closed = 70;
  const pending = 15;
  const total = open + closed + pending;
  const active = open + pending;
  return (
    <div className="exercise q03">
      <div className="exercise-heading">
        <span className="eyebrow">QUESTION 03</span>
        <h1>Ticket Dashboard</h1>
        <p>Corrected reusable components and accurate ticket totals.</p>
      </div>
      <Panel title="Ticket Summary">
        <div className="q03-grid">
          <StatCard title="Open" value={open} />
          <StatCard title="Closed" value={closed} />
          <StatCard title="Pending" value={pending} />
          <StatCard title="Total" value={total} />
          <StatCard title="Active" value={active} />
          <StatCard title="Unassigned" />
        </div>
      </Panel>
    </div>
  );
}
