import React from 'react'
import cart from '../../img/EmptyCart.png'
const CartEmpty = () => {
  return (
    <div className='main-container-empty'>
        <div className='imageEmpty'>
        <img src={cart} alt="" />
        </div>
        <div className='information'>
        <h1>Your Cart is empty</h1>
        <p>Add something to make me happy</p>
        </div>
    </div>
  )
}

export default CartEmpty