import React from 'react';
import { NavLink } from 'react-router-dom';

const LatestBlog = () => {
    return (
        <section className='blogPart'>
            <div className="container">
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="sectionTitle text-center">
                            <h2>Latest Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-4 col-md-6 mb-lg-4 mb-md-4 mb-4">
                        <div className="blogItem rounded-3 overflow-hidden bg-light shadow-sm">
                            <div className="blogImage position-relative">
                                <img src="/images/property/p4.jpg" alt="Blog Image" className='img-fluid' />
                                <div className="createdTime text-center shadow">
                                    <h5>January 6</h5>
                                    <h3 className='mb-0'>2022</h3>
                                </div>
                            </div>
                            <div className="blogText p-3 pb-0">
                                <h2 className="title">
                                    Learn The Truth About Real Estate Industry
                                </h2>
                                <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt provident, delectus incidunt ut atque nobis iure sint placeat consequuntur pariatur odio ducimus architecto facere amet excepturi, quam rerum omnis.</p>
                            </div>
                            <div className="blogBottomText d-flex justify-content-between align-items-center p-3">
                                <div className="author d-flex align-items-center">
                                    <div className="image">
                                        <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/275523371_949345065941989_963724982153772596_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R1aw6F9ZhVcAX8nDJTM&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfAYDvE3FPbuE0mB-fIjdXTxuMs3lAwpKCCePmosIa0oJg&oe=642880C6" alt="Author" width={50} height={50} className='rounded-circle' />
                                    </div>
                                    <div className="name">
                                        <h4>Md. Saiful Islam</h4>
                                        <span><i className="fa-solid fa-thumbs-up"></i>22</span>
                                        <span><i className="fa-solid fa-comment"></i>22</span>
                                        <span><i className="fa-sharp fa-solid fa-share"></i>22</span>
                                    </div>
                                </div>
                                <div className="readMore">
                                    <button>More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-lg-4 mb-md-4 mb-4">
                        <div className="blogItem rounded-3 overflow-hidden bg-light shadow-sm">
                            <div className="blogImage position-relative">
                                <img src="/images/property/p4.jpg" alt="Blog Image" className='img-fluid' />
                                <div className="createdTime text-center shadow">
                                    <h5>January 6</h5>
                                    <h3 className='mb-0'>2022</h3>
                                </div>
                            </div>
                            <div className="blogText p-3 pb-0">
                                <h2 className="title">
                                    Learn The Truth About Real Estate Industry
                                </h2>
                                <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt provident, delectus incidunt ut atque nobis iure sint placeat consequuntur pariatur odio ducimus architecto facere amet excepturi, quam rerum omnis.</p>
                            </div>
                            <div className="blogBottomText d-flex justify-content-between align-items-center p-3">
                                <div className="author d-flex align-items-center">
                                    <div className="image">
                                        <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/275523371_949345065941989_963724982153772596_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R1aw6F9ZhVcAX8nDJTM&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfAYDvE3FPbuE0mB-fIjdXTxuMs3lAwpKCCePmosIa0oJg&oe=642880C6" alt="Author" width={50} height={50} className='rounded-circle' />
                                    </div>
                                    <div className="name">
                                        <h4>Md. Saiful Islam</h4>
                                        <span><i className="fa-solid fa-thumbs-up"></i>22</span>
                                        <span><i className="fa-solid fa-comment"></i>22</span>
                                        <span><i className="fa-sharp fa-solid fa-share"></i>22</span>
                                    </div>
                                </div>
                                <div className="readMore">
                                    <button>More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-lg-4 mb-md-4 mb-4">
                        <div className="blogItem rounded-3 overflow-hidden bg-light shadow-sm">
                            <div className="blogImage position-relative">
                                <img src="/images/property/p4.jpg" alt="Blog Image" className='img-fluid' />
                                <div className="createdTime text-center shadow">
                                    <h5>January 6</h5>
                                    <h3 className='mb-0'>2022</h3>
                                </div>
                            </div>
                            <div className="blogText p-3 pb-0">
                                <h2 className="title">
                                    Learn The Truth About Real Estate Industry
                                </h2>
                                <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt provident, delectus incidunt ut atque nobis iure sint placeat consequuntur pariatur odio ducimus architecto facere amet excepturi, quam rerum omnis.</p>
                            </div>
                            <div className="blogBottomText d-flex justify-content-between align-items-center p-3">
                                <div className="author d-flex align-items-center">
                                    <div className="image">
                                        <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/275523371_949345065941989_963724982153772596_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R1aw6F9ZhVcAX8nDJTM&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfAYDvE3FPbuE0mB-fIjdXTxuMs3lAwpKCCePmosIa0oJg&oe=642880C6" alt="Author" width={50} height={50} className='rounded-circle' />
                                    </div>
                                    <div className="name">
                                        <h4>Md. Saiful Islam</h4>
                                        <span><i className="fa-solid fa-thumbs-up"></i>22</span>
                                        <span><i className="fa-solid fa-comment"></i>22</span>
                                        <span><i className="fa-sharp fa-solid fa-share"></i>22</span>
                                    </div>
                                </div>
                                <div className="readMore">
                                    <button>More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-lg-0 mb-md-4 mb-4">
                        <div className="blogItem rounded-3 overflow-hidden bg-light shadow-sm">
                            <div className="blogImage position-relative">
                                <img src="/images/property/p4.jpg" alt="Blog Image" className='img-fluid' />
                                <div className="createdTime text-center shadow">
                                    <h5>January 6</h5>
                                    <h3 className='mb-0'>2022</h3>
                                </div>
                            </div>
                            <div className="blogText p-3 pb-0">
                                <h2 className="title">
                                    Learn The Truth About Real Estate Industry
                                </h2>
                                <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt provident, delectus incidunt ut atque nobis iure sint placeat consequuntur pariatur odio ducimus architecto facere amet excepturi, quam rerum omnis.</p>
                            </div>
                            <div className="blogBottomText d-flex justify-content-between align-items-center p-3">
                                <div className="author d-flex align-items-center">
                                    <div className="image">
                                        <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/275523371_949345065941989_963724982153772596_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R1aw6F9ZhVcAX8nDJTM&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfAYDvE3FPbuE0mB-fIjdXTxuMs3lAwpKCCePmosIa0oJg&oe=642880C6" alt="Author" width={50} height={50} className='rounded-circle' />
                                    </div>
                                    <div className="name">
                                        <h4>Md. Saiful Islam</h4>
                                        <span><i className="fa-solid fa-thumbs-up"></i>22</span>
                                        <span><i className="fa-solid fa-comment"></i>22</span>
                                        <span><i className="fa-sharp fa-solid fa-share"></i>22</span>
                                    </div>
                                </div>
                                <div className="readMore">
                                    <button>More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-lg-0 mb-md-0 mb-4">
                        <div className="blogItem rounded-3 overflow-hidden bg-light shadow-sm">
                            <div className="blogImage position-relative">
                                <img src="/images/property/p4.jpg" alt="Blog Image" className='img-fluid' />
                                <div className="createdTime text-center shadow">
                                    <h5>January 6</h5>
                                    <h3 className='mb-0'>2022</h3>
                                </div>
                            </div>
                            <div className="blogText p-3 pb-0">
                                <h2 className="title">
                                    Learn The Truth About Real Estate Industry
                                </h2>
                                <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt provident, delectus incidunt ut atque nobis iure sint placeat consequuntur pariatur odio ducimus architecto facere amet excepturi, quam rerum omnis.</p>
                            </div>
                            <div className="blogBottomText d-flex justify-content-between align-items-center p-3">
                                <div className="author d-flex align-items-center">
                                    <div className="image">
                                        <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/275523371_949345065941989_963724982153772596_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R1aw6F9ZhVcAX8nDJTM&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfAYDvE3FPbuE0mB-fIjdXTxuMs3lAwpKCCePmosIa0oJg&oe=642880C6" alt="Author" width={50} height={50} className='rounded-circle' />
                                    </div>
                                    <div className="name">
                                        <h4>Md. Saiful Islam</h4>
                                        <span><i className="fa-solid fa-thumbs-up"></i>22</span>
                                        <span><i className="fa-solid fa-comment"></i>22</span>
                                        <span><i className="fa-sharp fa-solid fa-share"></i>22</span>
                                    </div>
                                </div>
                                <div className="readMore">
                                    <button>More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-lg-0">
                        <div className="blogItem rounded-3 overflow-hidden bg-light shadow-sm">
                            <div className="blogImage position-relative">
                                <img src="/images/property/p4.jpg" alt="Blog Image" className='img-fluid' />
                                <div className="createdTime text-center shadow">
                                    <h5>January 6</h5>
                                    <h3 className='mb-0'>2022</h3>
                                </div>
                            </div>
                            <div className="blogText p-3 pb-0">
                                <h2 className="title">
                                    Learn The Truth About Real Estate Industry
                                </h2>
                                <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt provident, delectus incidunt ut atque nobis iure sint placeat consequuntur pariatur odio ducimus architecto facere amet excepturi, quam rerum omnis.</p>
                            </div>
                            <div className="blogBottomText d-flex justify-content-between align-items-center p-3">
                                <div className="author d-flex align-items-center">
                                    <div className="image">
                                        <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/275523371_949345065941989_963724982153772596_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R1aw6F9ZhVcAX8nDJTM&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfAYDvE3FPbuE0mB-fIjdXTxuMs3lAwpKCCePmosIa0oJg&oe=642880C6" alt="Author" width={50} height={50} className='rounded-circle' />
                                    </div>
                                    <div className="name">
                                        <h4>Md. Saiful Islam</h4>
                                        <span><i className="fa-solid fa-thumbs-up"></i>22</span>
                                        <span><i className="fa-solid fa-comment"></i>22</span>
                                        <span><i className="fa-sharp fa-solid fa-share"></i>22</span>
                                    </div>
                                </div>
                                <div className="readMore">
                                    <button>More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 text-center">
                        <NavLink to='/blog' className='ViewPropertyBtn text-decoration-none'>View More</NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestBlog;