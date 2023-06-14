import React from 'react';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import { Bounce, Fade, Slide } from "react-awesome-reveal";

const PopularClasses = () => {
    return (
        <section className='container mx-auto'>
            <SectionHeader>Popular Classes</SectionHeader>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
               
                <Slide>

                    <div className='border flex flex-col items-center justify-center p-10'>
                        <img src="https://assets.yousician.com/app/uploads/2021/02/09140513/yousician-1.jpg" alt="" />
                        <h2 className='font-bold text-2xl my-4'>Learn on a real instrument</h2>
                        <p>All you need is an instrument and the app. No extra accessories like cables or mics needed.</p>
                    </div>
                </Slide>
               
                <Slide>

                    <div className='border flex flex-col items-center justify-center p-10'>
                        <img src="https://assets.yousician.com/app/uploads/2021/02/09140513/yousician-1.jpg" alt="" />
                        <h2 className='font-bold text-2xl my-4'>Learn on a real instrument</h2>
                        <p>All you need is an instrument and the app. No extra accessories like cables or mics needed.</p>
                    </div>
                </Slide>
               
                <Slide>

                    <div className='border flex flex-col items-center justify-center p-10'>
                        <img src="https://assets.yousician.com/app/uploads/2021/02/09140513/yousician-1.jpg" alt="" />
                        <h2 className='font-bold text-2xl my-4'>Learn on a real instrument</h2>
                        <p>All you need is an instrument and the app. No extra accessories like cables or mics needed.</p>
                    </div>
                </Slide>

            </div>
        </section>
    );
};

export default PopularClasses;