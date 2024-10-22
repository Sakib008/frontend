import {NavLink } from "react-router-dom";

export function Header(){
    return(
        <div>
        <h1>Product Listing </h1>
        <nav>
            <NavLink to={'/product'}>
            Product List
            </NavLink>||
            <NavLink to={'/cart'}>Cart </NavLink>|| 
            <NavLink to={'/wishlist'}>Wish List </NavLink>
        </nav>
        </div>
    )
}