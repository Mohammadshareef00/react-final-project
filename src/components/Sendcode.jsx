/*import React from 'react'

export default function Sendcode() {
  return (
    <div>GGGGG</div>
  )
}*/

import axios from 'axios';
import React, { useState } from 'react'
//import style from './Sendcode.module.css';
//import style from ' ./sendcode.module.css'
import { date, object, string} from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'



export default function Sendcode() {

  const Navigate = useNavigate();

  const [user ,setuser ] = useState(
    {
       email :'',
      
     });

    const [errors,setErrors]=useState([]);

   const [loader,setLoader] = useState(false);

    const handelchange = (e)=> {
      const {name,value} = e.target;
      setuser(
        {
          ...user,
          [name]:value
        });
    };

    

    const validateData = async()=>{

     const signinSchema = object(
        {
       email :string().min(5). email() ,
      
         }
      );

    try{
      await signinSchema.validate(user,{abortEarly:false});
      return true ;
    }catch(error){
       
      setErrors(error.errors);
      setLoader(false);
      return false;
    }


    };




    const handelsubmit =async(e)=> {
      e.preventDefault();
      setLoader(true);
      const validate =await validateData();
      
      
    const {data}=await axios.patch(`${import.meta.env.VITE_API_URL}/auth/sendcode`,
     {
        email:user.email,
        
    }
    );
          localStorage.setItem('userToken',data.token);
          
     if (data.message =='success'){
      toast(' your are send code successfoly ')
      
      Navigate('/Forget');
     
    }
     setLoader(false); 
    }; 

     
     
  return (
    <>
    <h2   >Sendcode</h2>

    {
      errors.length > 0 ? errors.map ( error=>
        <p  >{error}</p>
      ) : ''
    }


    
    <form onSubmit={handelsubmit}>
       
<div>

      <label>email</label>
      <input type='email' value={user.email} name='email' onChange={handelchange}/> 
</div>  
      
  
      <button type='submit '>{!loader?'Sendcode':'wait...'}</button>
      <br></br>

      


    </form>

     
    </>
  )
}


