import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  // this is just for demonstration. We do not navigate using buttons as shown in this demo. Its just for demonstration on how we can navigate programmatically.
  function navigateHandler() {
    navigate("products");
  }

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="products">the list of products</Link>.
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
