import React from 'react';

const Testimonials = () => {


    return (
        <section className="testimonial section">
            <h2 className="section__title">Testimonial</h2>
            <span className="section__subtitle">My client saying</span>

            <div className="testimonial__container container swiper mySwiper">
                <div className="swiper-wrapper">
                    <div className="testimonial__content swiper-slide">
                            <div className="testimonial__data">
                                <div className="testimonial__header">
                                    <img src="/images/testimonial1.jpeg" alt="Daniel Myers" className="testimonial__img"/>

                                </div>

                                <div>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                </div>
                            </div>

                    </div>

                    <div className="testimonial__content swiper-slide">
                            <div className="testimonial__data">
                                <div className="testimonial__header">
                                    <img src="/images/testimonial2.jpeg" alt="Lauren Bryant" className="testimonial__img"/>

                                </div>

                                <div>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                </div>
                            </div>

                    </div>

                    <div className="testimonial__content swiper-slide">
                            <div className="testimonial__data">
                                <div className="testimonial__header">
                                    <img src="/images/testimonial3.jpeg" alt="Jordan Weston" className="testimonial__img"/>

                                </div>

                                <div>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                </div>
                            </div>

                    </div>
                </div>
                
                <div className="swiper-pagination swiper-pagination-testimonial"></div>
            </div>
        </section>        
    )
}

export default Testimonials;