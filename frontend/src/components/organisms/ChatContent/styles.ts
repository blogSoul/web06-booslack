import { RoundScrollBar } from '@global/mixin';
import styled from 'styled-components';

interface Props {
  width?: string;
}

export const Container = styled.div<Props>`
  position: relative;
  height: inherit;
  min-height: 70vh;
  width: ${(props) => props.width ?? 'inherit'};
  background-color: grey;
  ${RoundScrollBar}
  overflow-y: scroll;
  overflow-x: hidden;
`;

export default Container;
