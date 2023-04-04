import React from 'react';
import Banner from '../../components/Banner/Banner';
import ExploreCities from '../../components/PopularCities/PopularCities';
import Layout from '../../components/Layout/Layout';
import OurProperties from '../../components/OurProperties/OurProperties';
import PropertyType from '../../components/PropertyType/PropertyType';
import Search from '../../components/Search/Search';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import LatestBlog from '../../components/LatestBlog/LatestBlog';
import OurAgents from '../../components/OurAgents/OurAgents';

const Home = () => {
    return (
        <Layout title='Home'>
            <Banner />
            <Search />
            <PropertyType />
            <OurProperties />
            <WhyChooseUs />
            <ExploreCities />
            <LatestBlog />
            <OurAgents />
        </Layout>
    );
};

export default Home;