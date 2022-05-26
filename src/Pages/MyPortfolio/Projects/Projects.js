import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'

const Projects = ({project}) => {
    const {name, image, details, live, reverse} = project;

    return (
        <div className="project-item">
            <img style={{order: reverse && 2}} src={image} alt={name} />

            <div style={{order: reverse && 1}} className="project-details">
                <h3>{name}</h3>
                <p>
                   {details}
                </p>
                <Link to={live} className="btn-link">Link Link</Link>
            </div>
        </div>
    );
};

export default Projects;
