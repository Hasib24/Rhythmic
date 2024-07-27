import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import { AuthContex } from '../../../providers/AuthProvider';

const ManageClassesRow = ({aClass, index, refetch}) => {
    const {user} = useContext(AuthContex)

    // const [approveDenyHide, setApproveDenyHide] = useState(false)
    const [feedbackDisable, setFeedbackDisable] = useState(false)
    

    // console.log(aClass._id);
    const feedbackRef = useRef()

    const handleFeedbackSend =(e, aClass)=>{
      e.preventDefault()
      
      const feedbackData = {
        id : aClass._id,
        feedback : feedbackRef.current.value
      }
      
      
      axios.patch('/admin/feedback-update', feedbackData)
      .then(response =>{
        if(response){
          setFeedbackDisable(true)
          feedbackRef.current.value = ''
          refetch()
          
        }


      })
      .then(error => console.log(error))
    }

    const handleApproveDenyBtn =(status)=>{

      const statusData ={
        id : aClass._id,
        approveStatus : status
      }
      console.log(statusData);

      swal({
        title: "Are you sure?",
        text: `Once ${status}, you will not be able to change this class!`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((ok) => {
        if (ok) {
          axios.patch(`/admin/status-update?`, statusData)
          .then(response =>{ 
            if(response.data.modifiedCount){
            swal(`Poof! You ${status} the class!`, {
              icon: "success",
            });

            refetch()
           
          }})

          .catch(error => console.log(error))
        } 
    
        
      });


      
      
    }

   




    return (
        <div className="card grid md:grid-cols-2 border my-5 p-4 bg-base-100 shadow-xl">
            
            
            <img className='rounded-lg' src={aClass.photoUrl} alt="" />
            

            <div className="card-body">
                <h2>Current status : <button className='btn btn-xs btn-outline'>{aClass.approveStatus}</button> { aClass.feedback && <button className='btn btn-xs btn-outline btn-info'>already feedbacked</button> } </h2>
                <h2>Class name : {aClass.className}</h2>
                <h2>Instractor email : {aClass.instractorEmail}</h2>
                <h2>Price : {aClass.price}$</h2>
                <h2>Total Seat : {aClass.totalSeat}</h2>

              <div>

                {/* Buttons: Approve, Send Feedback, Deny  */}
                {
                  aClass.approveStatus==='Panding' && <button className='btn btn-accent btn-outline mx-2' onClick={()=>handleApproveDenyBtn('Approved')}>Approve</button>
                }
                
                { 
                  !aClass.feedback && <button className="btn btn-info btn-outline disabled:btn-ghost mx-2" disabled={feedbackDisable}  onClick={()=>window[aClass._id].showModal()}>send feedback</button>
                }

                {
                  aClass.approveStatus==='Panding' && <button className='btn btn-error btn-outline mx-2' onClick={()=>handleApproveDenyBtn('Denyed')}>Deny</button>
                }



                <dialog id={aClass._id} className="modal modal-bottom sm:modal-middle">

                  <form method="dialog" className="modal-box">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Feedback</h3>
                    <textarea className="p-2 my-4 outline-none border rounded-md w-full" ref={feedbackRef} name="" id="" ></textarea>
                    <div className="modal-action">
                      {/* if there is a button in form, it will close the modal */}
                    {
                      !feedbackDisable && <button onClick={(e)=>handleFeedbackSend(e, aClass)} className='btn btn-info btn-outline'>Send</button>

                    }
                      <button className="btn btn-outline">Close</button>
                    </div>
                    
                  </form>


                </dialog>
              </div>
            </div>


        </div>
    );
};

export default ManageClassesRow;