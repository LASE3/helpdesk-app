import { StatCard } from "./components/StatCard.jsx";
import '../../style/question03.css';
import Panel from "./components/Panel.jsx";
export default function Question03() {
  const open = 35; // it's a string on that's the Problem (const open = "35";) but it should be a number (const open = 35;)
  const closed = 70;
  const pending = 15;
  const total = open + closed + pending;
  const active = open + pending;
  return (
     <Panel title="Ticket Summary"> 
     {/* The component name should be capitalized. <Panel> not <panel> */}
      <StatCard title="Open" value={open} />
      <StatCard title="Closed" value={closed} />
      <StatCard title="Pending" value={pending} />
      <StatCard title="Total" value={total} />
      <StatCard title="Active" value={active} />
      <StatCard title="Unassigned" value={0} />
    </Panel>
  );
}
