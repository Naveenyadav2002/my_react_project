import React from 'react';
import './frontEnd.css';

const frontendLanguages = [
    {
        name: 'HTML',
        description: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It structures content on the web.',
        use: 'Defines the structure of a webpage with elements like headings, paragraphs, and links.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
    },
    {
        name: 'CSS',
        description: 'CSS (Cascading Style Sheets) is used for designing and laying out web pages. It controls the presentation of HTML elements.',
        use: 'Styling, layout, colors, fonts, and responsive design.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
    },
    {
        name: 'JavaScript',
        description: 'JavaScript is a programming language that adds interactivity and dynamic behavior to web pages.',
        use: 'Creating interactive web applications, animations, and event handling.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
    },
    {
        name: 'React',
        description: 'React is a JavaScript library for building user interfaces, developed by Facebook. It allows for component-based architecture.',
        use: 'Building reusable UI components and handling state in web apps.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
        name: 'TypeScript',
        description: 'TypeScript is a superset of JavaScript that adds static typing and enhanced tooling.',
        use: 'Writing scalable and error-free JavaScript applications.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
    }
];

function FrontendLanguages() {
    return (
        <div className="frontend-container">
            <h1 className='h1 '>Frontend Programming Languages</h1>
            <p className='p'>Explore the most popular programming languages used in frontend development:</p>
            <div className="languages-box">
                {frontendLanguages.map((language, index) => (
                    <div key={index} className="language-card">
                        <img src={language.logo} alt={`${language.name} logo`} className="language-logo" />
                        <h2>{language.name}</h2>
                        <p><strong>Description:</strong> {language.description}</p>
                        <p><strong>Use Case:</strong> {language.use}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FrontendLanguages;
