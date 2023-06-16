import React from 'react';

import './styles/global.scss';
import PopularMoviesContainers from 'App/src/presentation/containers/PopularMoviesContainers';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import MovieDetails from 'App/src/presentation/components/MovieDetail';
import Layout from 'App/src/presentation/components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/m/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const Home = () => {
  return <PopularMoviesContainers />;
};

export default App;
