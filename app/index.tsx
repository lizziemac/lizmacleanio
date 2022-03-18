import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.css';

export const App = () => (
  <div className="App">
    <header className="App-header">
    Hi from React! Welcome!
    <p>Edit code <code>a = b * c</code></p>
    </header>
  </div>
);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
