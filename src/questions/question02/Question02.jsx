import TicketPanel from "./components/TicketPanel.jsx";
import "../../style/question02.css";

export default function Question02() {
  return (
    <section className="ticket-practice q02">
      <div className="ticket-practice-heading">
        <span>QUESTION 02 / 06</span>
        <h1>Expandable Ticket Cards</h1>
        <p>Open and close each ticket independently to see its details.</p>
      </div>
      <div className="q02-grid">
        <TicketPanel id={1001} subject="Login Issue" status="Open">
          <p>
            <strong>Requester:</strong> Lina
          </p>
          <p>المستخدم لا يستطيع الدخول إلى حسابه.</p>
        </TicketPanel>
        <TicketPanel id={1002} subject="Payment Failed" status="Pending">
          <p>
            <strong>Requester:</strong> Omar
          </p>
          <p>ظهرت رسالة خطأ أثناء الدفع.</p>
        </TicketPanel>
        <TicketPanel id={1003} status="Closed">
          <p>
            <strong>Requester:</strong> Sara
          </p>
          <p>تم حل المشكلة وإبلاغ المستخدم.</p>
        </TicketPanel>
      </div>
    </section>
  );
}
