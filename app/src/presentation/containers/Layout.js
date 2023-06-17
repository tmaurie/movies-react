import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const Header = () => {
  return (
    <div className="header">
      <h1><Link className="link" to="/">mouvizz</Link></h1>
      <h1><Link className="link" to="/search">search</Link></h1>
    </div>
  );
};
export default Layout;
