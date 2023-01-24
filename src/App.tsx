import Countdown from "./components/Countdown";
import "./index.css";

function App() {
  const currentDate = new Date();
  return (
    <>
      <div className="wrapper">
        <div style={{ width: "70%" }}>
          <div className="title">
            <h2>🚀 Starts in:</h2>
          </div>
          <Countdown
            date={new Date(`${currentDate.getFullYear() + 1}-03-01T00:00:00`)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
