import React from 'react';
import './App.css';  // Import the CSS file

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Home */}
      <section id="home" className="section home-section">
        <h1>Hello, I'm Karan 👋</h1>
        <p>Welcome to my portfolio website 🚀</p>
      </section>

      {/* About */}
      <section id="about" className="section about-section">
        <h2>About Me</h2>
        <div className="single-skill-box">
        <p>I'm a B.Tech student passionate about Android development web development, C++, and AI development.</p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <h2>My Skills</h2>
        <div className="single-skill-box">
         <p>C++, Python</p>
         <p>HTML, CSS, JavaScript</p>
         <p>React, Flask</p>
        </div>
      </section>


      {/* Projects */}
      <section id="projects" className="section projects-section">
        <h2>Projects</h2>
        <div className="single-skill-box">
          <p>To-Do App (React)</p>
           <p>
             <a href="https://github.com/Karan-code404/Emotion-x-app/blob/main/face_emotion_app/emotion_x.py" target="_blank" rel="noopener noreferrer">
             <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width="20" style={{ verticalAlign: 'middle' }} /> Emotion Detector
             </a>
           </p>
           <p>
              <a href="https://student-management-2yyh.onrender.com/" target="_blank" rel="noopener noreferrer">
              Normal database management system using Flask and SQLite
              </a>
           </p>

          <p>Portfolio Website (this site!)</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <h2>Contact Me</h2>
        <p>Email: karanthegreat6162@gmail.com</p>
        <p>GitHub:
        <a href="https://github.com/Karan-code404" target="_blank" rel="noopener noreferrer">
        click here to visit my GitHub profile
      </a>
        </p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/karan-shakya-02a20726b/" target="_blank" rel="noopener noreferrer">
        click here to visit my LinkedIn profile  
        </a>
        </p>
        
      </section>
    </div>
  );
}

export default App;
