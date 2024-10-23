import { createContext, useState } from "react";

export const WishListContext = createContext();

// eslint-disable-next-line react/prop-types
export function WishListProvider({ children }) {
  const [wishListCart,setWishListCart] = useState([]);

  const addToWishList = (item) => {
    setWishListCart((cart) => [...cart, item]);
  };

  const removeFromWishList = (item) => {
    const filterCart = wishListCart.filter(({ id }) => id !== item.id);
    setWishListCart(filterCart);
  };

  return (
    <WishListContext.Provider value={{ wishListCart, addToWishList, removeFromWishList }}>
      {children}
    </WishListContext.Provider>
  );
}

