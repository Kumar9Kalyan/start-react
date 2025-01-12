import "./App.css";
import { useState, useEffect, useReducer, useRef } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  return [
    {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    () => setValue(initialValue),
  ];
}
function App() {
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");
  const [textProps, setText] = useInput("");
  const [colourProps, setColour] = useInput("#000000");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/moonhighway")
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  }
  // const title = useRef();
  // const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    // const textColor = title.current.value;
    // const inputColor = color.current.value;
    // alert(`${textColor} ${inputColor}`);
    // title.current.value = "";
    // color.current.value = "";
    alert(`${textProps.value}, ${colourProps.value}`);
    setText();
    setColour();
  };

  return (
    <>
      <h1>Data</h1>
    </>
  );
}

export default App;
