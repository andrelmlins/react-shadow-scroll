import React from 'react';
import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';

import Container from './components/Container';
import SubContainer from './components/SubContainer';

export class ScrollShadowComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: false
    };

    this.ref = React.createRef();
  }

  resizeTags = () => {
    if (this.ref.current.clientHeight < this.ref.current.scrollHeight) {
      this.setState({ scroll: true });
    } else {
      this.setState({ scroll: false });
    }
  };

  render() {
    const { scrollColor, scrollColorHover } = this.props;

    return (
      <Container scroll={this.state.scroll}>
        <SubContainer
          ref={this.ref}
          scrollColor={scrollColor}
          scrollColorHover={scrollColorHover}
        >
          {this.props.children}
          <ReactResizeDetector handleHeight onResize={this.resizeTags} />
        </SubContainer>
      </Container>
    );
  }
}

ScrollShadowComponent.propTypes = {
  scrollColor: PropTypes.string,
  scrollColorHover: PropTypes.string
};

ScrollShadowComponent.defaultProps = {
  scrollColor: '#c5c5c5',
  scrollColorHover: '#a6a6a6'
};

export default ScrollShadowComponent;
