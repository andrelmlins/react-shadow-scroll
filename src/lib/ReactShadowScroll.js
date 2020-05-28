import React, { useState, useRef, useLayoutEffect, memo } from 'react';
import Style from 'style-it';
import ResizeObserver from 'resize-observer-polyfill';
import PropTypes from 'prop-types';

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

  const styleCustom = `
    .container {
      width: 100%;
      overflow-y: hidden;
      box-sizing: border-box;
      display: flex;
      box-shadow: ${isShadow && scroll ? shadow : 'none'}
    }
    .subcontainer {
      padding-right: ${scrollPadding}px;
      overflow-y: auto;
      flex: 1;
      scrollbar-color: ${scrollColor + ' transparent'};
      scrollbar-width: thin;
    }
    .subcontainer::-webkit-scrollbar {
      width: ${scrollWidth}px;
      background: transparent;
    },
    .subcontainer::-webkit-scrollbar-track { background: transparent }
    .subcontainer::-webkit-scrollbar-thumb {
      background: ${scrollColor};
      border-radius: 5px;
      overflow: hidden;
    }
    .subcontainer::-webkit-scrollbar-thumb:hover { background: ${scrollColorHover} }
  `;

  return (
    <Style>
      {styleCustom}
      <div
        aria-label="container-scroll"
        style={style}
        className="container"
        {...props}
      >
        <div
          aria-label="subcontainer-scroll"
          ref={ref}
          className="subcontainer"
          style={styleSubcontainer}
        >
          {children}
        </div>
      </div>
    </Style>
  );
};

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
