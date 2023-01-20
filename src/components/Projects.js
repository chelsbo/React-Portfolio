import React from 'react';

const Projects = () => {
    return (
        <section className="project section">
            <div className="project__bg">
                <div className="project__container container grid">
                    <div className="project__data">
                        <h2 className="project__title">Want to collaborate?</h2>
                        <p className="project__description">Contact me and let's get started.</p>
                        <a href="#contact" className="button button--flex button--white">
                            Contact Me 
                            <i className="uil uil-message project__icon button__icon"></i>
                        </a>
                    </div> 

                    <img src="/images/project.png" alt="portfolio creator" className="project__img"/>
                </div>
            </div>
        </section>
    )
}

export default Projects;