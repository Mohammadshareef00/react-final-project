import axios from 'axios';
import React, { useState } from 'react'
import style from './signup.module.css';
import { date, object, string} from 'yup';
import { toast } from 'react-toastify';



export default function Signup() {

  const [user ,setuser ] = useState(
    {
      userName :'',
      email :'',
      password :'',
      image :'',
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

    const handelimagechange =(e)=>{
      const {name,files} = e.target;
      setuser(
        {
          ...user,
          [name]:files[0]
        });


    };

    const validateData = async()=>{

     const signupSchema = object(
        {
          userName :string().min(5).max(20).required() ,
      email :string().min(5). email() ,
      password :string().min(7).max(20).required() ,
      image :string().required() , 
        }
      );

    try{
      await signupSchema.validate(user,{abortEarly:false});
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
      
       const formData =new FormData();
      formData.append('userName',user.userName) ;
      formData.append('email',user.email) ;
      formData.append('password',user.password) ;
      formData.append('image',user.image) ;
  
    const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`,formData);
    
    if (data.message =='success'){
      toast(' your account has been creater successfoly ')
      
     
    }
     setLoader(false);
    }; 

     
     
  return (
    <>
    <h2 className={style.countaier} >signup</h2>

    {
      errors.length > 0 ? errors.map ( error=>
        <p  className={style.error}>{error}</p>
      ) : ''
    }


    
    <form onSubmit={handelsubmit}>
      <div>
      <label>user Name</label>
      <input type='text' value={user.userName} name='userName' onChange={handelchange}/> 
</div>
<div>

      <label>email</label>
      <input type='email' value={user.email} name='email' onChange={handelchange}/> 
</div>  
    <div>

      <label>password</label>
      <input type='password' value={user.password} name='password' onChange={handelchange}/> 
</div>      
 <div>

      <label>image</label>
      <input type='file'  name='image' onChange={handelimagechange}/> 
</div> 
      <button type='submit '>{!loader?'register':'wait...'}</button>

    </form>

     
    </>
  )
}
