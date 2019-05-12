import React from 'react';
import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';
import withStyles from 'react-jss';

export class ShadowScrollComponent extends React.Component {
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
      <div
        className={`${classes.container} ${
          this.state.scroll ? classes.containerScroll : ''
        }`}
      >
        <div ref={this.ref} className={classes.subcontainer}>
          {this.props.children}
          <ReactResizeDetector handleHeight onResize={this.resizeTags} />
        </div>
      </div>
    );
  }
}

ShadowScrollComponent.propTypes = {
  scrollColor: PropTypes.string,
  scrollColorHover: PropTypes.string,
  scrollWidth: PropTypes.number,
  isShadow: PropTypes.bool,
  shadow: PropTypes.string
};

ShadowScrollComponent.defaultProps = {
  scrollColor: '#c5c5c5',
  scrollColorHover: '#a6a6a6',
  scrollWidth: 8,
  scrollPadding: 0,
  isShadow: true,
  shadow:
    '0 2px 4px rgba(0, 0, 0, 0.2) inset, 0 -2px 4px rgba(0, 0, 0, 0.2) inset'
};

const styles = {
  containerScroll: {
    padding: props => props.scrollPadding,
    paddingRight: 0,
    boxShadow: props => (props.isShadow ? props.shadow : 'none')
  },
  container: {
    width: '100%',
    overflowY: 'hidden',
    boxSizing: 'border-box',
    display: 'flex'
  },
  subcontainer: {
    overflowY: 'auto',
    flex: '1',
    scrollbarColor: props => props.scrollColor,
    scrollbarWidth: props => props.scrollWidth,
    '&::-webkit-scrollbar': {
      width: props => props.scrollWidth,
      background: 'transparent'
    },
    '&::-webkit-scrollbar-track': { background: 'transparent' },
    '&::-webkit-scrollbar-thumb': {
      background: props => props.scrollColor,
      borderRadius: 5,
      overflow: 'hidden',
      '&:hover': { background: props => props.scrollColorHover }
    }
  }
};

export default withStyles(styles)(ShadowScrollComponent);
