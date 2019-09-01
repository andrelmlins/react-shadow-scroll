import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ReactShadowScroll from './index';

afterEach(cleanup);

describe('ReactShadowScroll Component', () => {
  it('Should render the component', () => {
    const { container } = createComponent();
    expect(container).toBeDefined();
  });
});

function createComponent(props = {}) {
  const defaultProps = {
    ...props
  };

  return render(<ReactShadowScroll {...defaultProps} />);
}
