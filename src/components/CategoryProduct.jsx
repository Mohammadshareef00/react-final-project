import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './CategoryProduct.module.css'

 

export default function CategoryProduct() {

  const {id}=  useParams('id');
  const [products,setproducts] =useState ([]);
  const getProduct =async ()=>{
    const {data} = await axios.get (`https://ecommerce-node4-five.vercel.app/products/category/${id} `);
    
    setproducts(data.products);
   };

useEffect(
    ()=>{
        getProduct();
    },[]
);
  return (
    <div className={style.countaier}> 
    <div className={style.father}>
     {
         products.map(Product =>
            <div>
                <h2>{Product.name}</h2>
                <img  className={style.product} src={Product.mainImage.secure_url} height={250} width={250} ></img>
            </div>
            )
 
     }
     </div>

    </div>
  )
}
