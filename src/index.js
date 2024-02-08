import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  const total = bill + tip;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <>
      <div className="container">
        <Billinput bill={bill} onSetbill={setBill} />
        <Service
          name="How do you like the service"
          percentage={percentage1}
          onSetPercentage={setPercentage1}
        />
        <Service
          name="How do your friend like the service"
          percentage={percentage2}
          onSetPercentage={setPercentage2}
        />
        {bill > 0 && (
          <>
            <Output bill={bill} tip={tip} total={total} />
            <Reset onReset={handleReset} />
          </>
        )}
      </div>
    </>
  );
}

function Billinput({ bill, onSetbill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetbill(Number(e.target.value))}
      />
    </div>
  );
}

function Service({ name, percentage, onSetPercentage }) {
  return (
    <div>
      <label> {name}?</label>
      <select
        value={percentage}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It Was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Amazing(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip, total }) {
  return (
    <h3>
      You have to pay ${total} (${bill} + ${tip})
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
