import React from 'react';

const Contact = () => {
    return (
        <section className="contact section main" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i className="uil uil-phone contact__icon"></i>

                        <div>
                            <h3 className="contact__title">Call Me</h3>
                            <span className="contact__subtitle">801-505-8647</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-envelope contact__icon"></i>

                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">chelsea.reese@icloud.com</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-map-marker contact__icon"></i>

                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">Salt Lake City</span>
                        </div>
                    </div>
                </div>

                <form action="" className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content"> 
                            <label for="" className="contact__label">Name</label>
                            <input type="text" className="contact__input"/> 
                        </div>
                        <div className="contact__content"> 
                            <label for="" className="contact__label">Email</label>
                            <input type="email" className="contact__input"/> 
                        </div>
                    </div>
                    <div className="contact__content"> 
                        <label for="" className="contact__label">Project</label>
                        <input type="project" className="contact__input"/> 
                    </div>
                    <div className="contact__content"> 
                        <label for="" className="contact__label">Message</label>
                        <textarea name="" id="" rows="0" className="contact__input"></textarea>
                    </div>

                    <div>
                        <a href="/" className="button button--flex">
                            Send Message
                            <i className="uil uil-message button__icon"></i>
                        </a>
                    </div>
                </form>
            </div>
        </section>        
    )
}

export default Contact;