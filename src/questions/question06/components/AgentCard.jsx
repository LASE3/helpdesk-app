export default function AgentCard({ name, role, capacity, activeTickets = 0 }) {
  const remaining = capacity - activeTickets;
  return (
    <article className="q06-agent">
      <div className="q06-agent-heading">
        <div className="q06-avatar">{name.charAt(0)}</div>
        <div>
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>
      <div className="q06-agent-metrics">
        <div>
          <span>Active</span>
          <strong>{activeTickets}</strong>
        </div>
        <div>
          <span>Capacity</span>
          <strong>{capacity}</strong>
        </div>
        <div>
          <span>Remaining</span>
          <strong>{remaining}</strong>
        </div>
      </div>
    </article>
  );
}
