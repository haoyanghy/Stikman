import React from "react";
import ProgressBar from "../components/ProgressBar";
import Navibar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <ProgressBar />
      <Navibar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
