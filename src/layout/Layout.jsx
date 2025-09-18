import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  const location = useLocation();

  const hideFooter = ["/login", "/signup"].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
