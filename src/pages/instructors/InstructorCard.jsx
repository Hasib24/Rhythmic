import React from 'react';

const InstructorCard = ({ instructor }) => {

  let { instructorName, instructorEmail, image, description, numberOfClasses, slug } = instructor;
  return (
    <>
      <div className="grid md:grid-cols-2 rounded-lg backdrop-blur-3xl border border-slate-600">
        <figure className=''>
          <img className='rounded-t-xl border md:rounded-r-none md:rounded-bl-lg h-full w-full object-cover' src={image} alt={`Image of ${instructorName}`} />
        </figure>
        <div className="p-6 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl tracking-wider">{instructorName}</h2>
          <h3>Email : {instructorEmail}</h3>
          <p className='my-5 text-justify'>{description}</p>
          <h3>Number of Classes : {numberOfClasses}</h3>
          <div className="card-actions justify-end">
            <button className="w-full btn mt-10 border border-slate-600 bg-transparent backdrop-blur-2xl">See Classes</button>
          </div>
        </div>

      </div>
    </>
  );
};

export default InstructorCard;