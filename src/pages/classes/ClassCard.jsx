import React from 'react';

const ClassCard = () => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src="https://img.freepik.com/free-photo/latin-girl-with-headphones-listening-her-online-music-lessons-artistic-kid-playing-acoustic-guitar-learning-chords_662251-1427.jpg?w=740&t=st=1686230795~exp=1686231395~hmac=8670cce302d5b337ae70e218ba91675a205b4069035bf75b184bbb6410adc6eb" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Class Name</h2>
            <h2>Instructor</h2>
            <h2>Available seats</h2>
            <div className="card-actions justify-between">
                <h2 className='text-2xl font-bold'>Price</h2>
                <button className="btn btn-primary">Enroll Now</button>
            </div>
          </div>
        </div>
    );
};

export default ClassCard;