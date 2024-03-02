import React from 'react'
import style from './Navbar.module.css'
import { Link} from "react-router-dom";
import { NavLink} from "react-router-dom";
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
           
           
          <NavLink to='/Categories'>Categories</NavLink>
           
           
          <NavLink to='/Product'>Products</NavLink>
           
           
          <NavLink to='/Cart'>Cart</NavLink>
           
           
        </div>
      </nav>
      <div className= {style.login}>
        <div className= {style.loginitem} >
          <button className= {style.log}>Sign in</button>
          <button href="#" className= {style.log} >Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</header>

  )
}
