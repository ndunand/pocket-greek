import React from "react";
import { createRoot } from "react-dom/client";
import GreekApp from "./components/GreekApp";
import "./app/globals.css";

createRoot(document.getElementById("root")!).render(<React.StrictMode><GreekApp /></React.StrictMode>);
