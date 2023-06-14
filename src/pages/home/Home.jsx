import React from 'react';
import Slider from '../slider/Slider';
import PopularClasses from '../popular/PopularClasses';
import PopularInstrument from '../popular/PopularInstrument';
import useTitle from '../../hooks/useTitle';
import ConnectedBands from './ConnectedBands';

const Home = () => {
    useTitle('Home')
    return (
        <section>
            
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstrument></PopularInstrument>
            <ConnectedBands></ConnectedBands>
        </section>
    );
};

export default Home;