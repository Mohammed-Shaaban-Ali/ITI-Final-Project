import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Subscription from "./components/Home/Subscription/Subscription";
import Form from "./pages/Form";
export default function Layout() {
  // localStorage
  let name = localStorage.getItem("name");

  return (
    <>
      {name ? (
        <>
          <Navbar />
          <Outlet />
          <Subscription />
          <Footer />
        </>
      ) : (
        <>
          <Form />
        </>
      )}
    </>
  );
}
