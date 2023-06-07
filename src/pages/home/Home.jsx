import React from 'react';
import Slider from '../slider/Slider';
import PopularClasses from '../popular/PopularClasses';
import PopularInstrument from '../popular/PopularInstrument';

const Home = () => {
    return (
        <section>
            
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstrument></PopularInstrument>
        </section>
    );
};

export default Home;