import styled from 'styled-components';

const Container = styled.div.attrs(({ scroll }) =>
  scroll
    ? {
        boxShadow:
          '0 2px 4px rgba(0, 0, 0, 0.08) inset, 0 -2px 4px rgba(0, 0, 0, 0.08) inset',
        padding: '4px',
        paddingLeft: '0px'
      }
    : {
        boxShadow: 'none',
        padding: '0px',
        paddingLeft: '0px'
      }
)`
  padding: ${props => props.padding};
  padding-left: ${props => props.paddingLeft};
  overflow-y: hidden;
  box-shadow: ${props => props.boxShadow};
`;

export default Container;
