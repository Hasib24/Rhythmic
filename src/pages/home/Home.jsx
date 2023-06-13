import React from 'react';
import Slider from '../slider/Slider';
import PopularClasses from '../popular/PopularClasses';
import PopularInstrument from '../popular/PopularInstrument';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <section>
            
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstrument></PopularInstrument>
        </section>
    );
};

export default Home;