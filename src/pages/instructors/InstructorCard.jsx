import React from 'react';

const InstructorCard = () => {
    return (
        <>
            <div className="grid md:grid-cols-2 rounded-lg bg-base-300 shadow-xl">
                <figure><img className='rounded-t-lg md:rounded-l-lg' src="https://images.pexels.com/photos/6326377/pexels-photo-6326377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Movie"/></figure>
                <div className="p-5">
                  <h2 className="text-2xl">Instructor Name</h2>
                  <h3>Email : instractor@gmail.com</h3>
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
        </>
    );
};

export default InstructorCard;