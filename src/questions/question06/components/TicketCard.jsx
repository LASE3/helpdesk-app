import Badge from "./Badge.jsx";
const statusTones = { Open: "blue", Pending: "orange", Closed: "green" };
const priorityTones = { High: "red", Normal: "blue", Low: "gray" };
export default function TicketCard({
  id,
  subject,
  status,
  priority,
  assignedTo = "Unassigned",
}) {
  return (
    <article className="q06-ticket">
      <span className="q06-ticket-id">TICKET #{id}</span>
      <h4>{subject}</h4>
      <div className="q06-badges">
        <Badge label={status} tone={statusTones[status]} />
        <Badge label={priority} tone={priorityTones[priority]} />
      </div>
      <p>
        Assigned to <strong>{assignedTo}</strong>
      </p>
    </article>
  );
}
