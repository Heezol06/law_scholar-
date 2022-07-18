import React from 'react';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import Footer from './Footer/Footer';
import LawSections from './LawSections/LawSections';
import Sections from './Sections/Sections';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LawSections></LawSections>
            <Blog></Blog>
            <Sections></Sections>
            <Footer></Footer>
        </div>
    );
};

export default Home;