import React, { useState } from 'react'
import { useStateValue } from './context/Context'
// import data from './data'
import './product.css'

const Product = ({image,title,price,name}) => {
 

const [{basket},dispatch]=useStateValue()
const addtocard=()=>{
    // console.log("this is basket",basket)
    // console.log("clicked")
    dispatch({
        type:"ADD_TO_CARD",
        // item:{
            title:title,
            image:image,
            price:price,
            name:name,
        // },
    })
    }
     


  return (
    <div className='product'>
        {/* {
            data.map((value)=>{
                return( */}
                    <>
                        <img className="product__image" src={image} alt="imag"/>
                    <h1 className='product__name'>{name}</h1>
                    <h1 className='product__title'>{title}</h1>
                    <p className='product__price'>{price}</p>
                   
                   <div className="productbtn">


                    <button className='button' onClick={addtocard}>Add to card</button>
                    
                   </div>
                    </>
                {/* )
            })
        } */}
        

        
      
    </div>
  )
}

export default Product
