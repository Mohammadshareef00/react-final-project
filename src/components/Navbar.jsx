import React from 'react'
import style from './Navbar.module.css'
import { Link} from "react-router-dom";
import { NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
export default function navbar() {
  return (
   <header  className= {style.head} >
  <div className= {style.countaier} >
    <div className= {style.row}>
      <div className={style.name}>
        <h2>shareef store</h2>
      </div>
      <nav className= {style.navbar} >
        <div className= {style.navbaritem} >
             
                 
          <NavLink to='/' >Home</NavLink>
           
           
           
           
           
          <NavLink to='/Product'>Products</NavLink>
           
           
          <NavLink to='/Cart'>Cart</NavLink>

      
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="17" viewBox="0 0 26 17" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 1.0625C0.25 0.475697 0.725697 0 1.3125 0H24.6875C25.2743 0 25.75 0.475697 25.75 1.0625C25.75 1.6493 25.2743 2.125 24.6875 2.125H1.3125C0.725697 2.125 0.25 1.6493 0.25 1.0625ZM0.25 8.5C0.25 7.9132 0.725697 7.4375 1.3125 7.4375H24.6875C25.2743 7.4375 25.75 7.9132 25.75 8.5C25.75 9.0868 25.2743 9.5625 24.6875 9.5625H1.3125C0.725697 9.5625 0.25 9.0868 0.25 8.5ZM11.9375 15.9375C11.9375 15.3507 12.4132 14.875 13 14.875H24.6875C25.2743 14.875 25.75 15.3507 25.75 15.9375C25.75 16.5243 25.2743 17 24.6875 17H13C12.4132 17 11.9375 16.5243 11.9375 15.9375Z" fill="#262626"/>
            </svg>
      </nav>
      <div className= {style.login}>
        <div className= {style.loginitem} >
          
          <NavLink to='/Signin' className={style.log}>Sign in</NavLink>
          <NavLink to='/SignUp' className= {style.log} >Sign Up</NavLink>
        </div>
      </div>
    </div>
  </div>
</header>

  )
}
