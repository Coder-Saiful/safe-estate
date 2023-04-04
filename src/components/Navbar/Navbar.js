import React, { useEffect } from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    useEffect(() => {
        document.body.style.overflowY = 'scroll';
        document.body.style.paddingRight = 0;
    }, []);
    return (

        // ============ Navigation markup start ==============

        <nav className='shadow py-3 sticky-top bg-white z-3'>
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo">
                    <Link to='/' className='text-decoration-none text-dark'><h2 className='mb-0'>SAFE<span>ESTATE</span></h2></Link>
                </div>
                <div className="menu">

                    {/* =========== Desktop navigation =========== */}

                    <ul className='mb-0 list-unstyled d-none d-lg-flex justify-content-center align-items-center desktopMenu'>
                        <li><NavLink to='/' className='text-decoration-none px-3'>Home</NavLink></li>
                        <li><NavLink to='/property' className='text-decoration-none  px-3'>Property</NavLink></li>
                        <li><NavLink to='/about' className='text-decoration-none px-3'>About</NavLink></li>
                        <li><NavLink to='/blog' className='text-decoration-none  px-3'>Blog</NavLink></li>
                        <li><NavLink to='/contact' className='text-decoration-none  px-3'>Contact</NavLink></li>
                        <li><NavLink to='/help-center' className='text-decoration-none px-3'>Help Center</NavLink></li>
                        <li><NavLink to='/account' className='text-decoration-none ps-3'>Account</NavLink></li>
                    </ul>

                    {/* =========== Mobile navigation =========== */}

                    <div className="d-block justify-content-end d-lg-none fs-5 mobileMenuTrigger" style={{ border: 'transparent', background: 'transparent' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                        <div className="offcanvas offcanvas-start"  id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <div className="logo">
                                <Link to='/' className='text-decoration-none text-dark'><h2 className='mb-0'>SAFE<span>ESTATE</span></h2></Link>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className='mb-0 list-unstyled justify-content-center align-items-center desktopMenu'>
                                <li><NavLink to='/' className='text-decoration-none d-block pb-2 fs-5'  >Home</NavLink></li>
                                <li><NavLink to='/property' className='text-decoration-none d-block pb-2 fs-5'  >Property</NavLink></li>
                                <li><NavLink to='/about' className='text-decoration-none d-block pb-2 fs-5'  >About</NavLink></li>
                                <li><NavLink to='/blog' className='text-decoration-none d-block pb-2 fs-5'  >Blog</NavLink></li>
                                <li><NavLink to='/contact' className='text-decoration-none d-block pb-2 fs-5'  >Contact</NavLink></li>
                                <li><NavLink to='/help-center' className='text-decoration-none d-block pb-2 fs-5'  >Help Center</NavLink></li>
                                <li><NavLink to='/account' className='text-decoration-none pb-3 fs-5'  >Account</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        // ============ Navigation markup end ==============

    );
};

export default Navbar;