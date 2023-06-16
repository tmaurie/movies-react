import React from 'react';
import { Outlet } from 'react-router-dom';

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
      <h1>mouvizz</h1>
    </div>
  );
};
export default Layout;
