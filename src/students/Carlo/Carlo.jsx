import React from 'react';
import { useNavigate } from 'react-router-dom';
import carloImg from './assets/carlo.jpg';
import './Carlo.css';

function Carlo() {
  const navigate = useNavigate();

  return (
    <div className="student-card" onClick={() => navigate('/carlo')}>
      <img src={carloImg} alt="Carlo" className="student-img" />
      <h2 className="student-name">Carlo</h2>
      <p className="student-role">Web Developer</p>
      <p className="student-bio">Hi! I'm Carlo. I love gaming and tech.</p>
      <div className="student-tag">Grade 12 — STEM</div>
      <span className="view-profile">View Profile →</span>
    </div>
  );
}

export default Carlo;