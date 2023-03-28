import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div class="layout-container">
        <Header />
        <div id='layout-content'>
          <Outlet />
        </div>
        <Footer />
      </div>

    </>
  )
};

export default Layout;