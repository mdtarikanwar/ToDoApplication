import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import reportWebVitals from "./reportWebVitals";

const navbar = ReactDOM.createRoot(document.getElementById("navbar"));
const leftSectionEle = ReactDOM.createRoot(document.getElementById("leftSectionId"));
const rightSectionEle = ReactDOM.createRoot(
  document.getElementById("rightSectionId")
);

navbar.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

leftSectionEle.render(
  <React.StrictMode>
    <LeftSection />
  </React.StrictMode>
);

rightSectionEle.render(
  <React.StrictMode>
    <RightSection/>
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
