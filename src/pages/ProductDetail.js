import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  const productId = params.productId;

  return (
    <>
      <h1>Product Details!</h1>
      <p>{productId}</p>
    </>
  );
}

export default ProductDetailPage;
