import MoneyRow from "./MoneyRow.jsx";
export default function InvoiceLine({
  description,
  quantity,
  unitPrice,
  total,
}) {
  return (
    <article className="q05-line">
      <div>
        <h3>{description}</h3>
        <p>
          Quantity: {quantity} × {Number(unitPrice).toFixed(2)} JOD
        </p>
      </div>
      <MoneyRow label="Line Total" amount={total} />
    </article>
  );
}
