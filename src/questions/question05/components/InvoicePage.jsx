import Panel from "./Panel.jsx";
import InvoiceLine from "./InvoiceLine.jsx";
import InvoiceSummary from "./InvoiceSummary.jsx";
export default function InvoicePage({ items, discountPercent, taxPercent }) {
  const lines = items.map((item) => ({
    ...item,
    total: item.unitPrice * item.quantity,
  }));
  const subtotal = lines.reduce((sum, item) => sum + item.total, 0);
  return (
    <div className="q05-invoice">
      <Panel title="Service Items">
        <div className="q05-lines">
          {lines.map((item) => (
            <InvoiceLine
              key={item.id}
              description={item.description}
              quantity={item.quantity}
              unitPrice={item.unitPrice}
              total={item.total}
            />
          ))}
        </div>
      </Panel>
      <Panel title="Invoice Summary">
        <InvoiceSummary
          subtotal={subtotal}
          discountPercent={discountPercent}
          taxPercent={taxPercent}
        />
      </Panel>
    </div>
  );
}
