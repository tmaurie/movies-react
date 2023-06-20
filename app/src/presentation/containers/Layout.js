import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import dictionary from "App/src/languages/dictionary";
import { LanguageContext } from "App/src/presentation/context/LanguageContext";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const Header = () => {

  const { language, toggleLanguage } = useContext(LanguageContext);
  const translations = dictionary[language];
  return (
    <div className="header">
      <h1><Link className="link" to="/">.mouvizz</Link></h1>
      <h1><Link className="link" to="/search">.{translations.search}</Link></h1>
      <h1 className="link lang" onClick={toggleLanguage}>.{language}</h1>
    </div>
  );
};


export default Layout;
