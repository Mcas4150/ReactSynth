import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import store from "./store/store";
import App from "./app";
import BrowserDetection from "react-browser-detection";
import registerServiceWorker from "./registerServiceWorker";

// const app = (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// const browserHandler = {
//   chrome: () => app,
//   safari: () => app,
//   //firefox: () => app,
//   //googlebot: () => <div>Hi GoogleBot!</div>,
//   default: browser => (
//     <h1>
//       Unfortunately {browser} is not fully supported. Please try Chrome for the
//       best experience with this app.
//     </h1>
//   )
// };

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
