import { useContext } from "react";
import {WishListContext} from '../Contexts/WishListContext'

export function WishList(){
    const {wishListCart, removeFromWishList} = useContext(WishListContext)
    return(
        <div>
         <h1>WishList Page </h1>
         {wishListCart.map((product)=>{
             const {id,name,price} = product;
             return(
                 <li key={id}>
                     <h1>Name : {name}</h1>
                     <p>Price : {price}</p>
                     <button onClick={()=>removeFromWishList(product)}>Remove </button>
                 </li>
             )
         })}
        </div>
         
     )
}