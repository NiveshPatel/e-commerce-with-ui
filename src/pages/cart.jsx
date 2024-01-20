import React from 'react'
import "../App.css"
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'
import { Link } from 'react-router-dom'
const cart = () => {
    const dispatch = useDispatch()
    const items = useSelector((state)=>state.cart)
    const remover = (itemId)=>{
        dispatch(remove(itemId))

    }
  return (
    <div className='wrapper2'>
        <div>
          {
           items.length ? items.map((item,id)=>(
               <div className='cart' key={id}>
                 <img src={item.image} alt="" />
                <h5>{item.title}</h5>
                <h3>$ {item.price}</h3>
                <button onClick={()=>remover(item.id)}>Remove</button>
               </div>
            )):<div className='cartinfo'>
                <h1>Your cart is empty!</h1>
                <Link to="/"><button>Go to Home</button></Link>
            </div>
          }
        </div>
    </div>
  )
}

export default cart