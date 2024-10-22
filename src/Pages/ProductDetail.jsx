import { useParams } from "react-router-dom";
import { ProductCart } from "../Components/ProductCart";
import { useContext, useEffect } from "react";
import { ProductContext } from "../Contexts/ProductContext";

export function ProductDetail() {
  const { productID } = useParams();
  const { singleProduct, handleFetchProduct, product, isLoading } =
    useContext(ProductContext);
  let Product;
  useEffect(() => {
    if (product.length === 0 || singleProduct.length === 0) {
      handleFetchProduct();
    }
  }, []);

  if (singleProduct.length > 0) {
    Product = singleProduct.find(({ id }) => parseInt(productID) === id);
  } else {
    Product = product.find(({ id }) => parseInt(productID) === id);
  }
  console.log(typeof productID);
  // const showLoad = {isLoading ? `Wait A Second` : `Product not Found`}
  const showLoad = isLoading ? "wait a Second " : "Product not Found";
  return (
    <div>
      <h1>using use Param {productID}</h1>

      {isLoading && <h2>Loading...</h2>}
      {Product ? (
        <ProductCart key={Product.id} {...Product} noDetail={false} />
      ) : (
        <p>{showLoad}</p>
      )}
    </div>
  );
}
