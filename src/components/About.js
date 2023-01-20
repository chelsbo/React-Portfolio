import React from "react";

const About = () => {
    return (
        <section className="about section main" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid">
                <img src="/images/about.jpeg" alt="portfolio creator" className="about__img"/> 

                <div className="about__data">
                    <p className="about__description">Hello! My name is Chelsea Reese. <br /> <br />
                        
                        </p>
                </div>
                <div className="about__info">
                    <div>
                        <span className="about__info-title">6+</span>
                        <span className="about__info-name">Months <br /> experience</span>
                    </div>

                    <div>
                        <span className="about__info-title">20+</span>
                        <span className="about__info-name">Completed <br /> projects</span>
                    </div>

                    <div>
                        <span className="about__info-title">0+</span>
                        <span className="about__info-name">Companies <br /> worked</span>
                    </div>
                </div>

                <div className="about__buttons">
                    <a download="" href="" className="button button--flex">
                      Download Resume<i className="uil uil-download-alt button__icon"></i>
                    </a>
                </div>
            </div>
        </section>        
    )
}

export default About;