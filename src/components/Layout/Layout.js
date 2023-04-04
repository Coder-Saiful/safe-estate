import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';

const Layout = ({title, children}) => {
    useEffect(() =>  {
        document.title = title;
    }, [title]);
    return (
        <>
            <Navbar />
           {children} 
        </>
    );
};

export default Layout;