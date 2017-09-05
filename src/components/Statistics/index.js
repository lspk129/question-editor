import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getStatistics from '../../utils';

const Section = styled.div`
  padding: 0 20px 20px;
  ${({ stats }) => stats && `
    padding-top: 50px;
  `};
`;

const Statistics = ({ state }) => {
  const {
    rowNumber,
    colNumber,
    imgNumber,
    longestRowLabel,
    longestColLabel,
  } = getStatistics(state);

  return (
    <Section>
      <h2>Question Summary View</h2>
      <h3>Summary</h3>
      <Section stats>
        <p>Number of rows: {rowNumber}</p>
        <p>Number of columns: {colNumber}</p>
        <p>Number of images uploaded: {imgNumber}</p>
        <p>Longest row label: {longestRowLabel}</p>
        <p>Longest column label: {longestColLabel}</p>
      </Section>
    </Section>
  );
};

Statistics.propTypes = {
  state: PropTypes.shape({
    rows: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default Statistics;
