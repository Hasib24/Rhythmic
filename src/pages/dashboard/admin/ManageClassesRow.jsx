import React from 'react';

const ManageClassesRow = ({aClass, index}) => {

//     _id: "6486059bf6beecaa33649a90"
// ​
// approveStatus: "panding"
// ​
//
// ​
//
// ​
// enrolls: 0
// ​
// feedback: ""
// ​
// 
// ​
// photoUrl: "https://i.ibb.co/pxwFBF8/Screenshot-2023-06-10-at-02-18-33-Hasibul-Islam-hasib088-Instagram.png"
// 

    // console.log(aClass);
    return (
        <div className="card card-side border my-5 bg-base-100 shadow-xl">
            
            
            <img className='rounded-l-lg w-[50%]' src='https://images.pexels.com/photos/164716/pexels-photo-164716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
            

            <div className="card-body">
                <h2>Current status : <button className='btn btn-xs btn-outline'>{aClass.approveStatus}</button></h2>
                <h2>Class name : {aClass.className}</h2>
                <h2>Instractor name : {aClass.instractorName}</h2>
                <h2>Instractor email : {aClass.email}</h2>
                <h2>Price : {aClass.price}$</h2>
                <h2>Total Seat : {aClass.totalSeat}</h2>

              <div>
                <button className='btn btn-accent btn-outline mx-2'>Approve</button>
                <button className='btn btn-info btn-outline mx-2'>Send feedback</button>
                <button className='btn btn-error btn-outline mx-2'>Deny</button>
              </div>
            </div>


        </div>
    );
};

export default ManageClassesRow;