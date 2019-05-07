import React from 'react';
import { colors } from '@bayon/commons';
import { withStyles } from '@material-ui/core/styles';
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
    '&::-webkit-scrollbar': { width: 4, background: colors.neutralLight },
    '&::-webkit-scrollbar-track': { background: colors.neutralLight },
    '&::-webkit-scrollbar-thumb': {
      background: colors.defaultDark,
      borderRadius: 5,
      overflow: 'hidden',
      '&:hover': { background: colors.neutralTertiary }
    }
  }
};

export default withStyles(styles)(ScrollShadowComponent);
