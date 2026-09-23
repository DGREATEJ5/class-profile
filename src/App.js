import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">

      <header className="header">
        <div className="header-content">
          <div className="badge">Grade 12 · Work Immersion 2025</div>
          <h1>Class Immersion <span>Profile</span></h1>
          <p>Meet the future developers, designers, and innovators of tomorrow.</p>
          <div className="header-stats">
            <div className="stat">
              <span className="stat-number">8</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">1</span>
              <span className="stat-label">Team</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Potential</span>
            </div>
          </div>
        </div>
        <div className="header-glow" />
      </header>

      <main className="main">
        <div className="section-label">👇 Students will appear here</div>
        <div className="students-grid">
          {/* Student cards will be imported here */}
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-title">Class Immersion Profile</p>
          <p className="footer-sub">Built with React + GitHub · Grade 12 Work Immersion 2025</p>
        </div>
      </footer>

    </div>
  );
}

export default App;