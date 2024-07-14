import React from 'react';
import SectionHeader from '../../components/sectionHeader/SectionHeader';

const PopularInstrument = () => {
    return (
        <section className='container mx-auto my-36'>
            <SectionHeader>Popular Instractors</SectionHeader>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 '>

                <div className='backdrop-blur-3xl border border-slate-400 text-slate-300  hover:bg-slate-800 rounded-lg p-10 flex justify-between m-5 duration-300'>
                    <div>
                        <h1 className='text-xl'>Prokash Debnath</h1>
                        <h1>Vocal Instructor</h1>
                        <h1>prokashdeb1@gmail.com</h1>
                    </div>
                    <div>

                        <img className='h-20 w-20 rounded-full' src="https://img.freepik.com/free-photo/worldface-spanish-guy-white-background_53876-137665.jpg?size=626&ext=jpg&uid=R61281359&ga=GA1.2.482754751.1681208168&semt=ais" alt="" />
                    </div>
                    
                </div>

                <div className='backdrop-blur-3xl border border-slate-400 text-slate-300 hover:bg-slate-800  rounded-lg p-10 flex justify-between m-5 duration-300'>
                    <div>
                        <h1 className='text-xl'>Rhidika Bissash</h1>
                        <h1>Music Instractor</h1>
                        <h1>bissah502@gmail.com</h1>
                    </div>
                    <div>

                        <img className='h-20 w-20 rounded-full' src="https://img.freepik.com/free-photo/young-extraterrestrial-woman-s-portret_144627-3464.jpg?size=626&ext=jpg&uid=R61281359&ga=GA1.2.482754751.1681208168&semt=ais" alt="" />
                    </div>
                    
                </div>
                <div className='backdrop-blur-3xl border border-slate-400 text-slate-300 hover:bg-slate-800  rounded-lg p-10 flex justify-between m-5 duration-300'>
                    <div>
                        <h1 className='text-xl'>Walid Din Faruk</h1>
                        <h1>Instrumental Instructor</h1>
                        <h1>walidbin@yahoo.com</h1>
                    </div>
                    <div>

                        <img className='h-20 w-20 rounded-full' src="https://img.freepik.com/free-photo/serious-man-looking-camera_23-2147799044.jpg?size=626&ext=jpg&uid=R61281359&ga=GA1.1.482754751.1681208168&semt=ais" alt="" />
                    </div>
                    
                </div>
               
                
               
            </div>
        </section>
    );
};

export default PopularInstrument;