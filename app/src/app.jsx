import React from 'react';
import { hot } from 'react-hot-loader/root';

import './styles/global.scss';

const App = () => {
  return (
    <>
      <div>Hello World !</div>
      <div>Let's do a nice looking app :)</div>
    </>
  );
};

export default process.env.BUILD_FLAG_IS_DEV ? hot(App) : App;
