import { useState } from "react";

export default function TicketPanel({
  id,
  subject = "Untitled Ticket",
  status,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <article className="q02-ticket">
      <div className="q02-summary">
        <div>
          <span className="q02-id">Ticket #{id}</span>
          <h2>{subject}</h2>
        </div>
        <span className={`q02-status q02-status-${status.toLowerCase()}`}>
          {status}
        </span>
      </div>
      <button
        type="button"
        className="q02-toggle"
        aria-expanded={isExpanded}
        aria-controls={`ticket-details-${id}`}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {isExpanded ? "Hide details" : "Show details"}
      </button>
      {isExpanded && (
        <div className="q02-details" id={`ticket-details-${id}`}>
          {children}
        </div>
      )}
    </article>
  );
}
