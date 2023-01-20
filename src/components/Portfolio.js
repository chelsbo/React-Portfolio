import React from 'react';

const Portfolio = () => {

    return (
        <section class="portfolio section main" id="portfolio">
        <h2 class="section__title">Portfolio</h2>
        <span class="section__subtitle">Most recent solo and group work</span>

        <div>
            <div class="portfolio__container container swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="portfolio__content grid swiper-slide">
                        <img src="/images/portfolio1.jpeg" alt="" class="portfolio__img"/>
                    
                        <div class="portfolio__data">
                            <h3 class="portfolio__title">Password Generator</h3>
                            <p class="portfolio__description">This application allows the user to generate a random password that meets a certain criteria for greater security.</p>
                    
                            <a href="https://chelsbo.github.io/Password-Generator/" target="_blank" rel="noreferrer" class="button button--flex button--small portfolio__button">
                                Demo 
                                <i class="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>    
                    </div>
                    <div class="portfolio__content grid swiper-slide">
                        <img src="/images/portfolio2.jpeg" alt="" class="portfolio__img"/>
                    
                        <div class="portfolio__data">
                            <h3 class="portfolio__title">Movie Database</h3>
                            <p class="portfolio__description"></p>
                    
                            <a href="https://mich-hales.github.io/QuickFlix/" target="_blank" rel="noreferrer" class="button button--flex button--small portfolio__button">
                                Demo 
                                <i class="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>    
                    </div>
                    <div class="portfolio__content grid swiper-slide">
                        <img src="/images/portfolio3.jpeg" alt="" class="portfolio__img"/>
                    
                        <div class="portfolio__data">
                            <h3 class="portfolio__title">Note Taker</h3>
                            <p class="portfolio__description"></p>
                    
                            <a href="https://github.com/chelsbo/Note-Taker" target="_blank" rel="noreferrer" class="button button--flex button--small portfolio__button">
                                Demo 
                                <i class="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>    
                    </div>
                </div>
        
                <div class="swiper-button-next">
                    <i class="uil uil-angle-right-b swiper-portfolio-icon"></i>
                </div>
                <div class="swiper-button-prev">
                    <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>    
    </section>
    )
}

export default Portfolio;