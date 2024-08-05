import { Outlet } from "react-router-dom";

import UserLoginForm from "./components/Form/UserLoginForm";
import NewsletterSubscription from "./components/Home/NewsletterSubscription/NewsletterSubscription";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import MainFooter from "./components/MainFooter/MainFooter";
export default function Layout() {
  // localStorage
  let name = localStorage.getItem("name");

  return (
    <>
      {name ? (
        <>
          <MainNavbar />
          <Outlet />
          <NewsletterSubscription />
          <MainFooter />
        </>
      ) : (
        <>
          <UserLoginForm />
        </>
      )}
    </>
  );
}
