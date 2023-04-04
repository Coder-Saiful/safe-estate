import React from 'react';
import Slider from "react-slick";

const PopularCities = () => {
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
        // ========== Popular cities markup start =========
        <section className='exploreCitiesPart'>
            <div className="container-fluid">
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="sectionTitle text-center">
                            <h2>Explore Cities</h2>
                        </div>
                    </div>
                </div>
                <div className="row citySlider position-relative">
                    <Slider {...settings}>
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="cityItem border overflow-hidden rounded-3 shadow-sm">
                                <div className="image">
                                    <img src="/images/property/p1.jpg" alt="Not Found" className='img-fluid' />
                                </div>
                                <div className="name p-3">
                                    <h4>America</h4>
                                    <p className='mb-0'>5 Properties</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="cityItem border overflow-hidden rounded-3 shadow-sm">
                                <div className="image">
                                    <img src="/images/property/p1.jpg" alt="Not Found" className='img-fluid' />
                                </div>
                                <div className="name p-3">
                                    <h4>America</h4>
                                    <p className='mb-0'>5 Properties</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="cityItem border overflow-hidden rounded-3 shadow-sm">
                                <div className="image">
                                    <img src="/images/property/p1.jpg" alt="Not Found" className='img-fluid' />
                                </div>
                                <div className="name p-3">
                                    <h4>America</h4>
                                    <p className='mb-0'>5 Properties</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="cityItem border overflow-hidden rounded-3 shadow-sm">
                                <div className="image">
                                    <img src="/images/property/p1.jpg" alt="Not Found" className='img-fluid' />
                                </div>
                                <div className="name p-3">
                                    <h4>America</h4>
                                    <p className='mb-0'>5 Properties</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="cityItem border overflow-hidden rounded-3 shadow-sm">
                                <div className="image">
                                    <img src="/images/property/p1.jpg" alt="Not Found" className='img-fluid' />
                                </div>
                                <div className="name p-3">
                                    <h4>America</h4>
                                    <p className='mb-0'>5 Properties</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
        // ========== Popular cities markup end =========
    );
};

export default PopularCities;