import React from 'react';

const Scroll = () => {
    const sections = document.querySelectorAll ('section[id]')

    function scrollActive () {
    const scrollY = window.pageYoffset 

    sections.forEach (current => {
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute ('id')

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector ('.nav__menu a[href*=' + sectionId + ']').classList.add ('active-link')
            } else {
                document.querySelector ('.nav__menu a[href*=' + sectionId + ']').classList.remove ('active-link')
            }
        })
    }
    window.addEventListener ('scroll', scrollActive)

    return (
        <a href="#" className="scrollup" id="scroll-up">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}

export default Scroll;