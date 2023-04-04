import React from 'react';
import {NavLink} from 'react-router-dom';

const OurProperties = () => {
    return (

        // ========== Property list markup start =========

        <section className='ourPropertiesList'>
            <div className="container">
                <div className="row mb-4">
                    <div className="col-lg-7 m-auto text-center">
                        <div className="sectionTitle">
                            <h2>Our Properties</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* Property item */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="propertyItem shadow rounded-3 overflow-hidden border">
                            <div className="propertyImage position-relative overflow-hidden">
                                <img src="/images/property/01.webp" alt="Not Found" className='img-fluid'  />
                                <div className="overlayText">
                                    <div className="overlayButton position-absolute w-100 top-0 z-1">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li className='text-bg-success px-2 py-1 rounded-1 mt-3 ms-3'>Verified</li>
                                            <li className='text-bg-primary px-2 py-1 rounded-1 mt-3 me-3'>Latest</li>
                                        </ul>
                                    </div>     
                                    <div className="overlayIcon z-1">
                                        <ul className="list-unstyled">
                                            <li title='Preview'><i className="fa-solid fa-up-right-and-down-left-from-center"></i></li>
                                            <li title='Add to Wishlist'><i className="fa-solid fa-heart"></i></li>
                                            <li title='Add to Compare'><i className="fa-solid fa-circle-plus"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="propertyInfo p-3 z-1">
                                <div className="propertyType mb-2">
                                    <span>Apartment</span>
                                </div>
                                <h4>3-bed Apartment | 67 sq.m</h4>
                                <p><i className="fa-solid fa-location-dot"></i> 8100 S Ashland Ave, USA</p>
                                <div>
                                    <div className="price">
                                        <ul className='list-unstyled d-flex justify-content-between'>
                                            <li>For rent</li>
                                            <li className='fw-semibold'>$ 434</li>
                                        </ul>
                                    </div>
                                    <div className="roomStructure">
                                        <ul className='d-flex justify-content-between list-unstyled'>
                                            <li title='Bedrooms'><i className="fa-solid fa-bed"></i> 3 </li>
                                            <li title='Bathrooms'><i className="fa-sharp fa-solid fa-bath"></i>5 </li>
                                            <li title='Sqrt'><i className="fa-solid fa-arrow-up-wide-short"></i> 130 </li>
                                            <li title='Garages'><i className="fa-solid fa-car"></i> 4 </li>
                                        </ul>
                                    </div>
                                    <div className="homeAuthor">
                                        <ul className='list-unstyled d-flex justify-content-between align-items-center mb-0'>
                                            <li><i className="fa-solid fa-link"></i> 4 year ago</li>
                                            <li><img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/275523371_949345065941989_963724982153772596_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R1aw6F9ZhVcAX8nDJTM&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfAYDvE3FPbuE0mB-fIjdXTxuMs3lAwpKCCePmosIa0oJg&oe=642880C6" alt="Home Author" width={30} height={30} className='rounded-circle me-1' /> Md. Saiful Islam</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Property item */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="propertyItem shadow rounded-3 overflow-hidden border">
                            <div className="propertyImage position-relative overflow-hidden">
                                <img src="/images/property/01.webp" alt="Not Found" className='img-fluid'  />
                                <div className="overlayText">
                                    <div className="overlayButton position-absolute w-100 top-0 z-1">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li className='text-bg-success px-2 py-1 rounded-1 mt-3 ms-3'>Verified</li>
                                            <li className='text-bg-primary px-2 py-1 rounded-1 mt-3 me-3'>Latest</li>
                                        </ul>
                                    </div>     
                                    <div className="overlayIcon z-1">
                                        <ul className="list-unstyled">
                                            <li title='Preview'><i className="fa-solid fa-up-right-and-down-left-from-center"></i></li>
                                            <li title='Add to Wishlist'><i className="fa-solid fa-heart"></i></li>
                                            <li title='Add to Compare'><i className="fa-solid fa-circle-plus"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="propertyInfo p-3 z-1">
                                <div className="propertyType mb-2">
                                    <span>Apartment</span>
                                </div>
                                <h4>3-bed Apartment | 67 sq.m</h4>
                                <p><i className="fa-solid fa-location-dot"></i> 8100 S Ashland Ave, USA</p>
                                <div>
                                    <div className="price">
                                        <ul className='list-unstyled d-flex justify-content-between'>
                                            <li>For rent</li>
                                            <li className='fw-semibold'>$ 434</li>
                                        </ul>
                                    </div>
                                    <div className="roomStructure">
                                        <ul className='d-flex justify-content-between list-unstyled'>
                                            <li title='Bedrooms'><i className="fa-solid fa-bed"></i> 3 </li>
                                            <li title='Bathrooms'><i className="fa-sharp fa-solid fa-bath"></i>5 </li>
                                            <li title='Sqrt'><i className="fa-solid fa-arrow-up-wide-short"></i> 130 </li>
                                            <li title='Garages'><i className="fa-solid fa-car"></i> 4 </li>
                                        </ul>
                                    </div>
                                    <div className="homeAuthor">
                                        <ul className='list-unstyled d-flex justify-content-between align-items-center mb-0'>
                                            <li><i className="fa-solid fa-link"></i> 4 year ago</li>
                                            <li><img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/275523371_949345065941989_963724982153772596_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R1aw6F9ZhVcAX8nDJTM&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfAYDvE3FPbuE0mB-fIjdXTxuMs3lAwpKCCePmosIa0oJg&oe=642880C6" alt="Home Author" width={30} height={30} className='rounded-circle me-1' /> Md. Saiful Islam</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Property item */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="propertyItem shadow rounded-3 overflow-hidden border">
                            <div className="propertyImage position-relative overflow-hidden">
                                <img src="/images/property/01.webp" alt="Not Found" className='img-fluid'  />
                                <div className="overlayText">
                                    <div className="overlayButton position-absolute w-100 top-0 z-1">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li className='text-bg-success px-2 py-1 rounded-1 mt-3 ms-3'>Verified</li>
                                            <li className='text-bg-primary px-2 py-1 rounded-1 mt-3 me-3'>Latest</li>
                                        </ul>
                                    </div>     
                                    <div className="overlayIcon z-1">
                                        <ul className="list-unstyled">
                                            <li title='Preview'><i className="fa-solid fa-up-right-and-down-left-from-center"></i></li>
                                            <li title='Add to Wishlist'><i className="fa-solid fa-heart"></i></li>
                                            <li title='Add to Compare'><i className="fa-solid fa-circle-plus"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="propertyInfo p-3 z-1">
                                <div className="propertyType mb-2">
                                    <span>Apartment</span>
                                </div>
                                <h4>3-bed Apartment | 67 sq.m</h4>
                                <p><i className="fa-solid fa-location-dot"></i> 8100 S Ashland Ave, USA</p>
                                <div>
                                    <div className="price">
                                        <ul className='list-unstyled d-flex justify-content-between'>
                                            <li>For rent</li>
                                            <li className='fw-semibold'>$ 434</li>
                                        </ul>
                                    </div>
                                    <div className="roomStructure">
                                        <ul className='d-flex justify-content-between list-unstyled'>
                                            <li title='Bedrooms'><i className="fa-solid fa-bed"></i> 3 </li>
                                            <li title='Bathrooms'><i className="fa-sharp fa-solid fa-bath"></i>5 </li>
                                            <li title='Sqrt'><i className="fa-solid fa-arrow-up-wide-short"></i> 130 </li>
                                            <li title='Garages'><i className="fa-solid fa-car"></i> 4 </li>
                                        </ul>
                                    </div>
                                    <div className="homeAuthor">
                                        <ul className='list-unstyled d-flex justify-content-between align-items-center mb-0'>
                                            <li><i className="fa-solid fa-link"></i> 4 year ago</li>
                                            <li><img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/275523371_949345065941989_963724982153772596_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R1aw6F9ZhVcAX8nDJTM&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfAYDvE3FPbuE0mB-fIjdXTxuMs3lAwpKCCePmosIa0oJg&oe=642880C6" alt="Home Author" width={30} height={30} className='rounded-circle me-1' /> Md. Saiful Islam</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Property item */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="propertyItem shadow rounded-3 overflow-hidden border">
                            <div className="propertyImage position-relative overflow-hidden">
                                <img src="/images/property/01.webp" alt="Not Found" className='img-fluid'  />
                                <div className="overlayText">
                                    <div className="overlayButton position-absolute w-100 top-0 z-1">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li className='text-bg-success px-2 py-1 rounded-1 mt-3 ms-3'>Verified</li>
                                            <li className='text-bg-primary px-2 py-1 rounded-1 mt-3 me-3'>Latest</li>
                                        </ul>
                                    </div>     
                                    <div className="overlayIcon z-1">
                                        <ul className="list-unstyled">
                                            <li title='Preview'><i className="fa-solid fa-up-right-and-down-left-from-center"></i></li>
                                            <li title='Add to Wishlist'><i className="fa-solid fa-heart"></i></li>
                                            <li title='Add to Compare'><i className="fa-solid fa-circle-plus"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="propertyInfo p-3 z-1">
                                <div className="propertyType mb-2">
                                    <span>Apartment</span>
                                </div>
                                <h4>3-bed Apartment | 67 sq.m</h4>
                                <p><i className="fa-solid fa-location-dot"></i> 8100 S Ashland Ave, USA</p>
                                <div>
                                    <div className="price">
                                        <ul className='list-unstyled d-flex justify-content-between'>
                                            <li>For rent</li>
                                            <li className='fw-semibold'>$ 434</li>
                                        </ul>
                                    </div>
                                    <div className="roomStructure">
                                        <ul className='d-flex justify-content-between list-unstyled'>
                                            <li title='Bedrooms'><i className="fa-solid fa-bed"></i> 3 </li>
                                            <li title='Bathrooms'><i className="fa-sharp fa-solid fa-bath"></i>5 </li>
                                            <li title='Sqrt'><i className="fa-solid fa-arrow-up-wide-short"></i> 130 </li>
                                            <li title='Garages'><i className="fa-solid fa-car"></i> 4 </li>
                                        </ul>
                                    </div>
                                    <div className="homeAuthor">
                                        <ul className='list-unstyled d-flex justify-content-between align-items-center mb-0'>
                                            <li><i className="fa-solid fa-link"></i> 4 year ago</li>
                                            <li><img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/275523371_949345065941989_963724982153772596_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R1aw6F9ZhVcAX8nDJTM&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfAYDvE3FPbuE0mB-fIjdXTxuMs3lAwpKCCePmosIa0oJg&oe=642880C6" alt="Home Author" width={30} height={30} className='rounded-circle me-1' /> Md. Saiful Islam</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Property item */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="propertyItem shadow rounded-3 overflow-hidden border">
                            <div className="propertyImage position-relative overflow-hidden">
                                <img src="/images/property/01.webp" alt="Not Found" className='img-fluid'  />
                                <div className="overlayText">
                                    <div className="overlayButton position-absolute w-100 top-0 z-1">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li className='text-bg-success px-2 py-1 rounded-1 mt-3 ms-3'>Verified</li>
                                            <li className='text-bg-primary px-2 py-1 rounded-1 mt-3 me-3'>Latest</li>
                                        </ul>
                                    </div>     
                                    <div className="overlayIcon z-1">
                                        <ul className="list-unstyled">
                                            <li title='Preview'><i className="fa-solid fa-up-right-and-down-left-from-center"></i></li>
                                            <li title='Add to Wishlist'><i className="fa-solid fa-heart"></i></li>
                                            <li title='Add to Compare'><i className="fa-solid fa-circle-plus"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="propertyInfo p-3 z-1">
                                <div className="propertyType mb-2">
                                    <span>Apartment</span>
                                </div>
                                <h4>3-bed Apartment | 67 sq.m</h4>
                                <p><i className="fa-solid fa-location-dot"></i> 8100 S Ashland Ave, USA</p>
                                <div>
                                    <div className="price">
                                        <ul className='list-unstyled d-flex justify-content-between'>
                                            <li>For rent</li>
                                            <li className='fw-semibold'>$ 434</li>
                                        </ul>
                                    </div>
                                    <div className="roomStructure">
                                        <ul className='d-flex justify-content-between list-unstyled'>
                                            <li title='Bedrooms'><i className="fa-solid fa-bed"></i> 3 </li>
                                            <li title='Bathrooms'><i className="fa-sharp fa-solid fa-bath"></i>5 </li>
                                            <li title='Sqrt'><i className="fa-solid fa-arrow-up-wide-short"></i> 130 </li>
                                            <li title='Garages'><i className="fa-solid fa-car"></i> 4 </li>
                                        </ul>
                                    </div>
                                    <div className="homeAuthor">
                                        <ul className='list-unstyled d-flex justify-content-between align-items-center mb-0'>
                                            <li><i className="fa-solid fa-link"></i> 4 year ago</li>
                                            <li><img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/275523371_949345065941989_963724982153772596_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R1aw6F9ZhVcAX8nDJTM&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfAYDvE3FPbuE0mB-fIjdXTxuMs3lAwpKCCePmosIa0oJg&oe=642880C6" alt="Home Author" width={30} height={30} className='rounded-circle me-1' /> Md. Saiful Islam</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Property item */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="propertyItem shadow rounded-3 overflow-hidden border">
                            <div className="propertyImage position-relative overflow-hidden">
                                <img src="/images/property/01.webp" alt="Not Found" className='img-fluid'  />
                                <div className="overlayText">
                                    <div className="overlayButton position-absolute w-100 top-0 z-1">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li className='text-bg-success px-2 py-1 rounded-1 mt-3 ms-3'>Verified</li>
                                            <li className='text-bg-primary px-2 py-1 rounded-1 mt-3 me-3'>Latest</li>
                                        </ul>
                                    </div>     
                                    <div className="overlayIcon z-1">
                                        <ul className="list-unstyled">
                                            <li title='Preview'><i className="fa-solid fa-up-right-and-down-left-from-center"></i></li>
                                            <li title='Add to Wishlist'><i className="fa-solid fa-heart"></i></li>
                                            <li title='Add to Compare'><i className="fa-solid fa-circle-plus"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="propertyInfo p-3 z-1">
                                <div className="propertyType mb-2">
                                    <span>Apartment</span>
                                </div>
                                <h4>3-bed Apartment | 67 sq.m</h4>
                                <p><i className="fa-solid fa-location-dot"></i> 8100 S Ashland Ave, USA</p>
                                <div>
                                    <div className="price">
                                        <ul className='list-unstyled d-flex justify-content-between'>
                                            <li>For rent</li>
                                            <li className='fw-semibold'>$ 434</li>
                                        </ul>
                                    </div>
                                    <div className="roomStructure">
                                        <ul className='d-flex justify-content-between list-unstyled'>
                                            <li title='Bedrooms'><i className="fa-solid fa-bed"></i> 3 </li>
                                            <li title='Bathrooms'><i className="fa-sharp fa-solid fa-bath"></i>5 </li>
                                            <li title='Sqrt'><i className="fa-solid fa-arrow-up-wide-short"></i> 130 </li>
                                            <li title='Garages'><i className="fa-solid fa-car"></i> 4 </li>
                                        </ul>
                                    </div>
                                    <div className="homeAuthor">
                                        <ul className='list-unstyled d-flex justify-content-between align-items-center mb-0'>
                                            <li><i className="fa-solid fa-link"></i> 4 year ago</li>
                                            <li><img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/275523371_949345065941989_963724982153772596_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R1aw6F9ZhVcAX8nDJTM&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfAYDvE3FPbuE0mB-fIjdXTxuMs3lAwpKCCePmosIa0oJg&oe=642880C6" alt="Home Author" width={30} height={30} className='rounded-circle me-1' /> Md. Saiful Islam</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 text-center">
                        <NavLink to='/property' className='ViewPropertyBtn text-decoration-none'>View More</NavLink>
                    </div>
                </div>
            </div>
        </section>

        // ========== Property list markup start =========

    );
};

export default OurProperties;