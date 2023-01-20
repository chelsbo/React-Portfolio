import React from 'react';

const Services = () => {

    // Service model
    const modelViews = document.querySelectorAll ('.services__model'),
        modelBtns = document.querySelectorAll ('.services__button'),
        modelCloses = document.querySelectorAll ('.services__model-close')

    let model = function(modelClick) {
        modelViews[modelClick].classList.add ('active-model')
    }

    modelBtns.forEach ((modelBtn, i) => {
        modelBtn.addEventListener ('click', () => {
            model (i)
        })
    })

    modelCloses.forEach ((modelClose) => {
        modelClose.addEventListener ('click', () => {
            modelViews.forEach ((modelView) => {
                modelView.classList.remove ('active-model')
            })
        })
    })

    return (
        <section className="services section main" id="services">
            <h3 className="section__title">Services</h3>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                {/* <!-- Services 1 --> */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-archive-alt services__icon"></i>
                        <h3 className="services__title">Backend <br /> Developer</h3>
                    </div>

                    <span className="button button--flex button--small button--link services__button">
                        View More
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>

                    <div className="services__model">
                        <div className="services__model-content">
                            <h4 className="services__model-title">Backend <br /> Developer</h4>
                            <i className="uil uil-times services__model-close"></i>

                            <ul className="services__model-services grid">
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p>Knowledge of backend programming languages.</p>
                                </li>
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p>Knowledge of backend frameworks.</p>
                                </li>
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p>Knowledge of APIs.</p>
                                </li>
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p>Knowledge of different version control systems.</p>
                                </li>                                                                
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-external-link-alt services__icon"></i>
                        <h3 className="services__title">Frontend <br /> Developer</h3>
                    </div>

                    <span className="button button--flex button--small button--link services__button">
                        View More
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>

                    <div className="services__model">
                        <div className="services__model-content">
                            <h4 className="services__model-title">Frontend <br /> Developer</h4>
                            <i className="uil uil-times services__model-close"></i>

                            <ul className="services__model-services grid">
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p>Decides web page design and structure.</p>
                                </li>
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p>Develops features to enhance the users experience.</p>
                                </li>
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p>Creates mobile responsive webpages.</p>
                                </li>
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p>Keeps the brand consistent throughout design.</p>
                                </li>                                                                
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-brush-alt services__icon"></i>
                        <h3 className="services__title">Graphic <br /> Designer</h3>
                    </div>

                    <span className="button button--flex button--small button--link services__button">
                        View More
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>

                    <div className="services__model">
                        <div className="services__model-content">
                            <h4 className="services__model-title">Graphic <br /> Designer</h4>
                            <i className="uil uil-times services__model-close"></i>

                            <ul className="services__model-services grid">
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p>Studies design briefs and determent requirements.</p>
                                </li>
                                <li className="services__model-service">
                                    <i class="uil uil-check-circle services__model-icon"></i>
                                    <p>Keeps up-to-date with the latest design trends, tools, and technologies.</p>
                                </li>
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p>Selects colors, images, typography and layout for communication materials.</p>
                                </li>
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p>Creates designs using illustration, photo editing and layout software.</p>
                                </li>                                                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;