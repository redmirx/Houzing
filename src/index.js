import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
import RootContext from "./context";
import "./index.css";
import "antd/dist/antd.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootContext>
      <Root />
    </RootContext>
  </React.StrictMode>
);
