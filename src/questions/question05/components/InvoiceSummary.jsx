import MoneyRow from "./MoneyRow.jsx";
export default function InvoiceSummary({
  subtotal,
  discountPercent = 0,
  taxPercent = 0,
}) {
  const discount = (subtotal * discountPercent) / 100;
  const afterDiscount = subtotal - discount;
  const tax = (afterDiscount * taxPercent) / 100;
  const grandTotal = afterDiscount + tax;
  return (
    <div className="q05-summary">
      <MoneyRow label="Subtotal" amount={subtotal} />
      <MoneyRow label={`Discount (${discountPercent}%)`} amount={discount} />
      <MoneyRow label="After Discount" amount={afterDiscount} />
      <MoneyRow label={`Tax (${taxPercent}%)`} amount={tax} />
      <div className="q05-grand">
        <MoneyRow label="Grand Total" amount={grandTotal} />
      </div>
    </div>
  );
}
