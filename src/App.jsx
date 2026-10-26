import { useState } from "react";
import Question03 from "./questions/question03/Question03.jsx";
import Question04 from "./questions/question04/Question04.jsx";
import Question05 from "./questions/question05/Question05.jsx";
import Question06 from "./questions/question06/Question06.jsx";
const exercises = [
  {
    id: "03",
    title: "Statistics Dashboard",
    description: "Fix props, imports, calculations and reusable components.",
    component: Question03,
  },
  {
    id: "04",
    title: "Flexible Cards",
    description: "Build cards using composition and children.",
    component: Question04,
  },
  {
    id: "05",
    title: "Service Invoice",
    description: "Calculate totals, discounts and tax from data.",
    component: Question05,
  },
  {
    id: "06",
    title: "Support Center",
    description: "Keep tickets, statistics and workloads consistent.",
    component: Question06,
  },
];
export default function App() {
  const [selected, setSelected] = useState(null);
  const exercise = exercises.find((item) => item.id === selected);
  const Current = exercise?.component;
  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand">
            Dashboard For 4 React Questions
        </button>
        <span>Sessions 01 &amp; 02</span>
      </header>
      <main className="main-container">
        {Current ? (
          <>
            <div className="page-toolbar">
              <button className="back-button" onClick={() => setSelected(null)}>
                ← All exercises
              </button>
              <span className="eyebrow">QUESTION {selected} / {selected}</span>
            </div>
            <Current />
          </>
        ) : (
          <>
            <section className="hero">
              <span className="eyebrow">REACT / PRACTICE</span>
              <h1>Choose an exercise</h1>
              <p>
                Four independent React assignments in one project. Select a
                question to explore its output.
              </p>
            </section>
            <div className="home-grid">
              {exercises.map((item) => (
                <article className="home-card" key={item.id}>
                  <span className="question-pill">QUESTION {item.id}</span>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <button
                    className="primary-button"
                    onClick={() => setSelected(item.id)}
                  >
                    Open exercise →
                  </button>
                </article>
              ))}
            </div>
          </>
        )}
      </main>
      <footer className="site-footer">
        React Practice · Questions 03-04-05-06
      </footer>
    </div>
  );
}