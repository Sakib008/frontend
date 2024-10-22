import { createContext, useState } from "react";
import { ProductApi } from "../Api/ProductApi";

export const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export function ProductProvider({ children }) {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [singleProduct,setSingleProduct] = useState([])

  const handleSingleProduct =(item)=>{
    if(singleProduct.find(({id})=>id=== item.id)){
      setSingleProduct(singleProduct);
    }else{
      setSingleProduct((product)=>[...product,item])
    }
  }

  // Fetch Data from API
  const handleFetchProduct = async () => {
    setIsLoading(true);
    try {
      const response = await ProductApi("https://example.com/api/products");
      setProduct(response.data.products);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };
  return (
    <ProductContext.Provider value={{ product, isLoading, handleFetchProduct ,singleProduct,handleSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
