import React from 'react';
import Slider from "react-slick";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (

        // ========== Banner section markup start ==========

        <section>
            <Slider {...settings}>
            {/* ====== Banner Item ======= */}
            <div className="item">
                <div className="banner" style={{ backgroundImage: 'url("/images/banner/banner1.jpg")' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 bannerText">
                                <h1>Easy way to find a perfect property</h1>
                                <p className='fs-4 mb-2 mt-4 text-white'>We provide a complete service for the sale, purchase or rental of real estate. We have been operating more than 10 years. Search millions of apartments and houses on Finder.</p>
                                <button>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ====== Banner Item ======= */}
                <div className="item">
                    <div className="banner" style={{ backgroundImage: 'url("/images/banner/banner2.jpg")' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 bannerText">
                                    <h1>Discover a place you'll love to live</h1>
                                    <p className='fs-4 mb-2 mt-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi adipisci quam, laudantium totam dolorum exercitationem quisquam dolore autem corrupti.</p>
                                    <button>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* ====== Banner Item ======= */}
                <div className="item">
                    <div className="banner" style={{ backgroundImage: 'url("/images/banner/banner3.jpg")' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 bannerText">
                                    <h1>Find The Perfect Place to Live With your Family</h1>
                                    <p className='fs-4 mb-2 mt-4 text-white'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm.</p>
                                    <button>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* ====== Banner Item ======= */}
                <div className="item">
                    <div className="banner" style={{ backgroundImage: 'url("/images/banner/banner4.jpg")' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 bannerText">
                                    <h1>Find your next Home in Las Vegas</h1>
                                    <p className='fs-4 mb-2 mt-4 text-white'>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back.</p>
                                    <button>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* ====== Banner Item ======= */}
                <div className="item">
                    <div className="banner" style={{ backgroundImage: 'url("/images/banner/banner5.jpg")' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 bannerText">
                                    <h1>Your source for all your real estate needs </h1>
                                    <p className='fs-4 mb-2 mt-4 text-white'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound.</p>
                                    <button>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>

        // ========== Banner section markup end ==========

    );
};

export default Banner;