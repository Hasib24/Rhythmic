import React from 'react';
import Slider from '../slider/Slider';
import PopularClasses from '../popular/PopularClasses';
import PopularInstrument from '../popular/PopularInstrument';
import useTitle from '../../hooks/useTitle';
import ConnectedBands from './ConnectedBands';

const Home = () => {
    useTitle('Home')
    return (
        <section  className='bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1617634795446-b58c985ec639?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstrument></PopularInstrument>
            <ConnectedBands></ConnectedBands>
        </section>
    );
};

export default Home;