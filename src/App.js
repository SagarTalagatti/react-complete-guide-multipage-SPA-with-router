import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />}></Route>
//     <Route path="/products" element={<ProductsPage />}></Route>
//   </Route>
// );

// if we use leading slash on paths, they become absolute paths. If we omit it, then they become relative to the current url. Same rule applies to the 'to' prop of Link and NavLink.
const router = createBrowserRouter([
  {
    path: "/root",
    // path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // index property is used to specify the default route that should be loaded if the parent route's path is active. In below example, it is the same as adding path with a value of ''(empty string).
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
