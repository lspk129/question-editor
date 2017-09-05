import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../style.css';

/**
 * Adding props to external component like ReactCSSTransitionGroup
 * throws not critical errors of 'unknown prop to...' html tag,
 * a workaround is to extend styles.
 * Transition styles do not respond written in styled-components.
 */
const Transition = styled(ReactCSSTransitionGroup).attrs({
  transitionName: 'example',
  transitionEnterTimeout: 500,
  transitionLeaveTimeout: 300,
})``;

export const TransitionAll = styled(Transition)`
  all: inherit;
`;

export const TransitionRow = styled(TransitionAll)`
  grid-row: 4;
`;

export const TransitionCol = styled(Transition)`
  grid-auto-flow: column;
  display: grid;
  grid-gap: 10px;
  justify-items: center;
`;
