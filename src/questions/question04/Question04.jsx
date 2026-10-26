import Frame from "./components/Frame.jsx";
import AgentCard from "./components/AgentCard.jsx";
import TicketCard from "./components/TicketCard.jsx";
import "../../style/question04.css";
export default function Question04() {
  const ahmad = {
    name: "Ahmad",
    role: "Team Lead",
    activeTickets: 7,
    capacity: 12,
  };
  const sara = { name: "Sara", role: "Support Agent", capacity: 8 };
  const ticket = { id: 1004, subject: "Login Issue", status: "Open" };
  return (
    <div className="exercise q04">
      <div className="exercise-heading">
        <span className="eyebrow">QUESTION 04</span>
        <h1>Flexible Cards</h1>
        <p>One reusable wrapper, four different content blocks.</p>
      </div>
      <div className="q04-grid">
        <AgentCard {...ahmad} />
        <AgentCard {...sara} />
        <TicketCard {...ticket} />
        <Frame title="Team Note">
          <p>Review pending requests before 3 PM.</p>
        </Frame>
      </div>
    </div>
  );
}
