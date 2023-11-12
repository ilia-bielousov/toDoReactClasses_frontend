import { Outlet } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";

const Layout = () => {
  return (
    <>
      <AppHeader />

      <Outlet />
    </>
  )
}

export default Layout;