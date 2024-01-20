import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const items = useSelector((state)=>state.cart)
  return (
    <div>

       <div className='Navbar'>
        <h1>Redux-store</h1>
       <div className='links'>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/cart">Cart: {items.length}</Link>
        </div>
       </div>
    </div>
  )
}

export default Navbar