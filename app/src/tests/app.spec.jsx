import React from 'react';
import { render } from '@testing-library/react';

import App from '../app';

describe('App', () => {
  it('should math the expected snapshot', () => {
    const app = render(<App />);
    expect(app.asFragment()).toMatchSnapshot();
  });
});
