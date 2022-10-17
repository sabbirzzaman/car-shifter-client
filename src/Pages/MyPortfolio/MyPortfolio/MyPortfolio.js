import React from 'react';
import './MyPortfolio.css';
import img from '../../../images/portfolio.jpg';
import project1 from '../../../images/project-1.jpg';
import project2 from '../../../images/project-2.jpg';
import project3 from '../../../images/project-3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Projects from '../Projects/Projects';
import Education from '../Education/Education';

const MyPortfolio = () => {
    const skills = [
        'HTML5',
        'CSS3',
        'Javascript',
        'React',
        'Bootstrap',
        'Tailwind CSS',
        'Material Ui',
        'Node Js',
        'Express Js',
        'MongoDb',
    ];

    const projects = [
        {
            id: 1,
            name: 'Go AutoCar',
            image: project1,
            details:
                'Go AutoCar is a car dealer (warehouse/inventory) management website. Users can manage their warehouse or inventory through this website. Users can create their accounts and add cars to the inventory. Also, users can decrease the inventory after delivery. And they can add cars in stock as well. The website also contains some details about the dealership company. like About the company, The purpose of the company, etc.',
            live: 'https://go-autocar.web.app/',
        },
        {
            id: 2,
            name: 'Tim Walter',
            image: project3,
            reverse: true,
            details:
                'A website form professional lawyer who can provide his/her services through this website. Author can sell his/her services from this website. Also he/she can show his/her experiences and awards showcase in this website. Users can crate there account and purchase the services from this website. The author can also share blogs through this website.',
            live: 'https://tim-walter.web.app/',
        },
        {
            id: 3,
            name: 'GPT-3',
            image: project2,
            details:
                'GTP-3 is a modern landing page that makes modern applications like chatbots. GTP-3 can show blogs, about, services, features, and other information as well. GTP-3 is just an on-page website created with HTML5 and CSS3 and uses Parsel.js bundler.',
            live: 'https://gpt-3-landing-page.netlify.app/',
        },
    ];

    const education = [
        {
            id: 1,
            industry: 'Satkhira Day Night Collage',
            department: "B.B.A (Hons) in Marketing",
            status: 'Present',
        },
        {
            id: 2,
            industry: 'S.A.D.C',
            department: "Commerce Department",
            status: 'June 2017 - September 2019',
        }
    ]

    return (
        <section className="portfolio-section">
            <div className="container">
                <div className="portfolio-info">
                    <div>
                        <h2>Sabbir Zzaman</h2>
                        <h3>Frontend Developer</h3>
                        <p className="portfolio-mail">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                            ></FontAwesomeIcon>{' '}
                            sabbirzzaman7@gmail.com
                        </p>
                    </div>
                    <div>
                        <img src={img} alt="portfolio" />
                    </div>
                </div>

                <div className="portfolio-skills">
                    <h3>I build with</h3>
                    <div className="my-skill">
                        {skills.map((skill, index) => (
                            <div key={index}>
                                <h4>{skill}</h4>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="portfolio-projects">
                    <h3>My Projects</h3>

                    <div className="projects">
                        {
                            projects.map(project => <Projects key={project.id} project={project}></Projects>)
                        }
                    </div>
                </div>

                <div className="portfolio-education">
                    <h3>My Education</h3>

                    <div className="education">
                        {
                            education.map(edu => <Education key={edu.id} edu={edu}></Education>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyPortfolio;
