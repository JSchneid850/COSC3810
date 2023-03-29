import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Header className="w-100"/>
        <div className='d-flex flex-column flex-grow-1'>
          <Outlet />
        </div>
        <Footer className="bg-light text-center py-3 fixed w-100" style={{ position: "", bottom: 0, left: 0, right: 0 }}/>
      </div>

    </>
  )
};

export default Layout;