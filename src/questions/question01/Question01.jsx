import { useState } from "react";
import StatCard from "./components/StatCard.jsx";
import "../../style/question01.css";

const EMPLOYEE = "Ahmad";
const CAPACITY = 8;
const INITIAL_TICKETS = 2;

export default function Question01() {
  const [tickets, setTickets] = useState(INITIAL_TICKETS);
  const available = CAPACITY - tickets;
  return (
    <section className="ticket-practice q01">
      <div className="ticket-practice-heading">
        <span>QUESTION 01 / 06</span>
        <h1>Assigned Tickets Dashboard</h1>
        <p>
          Track {EMPLOYEE}'s unfinished support tickets and remaining capacity.
        </p>
      </div>
      <div className="q01-agent">
        Support agent <strong>{EMPLOYEE}</strong>
      </div>
      <div className="q01-stats">
        <StatCard title="Maximum capacity" value={CAPACITY} />
        <StatCard title="Unfinished tickets" value={tickets} />
        <StatCard title="Available capacity" value={available} />
      </div>
      <div className="q01-actions">
        <button
          type="button"
          onClick={() => setTickets((prev) => Math.min(CAPACITY, prev + 1))}
          disabled={tickets === CAPACITY}
        >
          Receive ticket
        </button>
        <button
          type="button"
          onClick={() => setTickets((prev) => Math.max(0, prev - 1))}
          disabled={tickets === 0}
        >
          Complete ticket
        </button>
        <button
          type="button"
          className="q01-reset"
          onClick={() => setTickets(INITIAL_TICKETS)}
        >
          Reset
        </button>
      </div>
      {tickets === CAPACITY && (
        <p className="q01-message" role="status">
          وصل الموظف إلى الحد الأقصى للتذاكر.
        </p>
      )}
      {tickets === 0 && (
        <p className="q01-message" role="status">
          لا توجد تذاكر تحتاج إلى معالجة.
        </p>
      )}
    </section>
  );
}
