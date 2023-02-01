import React, { useState } from 'react'

const CheckoutProduct = ({image,title,price,name}) => {
    const[count,setcount]=useState(1)
    const increment=()=>{
        setcount(count+1)
    }
    
    
    const decrement=()=>{
        setcount(count-1)
    
    }
    
  return (
    <>
    <div className='checkoutproduct'>
      <img src={image} alt="i"/>
      <h1>{title}</h1>
      <p>{price}</p>
      <h1>{name}</h1>
    </div>
    <button onClick={increment}>+</button>
                            {count}
                    <button onClick={decrement}>-</button>
<div className="remove">
    <button>remove</button>
</div>

    </>
    
  )
}

export default CheckoutProduct
