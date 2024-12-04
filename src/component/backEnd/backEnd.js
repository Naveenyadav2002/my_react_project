

import React from 'react';
import './backEnd.css';

const backendCourses = [
    {
        id: 1,
        name: 'Node.js Fundamentals',
        description: 'Learn the basics of building servers with Node.js.',
        logo: "https://e7.pngegg.com/pngimages/540/810/png-clipart-node-js-javascript-npm-computer-icons-web-application-others-miscellaneous-text.png",
        useCase: 'Used for building scalable server-side applications, handling asynchronous events, and creating APIs.'
    },
    {
        id: 2,
        name: 'Express.js',
        description: 'Dive into middleware and routing with Express.js.',
        logo: "https://blog.logrocket.com/wp-content/uploads/2021/03/express-js-logo.png?w=730",
        useCase: 'Ideal for building RESTful APIs, managing middleware, routing HTTP requests, and handling backend logic in web applications.'
    },
    {
        id: 3,
        name: 'MongoDB Basics',
        description: 'Understand NoSQL databases with MongoDB.',
        logo: "https://tse3.mm.bing.net/th?id=OIP.gxnlmlCna-dYR4ybMuao-AHaD4&pid=Api&P=0&h=180",
        useCase: 'Used for managing unstructured data, scalability in large applications, and providing flexible schema for data storage in modern apps.'
    },
    {
        id: 5,
        name: 'SQL Basics',
        description: 'Learn how to use SQL for efficient data queries.',
        logo: "https://logowik.com/content/uploads/images/azure-sql2162.jpg",
        useCase: 'Used for querying structured data, creating databases, and managing relationships between data within relational databases.'
    },
];


const BackendCourses = () => {
    return (
        <div className="courses-container">
            <div className='courses-title'>
            <h1 className='h1'>Backend Programming Languages</h1>
            <p className='p'>Explore the most popular programming languages used in backend development:</p>
            </div>
            <ul className="courses-list">
                {backendCourses.map(course => (
                    <li key={course.id} className="course-item">
                        <img src={course.logo}  className='course-logo'/>
                        <h3 className="course-name">{course.name}</h3>
                        <p className="course-description"><strong>Description : </strong>{course.description}</p>
                        <p><strong>Use Case : </strong>{course.useCase}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BackendCourses;

