import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import axios from "axios";
import { RequestProvider } from "react-request-hook";
import background from "./assets/bg1.jpg";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/",
  // baseURL: "/",
});

const backgroundImage = {
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover'
};

ReactDOM.render(
  <React.StrictMode>
    <RequestProvider value={axiosInstance}>
      <div style={ backgroundImage }>
        <App />
      </div>
    </RequestProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
