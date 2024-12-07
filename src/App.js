import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Penguin Health</h1>
        <p className="tagline">Building the future of public health solutions.</p>
        <div className="coming-soon">
          <h2>Coming Soon!</h2>
          <p>We're working hard to launch something amazing. Stay tuned!</p>
        </div>
        <footer>
          <p>
            Contact us at{" "}
            <a href="mailto:peter@mypenguinhealth.com">peter@mypenguinhealth.com</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
