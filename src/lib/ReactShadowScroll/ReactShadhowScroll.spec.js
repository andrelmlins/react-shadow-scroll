import React from 'react';
import { render, fireEvent, cleanup, act } from '@testing-library/react';

import ReactShadowScroll from './index';

afterEach(cleanup);

describe('ReactShadowScroll Component', () => {
  it('Should render the component', () => {
    const { container } = createComponent();
    expect(container).toBeDefined();
  });

  it('Should resize component', () => {
    const { container, getByLabelText } = createComponent();

    act(() => {
      getByLabelText('subcontainer-scroll').innerWidth = 500;
      getByLabelText('subcontainer-scroll').innerHeight = 500;
    });

    fireEvent(getByLabelText('subcontainer-scroll'), new Event('resize'));

    expect(container).toBeDefined();
  });
});

function createComponent(props = {}) {
  const defaultProps = {
    ...props
  };

  return render(<ReactShadowScroll {...defaultProps} />);
}
