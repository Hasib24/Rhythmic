import React from 'react';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import InstructorCard from './InstructorCard';
import useTitle from '../../hooks/useTitle';

const Instructors = () => {
    useTitle('Instractor')
    return (
        <section className='container mx-auto px-5 md:px-0'>
            <SectionHeader>Our Instractors</SectionHeader>
            <div className='grid md:grid-cols-2 gap-5'>
                
            <div className="grid md:grid-cols-2 rounded-lg bg-base-300 shadow-xl">
                <figure><img className='rounded-t-lg md:rounded-l-lg' src="https://img.freepik.com/free-photo/man-pointing-with-headphones_1149-1583.jpg?size=626&ext=jpg&uid=R61281359&ga=GA1.2.482754751.1681208168&semt=ais" alt="Movie"/></figure>
                <div className="p-5">
                  <h2 className="text-2xl">Jaber Ahamed</h2>
                  <h3>Email : jaber@gmail.com</h3>
                  <p className='my-5'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, suscipit!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi provident officiis fuga repellat quos.
                  </p>
                  <h3>Number of Classes : 412</h3>
                  <div className="card-actions justify-end">
                    <button className="w-full btn mt-10">See Classes</button>
                  </div>
                </div>
            </div>
                
            <div className="grid md:grid-cols-2 rounded-lg bg-base-300 shadow-xl">
                <figure><img className='rounded-t-lg md:rounded-l-lg' src="https://img.freepik.com/free-photo/guitarist-man-playing-guitar-home_144627-28083.jpg?w=360&t=st=1686751074~exp=1686751674~hmac=acb7ec3c755817f427aa98e059a2836a520d168bed24cc282d42a4fd74491313" alt="Movie"/></figure>
                <div className="p-5">
                  <h2 className="text-2xl">Maksudul Haq</h2>
                  <h3>Email : maksudulhaq22@gmail.com</h3>
                  <p className='my-5'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, suscipit!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi provident officiis fuga repellat quos.
                  </p>
                  <h3>Number of Classes : 140</h3>
                  <div className="card-actions justify-end">
                    <button className="w-full btn mt-10">See Classes</button>
                  </div>
                </div>
            </div>
                
            <div className="grid md:grid-cols-2 rounded-lg bg-base-300 shadow-xl">
                <figure><img className='rounded-t-lg md:rounded-l-lg' src="https://img.freepik.com/free-photo/young-handsome-happy-smiling-man-dancing-listening-music-headphones-isolated-white-studio-wall_285396-9780.jpg?w=360&t=st=1686751167~exp=1686751767~hmac=0c9a4a927198ca2d03deb2f2b9d21faeb5706370859213dcdbbc88afc3dabe2f" alt="Movie"/></figure>
                <div className="p-5">
                  <h2 className="text-2xl">Justin Emilo</h2>
                  <h3>Email : justin@gmail.com</h3>
                  <p className='my-5'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, suscipit!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi provident officiis fuga repellat quos.
                  </p>
                  <h3>Number of Classes : 310</h3>
                  <div className="card-actions justify-end">
                    <button className="w-full btn mt-10">See Classes</button>
                  </div>
                </div>
            </div>


                


            </div>
        </section>
    );
};

export default Instructors;