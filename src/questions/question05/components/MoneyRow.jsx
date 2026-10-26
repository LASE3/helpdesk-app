export default function MoneyRow({ label, amount, currency = "JOD" }) {
  return (
    <div className="q05-money-row">
      <span>{label}</span>
      <strong>
        {Number(amount).toFixed(2)} <small>{currency}</small>
      </strong>
    </div>
  );
}
