import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

function MyApp(props) {
  return (
    <div>
      <h1>Cutom react App of {props.name}</h1>
      <ul>
        {dishes.map((dish) => (
          <li>{dish}</li>
        ))}
      </ul>
      <h2>with Vite</h2>
    </div>
  );
}
const dishes = ["Tomato soup", "Pasta", "Steak", "Vegetables"];
const AnotherElement = (
  <a href="https://apple.com" target="_blank">
    Visit Apple website
  </a>
);

const areactElement = React.createElement(
  "a",
  { href: "https://godaddy.com", target: "_blank" },
  "Visit go daddy website"
);

createRoot(document.getElementById("root")).render(
  <MyApp name={new Date().getFullYear()} />
);
