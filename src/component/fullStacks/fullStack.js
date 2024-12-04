import React from 'react';
import './fullStack.css';

const programs = [
  {
    id: 1,
    name: 'Frontend Development',
    description: 'HTML, CSS, JavaScript, React, and more.',
    image: "https://i.pinimg.com/originals/49/61/0e/49610ec9860a014f1012fa44abeca71a.jpg"
  },
  {
    id: 2,
    name: 'Backend Development',
    description: 'Node.js, Express.js, and database management.',
    image: "https://i.ytimg.com/vi/oR6oi0EB6-I/maxresdefault.jpg"
  },
  {
    id: 3, name: 'Database Management',
    description: 'SQL, MongoDB, and data modeling.',
    image: "https://miro.medium.com/max/2580/1*iDcgUCw_MtRSuKLBGEaJ4Q.jpeg"
  },
  {
    id: 4,
    name: 'Version Control Systems',
    description: 'Git, GitHub, and collaboration tools.',
    image: ""
  },
  {
    id: 5,
    name: 'DevOps Basics',
    description: 'CI/CD, Docker, and deployment strategies.',
    image: ""
  },
  {
    id: 6,
    name: 'Testing & Debugging',
    description: 'Unit testing, integration testing, and debugging tools.',
    image: ""
  },
];

const FullstackPrograms = () => {
  return (
    <div className="fullstack-programs-container">
      <h1 className="h1">Full-Stack Development Program</h1>
      <ul className="fullstack-programs-list">
        {programs.map(program => (
          <li key={program.id} className="fullstack-program-item">
            <h3 className="fullstack-program-name">{program.name}</h3>
            <p className="fullstack-program-description">{program.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FullstackPrograms;
