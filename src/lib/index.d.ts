import * as React from 'react';

export interface ReactShadowScrollComponentProps {
  scrollColor?: string;
  scrollColorHover?: string;
  scrollWidth?: number;
  isShadow?: boolean;
  shadow?: string;
  styleSubcontainer?: object;
  children?: React.ReactNode;
}

export default class ReactShadowScrollComponent extends React.Component<
  ReactShadowScrollComponentProps
> {}
