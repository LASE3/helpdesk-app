import InvoicePage from "./components/InvoicePage.jsx";
import "../../style/question05.css";
export default function Question05() {
  const items = [
    { id: 1, description: "Frontend Support", unitPrice: 40, quantity: 3 },
    { id: 2, description: "Code Review", unitPrice: 25, quantity: 2 },
    { id: 3, description: "Technical Report", unitPrice: 10, quantity: 3 },
  ];
  const discountPercent = 10;
  const taxPercent = 5;
  return (
    <div className="exercise q05">
      <div className="exercise-heading">
        <span className="eyebrow">QUESTION 05</span>
        <h1>Service Invoice</h1>
        <p>All amounts are calculated from the invoice data.</p>
      </div>
      <InvoicePage
        items={items}
        discountPercent={discountPercent}
        taxPercent={taxPercent}
      />
    </div>
  );
}
