import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Contexts/ProductContext";
import {addToCart} from '../Contexts/CartContext'

export function ProductCart(product) {
  const { id, name, description, price, quantity, brand, noDetail } = product;
  const { handleSingleProduct } = useContext(ProductContext);
  return (
    <li key={id}>
      <h2>Name : {name}</h2>
      <p>{description}</p>
      <h2>${price}</h2>
      {noDetail && (
        <Link
          onClick={() => handleSingleProduct(product)}
          to={`/product/${id}`}
        >
          Visit Item
        </Link>
      )}
      {!noDetail && (
        <div>
          <p>Quantity : {quantity}</p>
          <p>Brand : {brand}</p>
          <button onClick={()=>addToCart(product)}>Add To Cart</button>
        </div>
      )}
    </li>
  );
}
