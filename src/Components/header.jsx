import {NavLink } from "react-router-dom";
import { useContext } from "react";

import {CartContext} from '../Contexts/CartContext'
import { WishListContext } from "../Contexts/WishListContext";

export function Header(){
    const {cart} = useContext(CartContext)
    const {wishListCart} = useContext(WishListContext)
    return(
        <div>
        <h1>Product Listing </h1>
        <nav>
            <NavLink to={'/product'}>
            Product List
            </NavLink>||
            <NavLink to={'/cart'}>Cart <span style={{fontWeight : 100, fontSize : '19px',color : 'white'}}>{cart.length}</span> </NavLink>|| 
            <NavLink to={'/wishlist'}>Wish List <span style={{fontWeight : 200, color : 'white'}}> {wishListCart.length}</span></NavLink>
        </nav>
        </div>
    )
}