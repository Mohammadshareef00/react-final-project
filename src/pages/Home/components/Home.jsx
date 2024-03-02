import style from './Home.module.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
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
     
 
    { categories.map(categorie =>
        <div className={style.category} key={categorie.id}>
            
            <img   className={style.category} src={categorie.image.secure_url}/>
        </div>
        
        )}
 
     
    </>
  )
}

