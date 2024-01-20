import React, { useEffect } from 'react'
import "../App.css"
import { useDispatch, useSelector } from 'react-redux'
import { STATUS, fetchproducts } from '../store/productSlice'
import { add } from '../store/cartSlice'
import Loader from './loader'
const product = () => {
    const dispatch = useDispatch() 
    const {data:products,status} = useSelector((state)=>state.product)
    useEffect(() => {
      dispatch(fetchproducts())
    }, [])
    const handler = (product)=>{
        dispatch(add(product))
    }
    if(status==STATUS.IDLE){
        return (
            <div className='wrapper'>
            {
                products.map((product,id)=>(
                    <div className="card" key={id}>
    
                        <img className='img' src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h3>$ {product.price}</h3>
              <button onClick={()=>handler(product)}>Add to cart</button>
                </div>
                ))
                
            }
        </div>
        )

    }
    if(status===STATUS.LOADING){
        return <Loader/>
    }
    if(status===STATUS.ERROR){
        return <Loader/>
    }

    
}

export default product