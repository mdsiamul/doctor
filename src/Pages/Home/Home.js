import React from 'react';
import Dental from '../Dental/Dental';
import Banner from './Banner';
import Commnet from './Commnet';
import Contacthome from './Contacthome';
import Footer from '../Shared/Footer';

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
            <Commnet></Commnet>
            <Contacthome></Contacthome>
            <Footer></Footer>

        </div>
    );
};

export default Home;