import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import student cards (homepage)
import Carlo from './students/Carlo/Carlo';

// Import student full pages
import CarloPage from './students/Carlo/CarloPage';

// Homepage layout
function Home() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="badge">Grade 12 · Work Immersion 2026</div>
          <h1>Class Immersion <span>Profile</span></h1>
          <p>Get to know the students behind the work — their stories, goals, and journey during immersion.</p>
          <div className="header-stats">
            <div className="stat">
              <span className="stat-number">8</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">2026</span>
              <span className="stat-label">School Year</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">💼</span>
              <span className="stat-label">Work Immersion</span>
            </div>
          </div>
        </div>
        <div className="header-glow" />
      </header>

      <main className="main">
        <div className="students-grid">
          <Carlo />
          {/* other students added here as they join */}
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carlo" element={<CarloPage />} />
      {/* other student routes added here */}
    </Routes>
  );
}

export default App;