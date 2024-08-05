import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const Products = lazy(() => import("./pages/Products"));
const SingleProduct = lazy(() => import("./pages/SingleProduct"));
const ProductForm = lazy(() => import("./pages/ProductForm"));

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="products"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Products />
              </Suspense>
            }
          />
          <Route
            path="products/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SingleProduct />
              </Suspense>
            }
          />
          <Route
            path="products/:id/edit"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ProductForm />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
