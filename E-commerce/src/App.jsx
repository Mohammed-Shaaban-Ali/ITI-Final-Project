import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import SingleProduct from "./pages/SingleProduct";
import ProductForm from "./pages/ProductForm";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="products"
            element={<Products />}
            // loader={({ request }) =>
            //   fetch("/api/dashboard.json", {
            //     signal: request.signal,
            //   })
            // }
          />

          <Route
            path="products/:id"
            element={<SingleProduct />}
            // loader={({ request }) =>
            //   fetch("/api/dashboard.json", {
            //     signal: request.signal,
            //   })
            // }
          />
          <Route
            path="products/:id/edit"
            element={<ProductForm />}
            // loader={({ request }) =>
            //   fetch("/api/dashboard.json", {
            //     signal: request.signal,
            //   })
            // }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
