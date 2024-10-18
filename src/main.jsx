import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,

  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./Components/HomePage";
import AboutUs from "./Components/AboutUs";
import Projects from "./Components/Projects";
import GitHub from "./Components/GitHub";
import ContactUs from "./Components/ContactUs";
import UseGitHubData from "./customLoaders/UseGitHubData";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="projects" element={<Projects />} />
      <Route loader={UseGitHubData} path="GitHub" element={<GitHub />} />
      <Route path="AboutUS" element={<AboutUs />} />
      <Route path="ContactUS" element={<ContactUs />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(

    <RouterProvider router={Router} />
);
