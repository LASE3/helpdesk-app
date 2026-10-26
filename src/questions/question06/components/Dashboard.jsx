import Panel from "./Panel.jsx";
import StatCard from "./StatCard.jsx";
import TicketCard from "./TicketCard.jsx";
import AgentCard from "./AgentCard.jsx";
const isActive = (ticket) =>
  ticket.status === "Open" || ticket.status === "Pending";
export default function Dashboard({ tickets, agents }) {
  const open = tickets.filter((ticket) => ticket.status === "Open").length;
  const pending = tickets.filter(
    (ticket) => ticket.status === "Pending",
  ).length;
  const closed = tickets.filter((ticket) => ticket.status === "Closed").length;
  const unassignedActive = tickets.filter(
    (ticket) => isActive(ticket) && !ticket.assignedTo,
  ).length;
  return (
    <div className="q06-dashboard">
      <Panel title="Ticket Statistics">
        <div className="q06-stats">
          <StatCard title="Total Tickets" value={tickets.length} />
          <StatCard title="Open" value={open} />
          <StatCard title="Pending" value={pending} />
          <StatCard title="Closed" value={closed} />
          <StatCard title="Unassigned Active" value={unassignedActive} />
        </div>
      </Panel>
      <Panel title="Support Tickets">
        <div className="q06-ticket-grid">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} {...ticket} />
          ))}
        </div>
      </Panel>
      <Panel title="Support Team">
        <div className="q06-agent-grid">
          {agents.map((agent) => {
            const activeTickets = tickets.filter(
              (ticket) => isActive(ticket) && ticket.assignedTo === agent.name,
            ).length;
            return (
              <AgentCard
                key={agent.name}
                {...agent}
                activeTickets={activeTickets}
              />
            );
          })}
        </div>
      </Panel>
      <Panel title="Team Notes">
        <p className="q06-notes">
          Active tickets are Open or Pending. Closed tickets do not use agent
          capacity. All metrics are derived from the ticket and agent data.
        </p>
      </Panel>
    </div>
  );
}
