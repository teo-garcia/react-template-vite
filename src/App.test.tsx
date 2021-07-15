import * as React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

describe('<App /> tests', function () {
  it('test a fake statement', function () {
    render(<App />);
  });
});
