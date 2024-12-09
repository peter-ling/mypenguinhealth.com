import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <section id="home" className="card">
          <h1 className="title">Penguin Health</h1>
          <p className="tagline">Supporting Every Step of Recovery</p>
          <div className="coming-soon">
            <h2>Coming Soon!</h2>
            <p>We're working hard to launch something amazing. Stay tuned!</p>
          </div>
        </section>
 
        <section id="about" className="card">
          <h2>About Our Platform</h2>
          <div className="about-content">
            <p>
              Penguin Health is making the recovery process more engaging for patients in community health organizations.
              With our platform, patients can track their progress take ownership of their recovery, while care teams can have more ways to interact with their patients between meetings. This two-sided solution aims to help all parties involved in the recovery process and our MVP is being built on direct feedback from both patients and care teams. 
            </p>
            <div className="key-features">
              <h3>Key Features:</h3>
              <ul>
                <li>Personalized recovery tracking and resources</li>
                <li>Real-time progress monitoring</li>
                <li>Streamlined communication with healthcare teams</li>
                <li>Case management software for social workers and doctors</li>
              </ul>
            </div>
            <div className="demo-section">
              <h3>Interested in a Demo?</h3>
              <p>
                We're currently partnering with select healthcare organizations to pilot our platform. 
                If you're interested in learning more about how Penguin Health can benefit your organization or want to learn more about us, 
                reach out to us for a demo!
              </p>
            </div>
          </div>
        </section>

        <section id="team" className="card">
          <h2>Meet Our Team</h2>
          <div className="team-cards">
            <div className="team-card">
              <h3>Zach Dyce</h3>
              <p>Chief Executive Officer</p>
              <a href="https://www.linkedin.com/in/zachdyce/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="team-card">
              <h3>Peter Ling</h3>
              <p>Chief Technology Officer</p>
              <a href="https://www.linkedin.com/in/ling-peter/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="team-card">
              <h3>Layla Aboukader</h3>
              <p>Medical Advisor</p>
              <a href="https://www.linkedin.com/in/laylaaboukhater/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>

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
