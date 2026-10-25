import "./style/App.css";
import Question03 from "./questions/question03/Question03.jsx";
import Question04 from "./questions/question04/Question04.jsx";
import Question05 from "./questions/question05/Question05.jsx";
import Question06 from "./questions/question06/Question06.jsx";

function App() {
  return (
    <>
      <div className="hero-container">
        <header className="app-header">
          <h1>Helpdesk Project Dashboard</h1>
        </header>
        <main className="app-main">
          <div className="card">
            <Question03 />
          </div>
          <div className="card">
            <Question04 />
          </div>
          <div className="card">
            <Question05 />
          </div>
          <div className="card">
            <Question06 />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
