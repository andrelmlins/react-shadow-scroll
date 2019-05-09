import styled from 'styled-components';

const SubContainer = styled.div.attrs(({ scrollColor, scrollColorHover }) => ({
  scrollColor,
  scrollColorHover
}))`
  overflow-y: auto;
  height: 100%;
  &::-webkit-scrollbar {
    width: 4;
    background: transparent;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.scrollColor};
    border-radius: 5;
    overflow: hidden,
    &:hover {
      background: ${props => props.scrollColorHover};
    }
  }
`;

export default SubContainer;
