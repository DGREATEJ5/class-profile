import React from 'react';
import { useNavigate } from 'react-router-dom';
import carloImg from './assets/carlo.jpg';
import './Carlo.css';

function CarloPage() {
  const navigate = useNavigate();

  return (
    <div className="profile-page">

      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back to Class
      </button>

      <div className="profile-hero">
        <img src={carloImg} alt="Carlo" className="profile-img" />
        <h1 className="profile-name">Carlo</h1>
        <p className="profile-role">Web Developer</p>
        <div className="student-tag">Grade 12 — STEM</div>
      </div>

      <div className="profile-body">

        <div className="profile-section">
          <h3>👤 About Me</h3>
          <p>Hi! I'm Carlo. I am a Grade 12 STEM student currently on work immersion. I love gaming, technology, and building things on the web.</p>
        </div>

        <div className="profile-section">
          <h3>🎯 My Goals</h3>
          <p>I want to become a full stack developer and build apps that help people in my community.</p>
        </div>

        <div className="profile-section">
          <h3>💡 What I Learned Here</h3>
          <p>During my immersion I learned how to use Git, GitHub, and React to build a real project with a team.</p>
        </div>

        <div className="profile-section">
          <h3>⚡ Fun Facts</h3>
          <ul>
            <li>Favorite food: Adobo 🍗</li>
            <li>Hobby: Gaming & coding</li>
            <li>Dream company: Google</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default CarloPage;