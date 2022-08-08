import React from "react";
import Navibar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navibar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
