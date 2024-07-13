import React, { useContext } from 'react';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import { AuthContex } from '../../providers/AuthProvider';


const PopularClasses = () => {
    const { user, setUser, logOut, theme, setTheme } = useContext(AuthContex)

    return (
        <section className={`${theme =="dark"? "text-slate-400":"text-slate-300"} container mx-auto`}>
            <SectionHeader>Popular Classes</SectionHeader>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
               
                <Slide>

                    <div className='border border-slate-500 backdrop-blur-2xl rounded-xl flex flex-col items-center justify-center p-10'>
                        <img src="https://assets.yousician.com/app/uploads/2021/02/09140513/yousician-1.jpg" className='rounded-md' alt="" />
                        <h2 className='font-bold text-2xl my-4'>Learn on a real instrument</h2>
                        <p>All you need is an instrument and the app. No extra accessories like cables or mics needed.</p>
                    </div>
                </Slide>
               
                <Slide>

                    <div className='border border-slate-500 backdrop-blur-2xl rounded-xl flex flex-col items-center justify-center p-10'>
                        <img src="https://assets.yousician.com/app/uploads/2021/02/09140522/yousician-2.jpg" className='rounded-md' alt="" />
                        <h2 className='font-bold text-2xl my-4'>For Android, iOS and PC</h2>
                        <p>Just download the app on your phone, laptop or tablet and you’re good to go.</p>
                    </div>
                </Slide>
               
                <Slide>

                    <div className='border border-slate-500 backdrop-blur-2xl rounded-xl flex flex-col items-center justify-center p-10'>
                        <img src="https://assets.yousician.com/app/uploads/2021/02/09140529/yousician-3.jpg" className='rounded-md' alt="" />
                        <h2 className='font-bold text-2xl my-4'>Go acoustic or electric</h2>
                        <p>Learn with an acoustic or lorem ipsum electric guitar, bass, loreem, ukulele llorem or piano.</p>
                    </div>
                </Slide>

            </div>
        </section>
    );
};

export default PopularClasses;