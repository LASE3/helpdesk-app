import Header from "./components/Header.jsx";
import Dashboard from "./components/Dashboard.jsx";
import "../../style/question06.css";
export default function Question06() {
  const systemName = "Support Center";
  const tickets = [
    {
      id: 1001,
      subject: "Login Issue",
      status: "Open",
      priority: "High",
      assignedTo: "Ahmad",
    },
    {
      id: 1002,
      subject: "Payment Failure",
      status: "Pending",
      priority: "High",
      assignedTo: "Sara",
    },
    {
      id: 1003,
      subject: "Report Download",
      status: "Closed",
      priority: "Low",
      assignedTo: "Ahmad",
    },
    { id: 1004, subject: "Password Reset", status: "Open", priority: "Normal" },
  ];
  const agents = [
    { name: "Ahmad", role: "Team Lead", capacity: 4 },
    { name: "Sara", role: "Support Agent", capacity: 3 },
    { name: "Omar", role: "Support Agent", capacity: 2 },
  ];
  return (
    <div className="exercise q06">
      <Header systemName={systemName} />
      <Dashboard tickets={tickets} agents={agents} />
    </div>
  );
}
