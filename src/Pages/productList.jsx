import { useContext, useEffect } from "react";


import { ProductCart } from "../Components/ProductCart";
import { ProductContext } from "../Contexts/ProductContext";


export function ProductList() {
    
const {product,isLoading,handleFetchProduct} = useContext(ProductContext)

  useEffect(() => {
    if(product.length === 0){

      handleFetchProduct();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div>
      {isLoading && <h1>Loading.....</h1>}
      {product.map((product) => (
        <ProductCart key={product.id} {...product} noDetail />
      ))}
    </div>
  );
}
