import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const Increment = () => {
    setCounter((prevCounter) => prevCounter + 4);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const Decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Create React with Kalyan {counter}</h1>
      <h2>Counter value:{counter} </h2>
      <button onClick={Increment}>Add value</button>{" "}
      <button onClick={Decrement}>Remove value</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
