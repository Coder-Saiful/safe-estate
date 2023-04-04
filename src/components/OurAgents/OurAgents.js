import React from 'react';
import Slider from "react-slick";

const OurAgents = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              }
          ]
    };
    return (
        <section className='ourAgentsPart'>
            <div className="container-fluid">
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="sectionTitle text-center">
                            <h2>Our Agents</h2>
                        </div>
                    </div>
                </div>
                    <div className="row agentSlider">
                <Slider {...settings}>
                        <div className="col-lg-3 col-md-4 col-sm-6 ">
                            <div className='singleAgent shadow-sm border rounded-3 overflow-hidden'>
                                <div className="image position-relative">
                                    <img src="https://media.istockphoto.com/id/1318908169/photo/cheerful-self-confident-professional-businessman-with-crossed-hands-portrait.jpg?s=612x612&w=0&k=20&c=WBRttWUAJqxjb6DgA_sTDXtmNzLCDflqVzaJ8vrtwNM=" alt="Agent" className='img-fluid' />
                                    <div className="socialIcons position-absolute">
                                        <ul className='list-unstyled d-flex justify-content-center mb-0'>
                                            <li><a href="https://www.facebook.com" target='_blank' className='facebook'><i className="fa-brands fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com" target='_blank' className='twitter'><i className="fa-brands fa-twitter"></i></a></li>
                                            <li><a href="https://www.linkedin.com" target='_blank' className='linkedin'><i className="fa-brands fa-linkedin-in"></i></a></li>
                                            <li><a href="https://mail.google.com" target='_blank' className='envelope'><i className="fa-solid fa-envelope"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="info text-start">
                                    <h3>Md. Saiful Islam</h3>
                                    <h5 className='mb-0'>Marketer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ">
                            <div className='singleAgent shadow-sm border  rounded-3 overflow-hidden'>
                                <div className="image position-relative">
                                    <img src="https://media.istockphoto.com/id/1318908169/photo/cheerful-self-confident-professional-businessman-with-crossed-hands-portrait.jpg?s=612x612&w=0&k=20&c=WBRttWUAJqxjb6DgA_sTDXtmNzLCDflqVzaJ8vrtwNM=" alt="Agent" className='img-fluid' />
                                    <div className="socialIcons position-absolute">
                                        <ul className='list-unstyled d-flex justify-content-center mb-0'>
                                            <li><a href="https://www.facebook.com" target='_blank' className='facebook'><i className="fa-brands fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com" target='_blank' className='twitter'><i className="fa-brands fa-twitter"></i></a></li>
                                            <li><a href="https://www.linkedin.com" target='_blank' className='linkedin'><i className="fa-brands fa-linkedin-in"></i></a></li>
                                            <li><a href="https://mail.google.com" target='_blank' className='envelope'><i className="fa-solid fa-envelope"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="info text-start">
                                    <h3>Md. Saiful Islam</h3>
                                    <h5 className='mb-0'>Marketer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ">
                            <div className='singleAgent shadow-sm border  rounded-3 overflow-hidden'>
                                <div className="image position-relative">
                                    <img src="https://media.istockphoto.com/id/1318908169/photo/cheerful-self-confident-professional-businessman-with-crossed-hands-portrait.jpg?s=612x612&w=0&k=20&c=WBRttWUAJqxjb6DgA_sTDXtmNzLCDflqVzaJ8vrtwNM=" alt="Agent" className='img-fluid' />
                                    <div className="socialIcons position-absolute">
                                        <ul className='list-unstyled d-flex justify-content-center mb-0'>
                                            <li><a href="https://www.facebook.com" target='_blank' className='facebook'><i className="fa-brands fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com" target='_blank' className='twitter'><i className="fa-brands fa-twitter"></i></a></li>
                                            <li><a href="https://www.linkedin.com" target='_blank' className='linkedin'><i className="fa-brands fa-linkedin-in"></i></a></li>
                                            <li><a href="https://mail.google.com" target='_blank' className='envelope'><i className="fa-solid fa-envelope"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="info text-start">
                                    <h3>Md. Saiful Islam</h3>
                                    <h5 className='mb-0'>Marketer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ">
                            <div className='singleAgent shadow-sm border  rounded-3 overflow-hidden'>
                                <div className="image position-relative">
                                    <img src="https://media.istockphoto.com/id/1318908169/photo/cheerful-self-confident-professional-businessman-with-crossed-hands-portrait.jpg?s=612x612&w=0&k=20&c=WBRttWUAJqxjb6DgA_sTDXtmNzLCDflqVzaJ8vrtwNM=" alt="Agent" className='img-fluid' />
                                    <div className="socialIcons position-absolute">
                                        <ul className='list-unstyled d-flex justify-content-center mb-0'>
                                            <li><a href="https://www.facebook.com" target='_blank' className='facebook'><i className="fa-brands fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com" target='_blank' className='twitter'><i className="fa-brands fa-twitter"></i></a></li>
                                            <li><a href="https://www.linkedin.com" target='_blank' className='linkedin'><i className="fa-brands fa-linkedin-in"></i></a></li>
                                            <li><a href="https://mail.google.com" target='_blank' className='envelope'><i className="fa-solid fa-envelope"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="info text-start">
                                    <h3>Md. Saiful Islam</h3>
                                    <h5 className='mb-0'>Marketer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ">
                            <div className='singleAgent shadow-sm border  rounded-3 overflow-hidden'>
                                <div className="image position-relative">
                                    <img src="https://media.istockphoto.com/id/1318908169/photo/cheerful-self-confident-professional-businessman-with-crossed-hands-portrait.jpg?s=612x612&w=0&k=20&c=WBRttWUAJqxjb6DgA_sTDXtmNzLCDflqVzaJ8vrtwNM=" alt="Agent" className='img-fluid' />
                                    <div className="socialIcons position-absolute">
                                        <ul className='list-unstyled d-flex justify-content-center mb-0'>
                                            <li><a href="https://www.facebook.com" target='_blank' className='facebook'><i className="fa-brands fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com" target='_blank' className='twitter'><i className="fa-brands fa-twitter"></i></a></li>
                                            <li><a href="https://www.linkedin.com" target='_blank' className='linkedin'><i className="fa-brands fa-linkedin-in"></i></a></li>
                                            <li><a href="https://mail.google.com" target='_blank' className='envelope'><i className="fa-solid fa-envelope"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="info text-start">
                                    <h3>Md. Saiful Islam</h3>
                                    <h5 className='mb-0'>Marketer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ">
                            <div className='singleAgent shadow-sm border  rounded-3 overflow-hidden'>
                                <div className="image position-relative">
                                    <img src="https://media.istockphoto.com/id/1318908169/photo/cheerful-self-confident-professional-businessman-with-crossed-hands-portrait.jpg?s=612x612&w=0&k=20&c=WBRttWUAJqxjb6DgA_sTDXtmNzLCDflqVzaJ8vrtwNM=" alt="Agent" className='img-fluid' />
                                    <div className="socialIcons position-absolute">
                                        <ul className='list-unstyled d-flex justify-content-center mb-0'>
                                            <li><a href="https://www.facebook.com" target='_blank' className='facebook'><i className="fa-brands fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com" target='_blank' className='twitter'><i className="fa-brands fa-twitter"></i></a></li>
                                            <li><a href="https://www.linkedin.com" target='_blank' className='linkedin'><i className="fa-brands fa-linkedin-in"></i></a></li>
                                            <li><a href="https://mail.google.com" target='_blank' className='envelope'><i className="fa-solid fa-envelope"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="info text-start">
                                    <h3>Md. Saiful Islam</h3>
                                    <h5 className='mb-0'>Marketer</h5>
                                </div>
                            </div>
                        </div>
                </Slider>
                    </div>
            </div>
        </section>
    );
};

export default OurAgents;