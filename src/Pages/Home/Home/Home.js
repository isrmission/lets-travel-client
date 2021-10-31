import React from 'react';
import LatestNewses from '../../LatestNewses/LatestNewses';
import NewsLetter from '../../NewsLetter/NewsLetter';
import Header from '../Header/Header';
import PopularTours from '../PopularTours/PopularTours';
import WhyUs from '../WhyUS/WhyUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <WhyUs></WhyUs>
            <PopularTours></PopularTours>
            <NewsLetter></NewsLetter>
            <LatestNewses></LatestNewses>
        </div>
    );
};

export default Home;