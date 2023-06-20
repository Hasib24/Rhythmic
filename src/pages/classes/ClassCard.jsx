import React, { useContext } from 'react';
import { AuthContex } from '../../providers/AuthProvider';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';

const ClassCard = ({aClass}) => {
  const navigate = useNavigate()

  const {user, role} = useContext(AuthContex)

  const { isLoading, isError, refetch, data : selectedClasses = [], error } = useQuery({
    queryKey : ['user'],
    queryFn : async () =>{
        const response = await axios.get(`/user?email=${user?.email}`)
        return response.data.selectedSlass
    }
  })



  const handleSelect = (aClass) =>{

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

      const isSelected = selectedClasses.find(selectedClass =>selectedClass._id===aClass._id)
      if(isSelected){
        swal({
          title: "Already selected!",
          text: "This class is already selectd, want to see list ?",
          icon: "warning",
          buttons: ["Cancle", "See list"]
          
          
        })

      }else{
        
        selectedClasses.push(aClass)
        axios.patch(`/user?email=${user.email}`, selectedClasses)
        .then(response => console.log(response))
        .catch(error =>console.log(error))
        

      }

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