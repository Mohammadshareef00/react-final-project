/*import React from 'react'

export default function Forget() {
  return (
    <div>Forget</div>
  )
}*/

import axios from 'axios';
import React, { useState } from 'react'
//import style from './Sendcode.module.css';
//import style from ' ./sendcode.module.css'
import { date, object, string } from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'



export default function Forget() {

    const Navigate = useNavigate();

    const [user, setuser] = useState(
        {
            email: '',
            password: '',
            code: '',
        });

    const [errors, setErrors] = useState([]);

    const [loader, setLoader] = useState(false);

    const handelchange = (e) => {
        const { name, value } = e.target;
        setuser(
            {
                ...user,
                [name]: value
            });
    };



    const validateData = async () => {

        const signinSchema = object(
            {
                email: string().min(5).email(),
                password: string().min(7).max(20).required(),
                code: require(),

            }
        );

        try {
            await signinSchema.validate(user, { abortEarly: false });
            return true;
        } catch (error) {

            setErrors(error.errors);
            setLoader(false);
            return false;
        }


    };




    const handelsubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        const validate = await validateData();


        const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/auth/forgotPassword`,
            {
                email: user.email,
                password: user.password,
                code: user.code,

            }
        );
         
        setLoader(false);
    };



    return (
        <>
            <h2   >forgot password
            </h2>

            {
                errors.length > 0 ? errors.map(error =>
                    <p  >{error}</p>
                ) : ''
            }



            <form onSubmit={handelsubmit}>

                <div>

                    <label>email</label>
                    <input type='email' value={user.email} name='email' onChange={handelchange} />
                </div>
                <div>

                    <label>password</label>
                    <input type='password' value={user.password} name='password' onChange={handelchange} />
                </div>

                <div>

                    <label>code</label>
                    <input type='code' value={user.code} name='code' onChange={handelchange} />
                </div>


                <button type='submit '>{!loader ? 'new passowrd' : 'wait...'}</button>
                <br></br>




            </form>


        </>
    )
}
