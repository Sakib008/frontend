import { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext'

export function Cart(){
    const {cart,removeFromCart} = useContext(CartContext)
    
    return(
       <div>
        <h1>Cart Page </h1>
        {cart.map((product)=>{
            const {id,name,price} = product;
            return(
                <li key={id}>
                    <h1>Name : {name}</h1>
                    <p>Price : {price}</p>
                    <button onClick={()=>removeFromCart(product)}>Remove from Cart</button>
                </li>
            )
        })}
       </div>
        
    )
}