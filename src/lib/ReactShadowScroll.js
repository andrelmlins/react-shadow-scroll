import React, { useState, useRef, useLayoutEffect, memo } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const ReactShadowScrollComponent = ({
  children,
  style,
  styleSubcontainer,
  scrollPadding,
  scrollColor,
  scrollWidth,
  isShadow,
  shadow,
  scrollColorHover,
  ...props
}) => {
  const classes = useStyles({
    scrollPadding,
    scrollColor,
    scrollWidth,
    isShadow,
    scrollColorHover,
    shadow
  });
  const ref = useRef();
  const [scroll, setScroll] = useState(false);

  useLayoutEffect(() => {
    let RO = new ResizeObserver(() => {
      if (ref.current.clientHeight < ref.current.scrollHeight) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
    RO.observe(ref.current);

    return () => {
      RO.disconnect();
    };
  }, [ref]);

  return (
    <div
      aria-label="container-scroll"
      style={style}
      className={`${classes.container} ${
        scroll ? classes.containerScroll : ''
      }`}
      {...props}
    >
      <div
        aria-label="subcontainer-scroll"
        ref={ref}
        className={classes.subcontainer}
        style={styleSubcontainer}
      >
        {children}
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  containerScroll: {
    boxShadow: props => (props.isShadow ? props.shadow : 'none')
  },
  container: {
    width: '100%',
    overflowY: 'hidden',
    boxSizing: 'border-box',
    display: 'flex'
  },
  subcontainer: {
    paddingRight: props => props.scrollPadding,
    overflowY: 'auto',
    flex: '1',
    scrollbarColor: props => props.scrollColor + ' transparent',
    scrollbarWidth: 'thin',
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
});

ReactShadowScrollComponent.propTypes = {
  /** Scroll color */
  scrollColor: PropTypes.string,
  /** Scroll color when hover */
  scrollColorHover: PropTypes.string,
  /** Scroll width */
  scrollWidth: PropTypes.number,
  /** Option to show the shadow */
  isShadow: PropTypes.bool,
  /** Shadow Style */
  shadow: PropTypes.string,
  /** Subcontainer Style */
  styleSubcontainer: PropTypes.object
};

ReactShadowScrollComponent.defaultProps = {
  scrollColor: '#c5c5c5',
  scrollColorHover: '#a6a6a6',
  scrollWidth: 8,
  scrollPadding: 0,
  isShadow: true,
  shadow:
    '0 2px 4px rgba(0, 0, 0, 0.2) inset, 0 -2px 4px rgba(0, 0, 0, 0.2) inset'
};

export default memo(ReactShadowScrollComponent);
