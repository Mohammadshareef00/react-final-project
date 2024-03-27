import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SubProduct() {

  const {id}=  useParams('id');
  const [products,setproducts] =useState ([]);
  const getProduct =async ()=>{
    const {data} = await axios.get (`https://ecommerce-node4.vercel.app/products/category/${id} `);
    
    setproducts(data.products);
   };

useEffect(
    ()=>{
        getProduct();
    },[]
);
  return (
    <div> 
     {
         products.map(Product =>
            <div>
                <h2>{Product.name}</h2>
                <img src={Product.mainImage.secure_url}></img>
            </div>
            )
 
     }

    </div>
  )
}
