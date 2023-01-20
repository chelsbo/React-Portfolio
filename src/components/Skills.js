import React from 'react';

const Skills = () => {
    
    // Accordion skills
    const skillsContent = document.getElementsByClassName ('skills__content'),
        skillsHeader = document.querySelectorAll ('.skills__header')

    function toggleSkills () {
        let itemClass = this.parentNode.className

        let i = [];

        for (i = 0; i < skillsContent.length; i++) {
            skillsContent[i].className = 'skills__content skills__close'
        }
        if (itemClass === 'skills__content skills__close') {
            this.parentNode.className = 'skills__content skills__open'
        }
    }

    skillsHeader.forEach ((el) => {
        el.addEventListener ('click', toggleSkills)
    })    

    return (
        <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <div>

                {/* <!-- Skill 1 --> */}
                <div className="skills__content skills__open">
                    <div className="skills__header">
                        <i className="uil uil-brackets-curly skills__icon"></i>
                        
                        <div>
                            <h1 className="skills__titles">Frontend developer</h1>
                            <span className="skills__subtitle">More than 6 months</span>
                        </div>

                        <i className="uil uil-angle-down skills__arrow" ></i>
                    </div>

                    <div className="skills__list grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">HTML</h3>
                                <span className="skills__number">60%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__html"></span>
                            </div>
                        </div> 

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">CSS</h3>
                                <span className="skills__number">70%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__css"></span>
                            </div>
                        </div> 

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">JavaScript</h3>
                                <span className="skills__number">20%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__js"></span>
                            </div>
                        </div> 

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">React</h3>
                                <span className="skills__number">0%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__react"></span>
                            </div>
                        </div> 
                    </div>
                </div>

                <div className="skills__content skills__close">
                    <div className="skills__header">
                        <i className="uil uil-server-network skills__icon"></i>
                        
                        <div>
                            <h1 className="skills__titles">Backend developer</h1>
                            <span className="skills__subtitle">More than 6 months</span>
                        </div>

                        <i className="uil uil-angle-down skills__arrow" ></i>
                    </div>

                    <div className="skills__list grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Express JS</h3>
                                <span className="skills__number">10%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__php"></span>
                            </div>
                        </div> 

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Node JS</h3>
                                <span className="skills__number">20%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__node"></span>
                            </div>
                        </div> 

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Mysql</h3>
                                <span className="skills__number">20%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__mysql"></span>
                            </div>
                        </div> 

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Python</h3>
                                <span className="skills__number">0%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__python"></span>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>

            <div>
                <div className="skills__content skills__close">
                    <div className="skills__header">
                        <i className="uil uil-palette skills__icon"></i>
                        
                        <div>
                            <h1 className="skills__titles">Designer</h1>
                            <span className="skills__subtitle">Less than 1 month</span>
                        </div>

                        <i className="uil uil-angle-down skills__arrow" ></i>
                    </div>

                    <div className="skills__list grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Figma</h3>
                                <span className="skills__number">25%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__figma"></span>
                            </div>
                        </div> 

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Procreate</h3>
                                <span className="skills__number">20%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__sketch"></span>
                            </div>
                        </div> 

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photoshop</h3>
                                <span className="skills__number">0%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__photoshop"></span>
                            </div>
                        </div> 
                    </div>
                </div>                    
            </div>
        </div>
    </section>
    )
}

export default Skills;