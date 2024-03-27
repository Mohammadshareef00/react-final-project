import style from './Home.module.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink} from "react-router-dom";

export default function home() {
    const [categories, setcategories] =useState([]);
  const getcategories = async ()=>{
    const {data} =await axios.get(`https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10`);
    setcategories(data.categories);
  }

  useEffect( ()=>{
    getcategories();
 },[]


 )

  return (
    <>
     
  
     <div className={style.countaier} >  
 <div className={style.father} >
    { categories.map(categorie =>
   
     
       <div className={style.category} key={categorie._id}>
            
            <img src={categorie.image.secure_url }/>
           <NavLink to={`/categories/${categorie._id}`}>details</NavLink>
  </div> 
    
        )}
 
      </div>
      </div> 
 
     
    </>
  )
}

