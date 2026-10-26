import Frame from "./Frame.jsx";
import Badge from "./Badge.jsx";
import InfoRow from "./InfoRow.jsx";
export default function TicketCard({
  id,
  subject,
  status,
  assignedTo = "Unassigned",
}) {
  return (
    <Frame title={subject} subtitle={`Ticket #${id}`}>
      <InfoRow label="Assigned To" value={assignedTo} />
      <div className="q04-card-footer">
        <Badge label={status} tone="blue" />
      </div>
    </Frame>
  );
}
