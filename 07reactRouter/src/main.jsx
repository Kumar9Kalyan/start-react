import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Company from "./components/Company/Company";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github, { githubInfo } from "./components/Github/Github";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about/" element={<About />}>
        <Route path="company" element={<Company />} />
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="user" element={<User />}>
        <Route path=":userId" element={<User />} />
      </Route>
      <Route loader={githubInfo} path="github" element={<Github />} />
      <Route path="*" element={<h1>Opps wrong path</h1>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
