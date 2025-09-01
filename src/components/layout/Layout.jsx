import Footer from "./Footer";
import Header from "./Header";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="app-main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
