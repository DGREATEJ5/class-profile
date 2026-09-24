```jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import peterImg from './assets/peter.jpg';
import './Peter.css';

function PeterPage() {
  const navigate = useNavigate();

  return (
    <div className="profile-page">

      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back to Class
      </button>

      <div className="profile-hero">
        <img src={peterImg} alt="Peter" className="profile-img" />
        <h1 className="profile-name">Peter</h1>
        <p className="profile-role">Student</p>
        <div className="student-tag">Grade 10 — STEM</div>
      </div>

      <div className="profile-body">

        <div className="profile-section">
          <h3>👤 About Me</h3>
          <p>
            Hi! I'm Peter. I am a student who enjoys mathematics, gaming,
            and solving challenging problems.
          </p>
        </div>

        <div className="profile-section">
          <h3>🎯 My Goals</h3>
          <p>
            I want to pursue a career related to CPA Law and continue
            developing my skills in mathematics and problem-solving.
          </p>
        </div>

        <div className="profile-section">
          <h3>💡 What I Learned Here</h3>
          <p>
            During my immersion, I learned how to work with others,
            contribute to a real project, and apply what I have learned
            in school to practical situations.
          </p>
        </div>

        <div className="profile-section">
          <h3>⚡ Fun Facts</h3>
          <ul>
            <li>Favorite food: French Fries 🍟</li>
            <li>Hobbies: Mathematics and playing Plants vs. Zombies 🌱🧟</li>
            <li>I enjoy solving difficult math problems. 🧮</li>
            <li>I'm very funny to be around with. 😎</li>
          
          </ul>
        </div>

      </div>
    </div>
  );
}

export default PeterPage;
```
