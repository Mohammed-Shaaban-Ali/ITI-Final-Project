import React, { lazy, Suspense, useEffect } from "react";

import LoadingPage from "./LoadingPage";

const ProductCompont = lazy(() =>
  import("../components/Products/SingleProduct/SingleProduct")
);

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <ProductCompont />
        {/* <LoadingPage />{" "} */}
      </Suspense>
    </>
  );
};

export default ProductDetail;
