import React from 'react';
import withStyles from 'react-jss';
import ReactResizeDetector from 'react-resize-detector';

import Container from './components/Container';

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
    const { classes } = this.props;

    return (
      //<div className={this.state.scroll ? classes.container : ''}>
      <Container>
        <div ref={this.ref} className={classes.subcontainer}>
          {this.props.children}
          <ReactResizeDetector handleHeight onResize={this.resizeTags} />
        </div>
      </Container>
      //</div>
    );
  }
}

const styles = {
  container: {},
  subcontainer: {
    overflowY: 'auto',
    height: '100%',
    '&::-webkit-scrollbar': { width: 4, background: '#F4F4F4' },
    '&::-webkit-scrollbar-track': { background: '#F4F4F4' },
    '&::-webkit-scrollbar-thumb': {
      background: '#C5C5C5',
      borderRadius: 5,
      overflow: 'hidden',
      '&:hover': { background: '#A6A6A6' }
    }
  }
};

ScrollShadowComponent.propTypes = {};

export default withStyles(styles)(ScrollShadowComponent);
