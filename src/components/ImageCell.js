import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageLabel = styled.label`
  border: 1px solid #ccc;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: grid;
  align-items: center;
  justify-items: center;
  margin: auto;
  font-size: 12px;
`;

const ImageInput = styled.input`
  display: none;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  align-self: center;
  justify-self: center;
`;

export const ImageCell = ({ change, id }) => (
  <ImageLabel>
    <ImageInput
      type={'file'}
      onChange={change}
      data-img={id}
    />
      img
  </ImageLabel>
);

ImageCell.propTypes = {
  change: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
