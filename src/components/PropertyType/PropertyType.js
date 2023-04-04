import React from 'react';

const PropertyType = () => {
    return (
        // ======== Property type markup start =======
        <section className='propertyTypeSection'>
            <div className="container-fluid">
                <div className="row mb-4">
                    <div className="col-lg-7 col-sm-10 m-auto">
                        <div className="sectionTitle text-center">
                            <h2>Property Types</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sint possimus illo ullam qui consectetur illum quod vel veritatis omnis praesentium provident magnam laudantium.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* ====== Single Property Name ====== */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4 mb-lg-0">
                        <div className='singlePropertyName'>
                            <div className="icon">
                                <i className="fas fa-home"></i>
                            </div>
                            <h2>Houses</h2>
                        </div>
                    </div>
                    {/* ====== Single Property Name ====== */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4 mb-lg-0">
                        <div className="singlePropertyName">
                            <div className="icon">
                                <i className="far fa-building"></i>
                            </div>
                            <h2>Apartments</h2>
                        </div>
                    </div>
                    {/* ====== Single Property Name ====== */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4 mb-lg-0">
                        <div className="singlePropertyName">
                            <div className="icon">
                                <i className="fas fa-landmark"></i>
                            </div>
                            <h2>Commercial</h2>
                        </div>
                    </div>
                    {/* ====== Single Property Name ====== */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4 mb-lg-0 mb-md-0">
                        <div className="singlePropertyName">
                            <div className="icon">
                                <i className="fas fa-laptop"></i>
                            </div>
                            <h2>Office</h2>
                        </div>
                    </div>
                    {/* ====== Single Property Name ====== */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4 mb-lg-0 mb-md-0 mb-sm-0">
                        <div className="singlePropertyName">
                            <div className="icon">
                                <i className="fas fa-school"></i>
                            </div>
                            <h2>Room</h2>
                        </div>
                    </div>
                    {/* ====== Single Property Name ====== */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center">
                        <div className="singlePropertyName">
                            <div className="icon">
                                <i className="fas fa-car"></i>
                            </div>
                            <h2>Parking</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // ======== Property type markup end =======
    );
};

export default PropertyType;