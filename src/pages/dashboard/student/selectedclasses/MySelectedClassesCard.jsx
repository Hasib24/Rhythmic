import React from 'react';

const MySelectedClassesCard = ({selectedClass}) => {
    const selectedPay = () =>{
        console.log(`pay btn clicked`);
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        {
          selectedClass.totalSeat == 0 ? <div className='bg-red-900 rounded-lg'>
            <figure><img src={selectedClass.photoUrl} alt="" /></figure>
          <div className="card-body">
          <h2 className="card-title">{selectedClass.className}</h2>
          <h2>{selectedClass.instractorName}</h2>
          <h2>{selectedClass.email}</h2>
          <h2>Available Seats : {selectedClass.totalSeat}</h2>
          <div className="card-actions justify-between">
              <h2 className='text-2xl font-bold'>{selectedClass.price}$</h2>
              <button className="btn btn-info btn-outline" disabled={selectedClass.totalSeat !== 0 }>Select Now</button>
          </div>
        </div>
          </div> : <div>
          <figure><img src={selectedClass.photoUrl} alt="" /></figure>
          <div className="card-body">
          <h2 className="card-title">{selectedClass.className}</h2>
          <h2>{selectedClass.instractorName}</h2>
          <h2>{selectedClass.email}</h2>
          <h2>Available Seats : {selectedClass.totalSeat}</h2>
          <div className="card-actions justify-between">
              <h2 className='text-2xl font-bold'>{selectedClass.price}$</h2>
              <button onClick={()=>selectedPay(selectedClass)} className="btn btn-info btn-outline" >Pay</button>
          </div>
          </div>
          </div>
        }
      
        
      </div>
    );
};

export default MySelectedClassesCard;