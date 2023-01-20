import React from "react";

const Qualifications = () => {

    // Qualifications tab
    const tabs = document.querySelectorAll ('[data-target]'),
    tabsContents = document.querySelectorAll ('[data-content]')

    tabs.forEach (tab => {
        tab.addEventListener ('click', () => {
    const target = document.querySelector (tab.dataset.target)

    tabsContents.forEach (tabsContent => {
        tabsContent.classList.remove ('qualification__active')
    })
    target.classList.add ('qualification__active')

    tabs.forEach (tab => {
        tab.classList.remove ('qualification__active')
    })
    tab.classList.add ('qualification__active')
        })
    })

    return (
        <section className="qualification section main">
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button button--flex" data-target="#education">
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div className="qualification__button button--flex" data-target="#work">
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Work
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content qualification__active" data-content id="education">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Temescal Canyon High School</h3>
                            <span className="qualification__subtitle">Lake Elsinore, California</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2015 - 2019
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Salt Lake Community College</h3>
                            <span className="qualification__subtitle">Salt Lake City, Utah</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2020 - 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">UofU Coding Bootcamp</h3>
                            <span className="qualification__subtitle">Salt Lake City, Utah</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                July 2022 - January 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                        </div>  

                        <div>
                            <h3 className="qualification__title"></h3>
                            <span className="qualification__subtitle"></span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                
                            </div>
                        </div>
                    </div>                                                                       
                </div>
                <div className="qualification__content" data-content id="work">
                    <div className="qualification__data">

                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>


                    
                

                    <div className="qualification__data">

                    

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>                                                                       
                </div>
            </div>
        </div>
    </section>       
    )
}

export default Qualifications;