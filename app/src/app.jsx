import React from "react";

import "./styles/global.scss";
import PopularMoviesContainers from "App/src/presentation/containers/PopularMoviesContainers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetailsContainer from "App/src/presentation/containers/MovieDetailsContainer";
import Layout from "App/src/presentation/containers/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/m/:id" element={<MovieDetailsContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const Home = () => {
  return <PopularMoviesContainers />;
};

export default App;
