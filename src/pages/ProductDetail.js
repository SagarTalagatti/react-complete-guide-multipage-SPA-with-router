import { useParams, Link } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  const productId = params.productId;

  return (
    <>
      <h1>Product Details!</h1>
      <p>{productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
      {/* the relative prop of Link component is used to specify if it is relative to the route defined in configureBrowserRouter(with value of route), or relative to the currently active path(with value of path) */}
    </>
  );
}

export default ProductDetailPage;
