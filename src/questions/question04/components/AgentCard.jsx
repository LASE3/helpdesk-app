import Frame from "./Frame.jsx";
import Badge from "./Badge.jsx";
import InfoRow from "./InfoRow.jsx";
export default function AgentCard({ name, role, activeTickets = 0, capacity }) {
  const remaining = capacity - activeTickets;
  return (
    <Frame title={name} subtitle={role}>
      <InfoRow label="Active Tickets" value={activeTickets} />
      <InfoRow label="Capacity" value={capacity} />
      <InfoRow label="Remaining" value={remaining} />
      <div className="q04-card-footer">
        <Badge label="Agent" tone="green" />
      </div>
    </Frame>
  );
}
