import { useState } from "react";
import "./App.css";
import Profiles from "./components/Profiles";
import Login from "./components/Login.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profiles />
    </UserContextProvider>
  );
}

export default App;
