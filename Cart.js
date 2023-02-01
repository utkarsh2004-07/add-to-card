import React from 'react'
import CheckoutProduct from '../CheckoutProduct'
import { useStateValue } from './context/Context'

const Cart = () => {
  const [{basket},dispatch]=useStateValue()
  return (
    <>
    {
      basket.map((item)=>{
        return (
          <CheckoutProduct
          
          title={item.title}
          image={item.image}
          price={item.price}
          name={item.name}/>
        )
      })

    }
    </>
  )
}

export default Cart
