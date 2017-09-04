import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style.css';

/**
 * Normaly I would write props into one styled component
 * but adding props to external component like ReactCSSTransitionGroup
 * getting errors of 'unknown props to <span>' or other tag.
 * Also adding css styles from external sheet, because
 * transitions through styled components do not want to work properly, probobly because
 * styled components styles overides transitions styles
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
