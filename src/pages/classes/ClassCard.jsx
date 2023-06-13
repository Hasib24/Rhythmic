import React, { useContext } from 'react';
import { AuthContex } from '../../providers/AuthProvider';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const ClassCard = ({aClass}) => {
  const navigate = useNavigate()

  const {user, role} = useContext(AuthContex)

  const handleSelect = (aClass) =>{

    console.log(role);
   
    if(!user){
      
      swal({
        title: "You must login !",
        text: "Without login you can not select any class",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((ok) => {
        ok && navigate('/login')
      })
    }else{
      console.log(`Select button clicked`);
    }



  }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          {
            aClass.totalSeat == 0 ? <div className='bg-red-900 rounded-lg'>
              <figure><img src={aClass.photoUrl} alt="" /></figure>
            <div className="card-body">
            <h2 className="card-title">{aClass.className}</h2>
            <h2>{aClass.instractorName}</h2>
            <h2>{aClass.email}</h2>
            <h2>Available Seats : {aClass.totalSeat}</h2>
            <div className="card-actions justify-between">
                <h2 className='text-2xl font-bold'>{aClass.price}$</h2>
                <button className="btn btn-info btn-outline" disabled={aClass.totalSeat !== 0 }>Select Now</button>
            </div>
          </div>
            </div> : <div>
            <figure><img src={aClass.photoUrl} alt="" /></figure>
            <div className="card-body">
            <h2 className="card-title">{aClass.className}</h2>
            <h2>{aClass.instractorName}</h2>
            <h2>{aClass.email}</h2>
            <h2>Available Seats : {aClass.totalSeat}</h2>
            <div className="card-actions justify-between">
                <h2 className='text-2xl font-bold'>{aClass.price}$</h2>
                <button disabled={role && role!=='student'} onClick={()=>handleSelect(aClass)} className="btn btn-info btn-outline" >Select Now</button>
            </div>
            </div>
            </div>
          }
        
          
        </div>
    );
};

export default ClassCard;