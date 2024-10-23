/* eslint-disable react/prop-types */
import { ProductProvider } from "./ProductContext";
import { CartProvider } from "./CartContext";
import { WishListProvider } from "./WishListContext";

export function AppContextProvider({ children }) {
  return (
    <ProductProvider>
      <CartProvider>
        <WishListProvider>
            {children}
        </WishListProvider>
      </CartProvider>
    </ProductProvider>
  );
}
