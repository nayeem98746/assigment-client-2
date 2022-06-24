import React from 'react';
import JobSecation from '../../JobSecation/JobSecation';
import Banner from '../Banner/Banner';
import Navber from '../Navber/Navber';

const Home = () => {
    return (
        <div>
            {/* <Navber></Navber> */}
            <Banner></Banner>
            <JobSecation></JobSecation>
        </div>
    );
};

export default Home;