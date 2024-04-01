import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink} from "react-router-dom";
import style from './Product.module.css';


export default function product() {
    const [products, setproducts] =useState([]);
  const getproducts = async ()=>{
    const {data} =await axios.get(`https://ecommerce-node4-five.vercel.app/products?page=1&limit=10`);
    setproducts(data.products);
  }

  useEffect( ()=>{
    getproducts();
 },[]


 )

  return (
    <>
     
  
     <div className={style.countaier} >  
 <div className={style.father} >
    { products.map(product =>
   
     
       <div className={style.category} key={product._id}>
            <h2 className={style.product} >{product.name}</h2>
            <img className={style.product} src={product.mainImage.secure_url } height={250} width={250}/>
            <br></br>
            <span className={style.product} > {"price"} {product.price}{" nis"}  </span>
            <br></br>
            <span>  <button >at to card</button> </span>
           
        
  </div> 
    
        )}
 
      </div>
      </div> 
 
     
    </>
  )
}