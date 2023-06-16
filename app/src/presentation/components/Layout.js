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
    <>
      <h1>Header</h1>
    </>
  );
};
export default Layout;
