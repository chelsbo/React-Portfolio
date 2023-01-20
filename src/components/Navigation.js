import React from "react";

const Navigation = () => {
    
    // Hidden menu
    const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    //Show menu, validation
    if (navToggle) {
    navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
    })
    }

    // Hidden menu, validation
    if (navClose) {
    navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
    })
    }

    // Remove menu mobile
    const navLink = document.querySelectorAll('nav__link')

    function linkAction () {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
    }

    navLink.forEach(n => n.addEventListener('click', linkAction))

    return (
        <header>
            <nav className="nav container">
                <a href="https://github.com/chelsbo" target="_blank" rel="noreferrer" className="nav__logo">
                    <i className="uil uil-github-alt"></i>
                </a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Services
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a> 
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" id="nav-close"></i>
                </div>

                <div className="nav__btns">
                    <i class="uil uil-moon change-theme" id="theme-button"></i>

                    <div className="nav__toggle" id="nav-toggle">
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;