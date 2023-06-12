import axios from 'axios';
import React, { useRef, useState } from 'react';

const ManageClassesRow = ({aClass, index}) => {
    const [approveDisable, setApproveDisable] = useState(false)
    const [feedbackDisable, setFeedbackDisable] = useState(false)
    const [denyDisable, setDenyDisable] = useState(false)

    // console.log(aClass._id);
    const feedbackRef = useRef()

    const handleFeedbackSend =(e, aClass)=>{
      e.preventDefault()
      
      const feedbackData = {
        id : aClass._id,
        feedback : feedbackRef.current.value
      }
      
      
      axios.patch('/feedback', feedbackData)
      .then(response =>{
        if(response.data.modifiedCount){
          setFeedbackDisable(true)
        }

      })
      .then(error => console.log(error))
    }


    return (
        <div className="card grid md:grid-cols-2 border my-5 p-4 bg-base-100 shadow-xl">
            
            
            <img className='rounded-lg' src='https://images.pexels.com/photos/164716/pexels-photo-164716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
            

            <div className="card-body">
                <h2>Current status : <button className='btn btn-xs btn-outline'>{aClass.approveStatus}</button></h2>
                <h2>Class name : {aClass.className}</h2>
                <h2>Instractor name : {aClass.instractorName}</h2>
                <h2>Instractor email : {aClass.email}</h2>
                <h2>Price : {aClass.price}$</h2>
                <h2>Total Seat : {aClass.totalSeat}</h2>

              <div>
                <button className='btn btn-accent btn-outline mx-2'>Approve</button>
                {/* Open the modal using ID.showModal() method */}
                <button className="btn btn-info btn-outline disabled:btn-ghost mx-2" disabled={feedbackDisable}  onClick={()=>window[aClass._id].showModal()}>send feedback</button>
                
                <button className='btn btn-error btn-outline mx-2'>Deny</button>

                <dialog id={aClass._id} className="modal modal-bottom sm:modal-middle">

                  <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Feedback</h3>
                    <textarea className="p-2 my-4 outline-none border rounded-md w-full" ref={feedbackRef} name="" id="" ></textarea>
                    <div className="modal-action">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-outline">Cancle</button>
                    </div>
                    
                  <button onClick={(e)=>handleFeedbackSend(e, aClass)} className='btn btn-info btn-outline'>Send</button>
                  </form>


                </dialog>
              </div>
            </div>


        </div>
    );
};

export default ManageClassesRow;