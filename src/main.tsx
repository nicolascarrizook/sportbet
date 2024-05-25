<<<<<<< Updated upstream
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
=======
import React from "react";
import ReactDOM from "react-dom/client";
import { HomeBall } from "./pages/home/HomeBall";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
>>>>>>> Stashed changes
  <React.StrictMode>
    <HomeBall />
  </React.StrictMode>
);
