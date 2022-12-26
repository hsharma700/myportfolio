import React from "react";
import ReactDom from 'react-dom/client';
import "./index.css";
import App from "./App";

const root = ReactDom.createRoot(document.querySelector('#root'))

root.render(
<App/>
)