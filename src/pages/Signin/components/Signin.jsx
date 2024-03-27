import axios from 'axios';
import React, { useState } from 'react'
import style from './Signin.module.css';
import { date, object, string} from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



export default function Signin() {

  const Navigate = useNavigate();

  const [user ,setuser ] = useState(
    {
       email :'',
      password :'',
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
      password :string().min(7).max(20).required() ,
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
      
      
    const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/auth/signin`,
     {
        email:user.email,
        password:user.password
    }
    );
          localStorage.setItem('userToken',data.token);
          
     if (data.message =='success'){
      toast(' your account has been creater successfoly ')
      
      Navigate('/');
     
    }
     setLoader(false); 
    }; 

     
     
  return (
    <>
    <h2 className={style.countaier} >signin</h2>

    {
      errors.length > 0 ? errors.map ( error=>
        <p  className={style.error}>{error}</p>
      ) : ''
    }


    
    <form onSubmit={handelsubmit}>
       
<div>

      <label>email</label>
      <input type='email' value={user.email} name='email' onChange={handelchange}/> 
</div>  
    <div>

      <label>password</label>
      <input type='password' value={user.password} name='password' onChange={handelchange}/> 
</div>      
  
      <button type='submit '>{!loader?'signin':'wait...'}</button>

    </form>

     
    </>
  )
}
