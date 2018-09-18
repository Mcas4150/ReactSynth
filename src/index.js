import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Synthesizer from "./components/synthesizer";
import registerServiceWorker from "./registerServiceWorker";

const App = () => {
  return <Synthesizer />;
};

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
