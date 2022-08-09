import React from 'react';
import Dental from '../Dental/Dental';
import Banner from './Banner';
import Info from './Info';
import Makeappoint from './Makeappoint';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Dental></Dental>
            <Makeappoint></Makeappoint>
        </div>
    );
};

export default Home;