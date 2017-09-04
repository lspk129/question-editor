import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageLabel = styled.label`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: grid;
  align-items: center;
  justify-items: center;
  margin: auto;
  font-size: 12px;
  ${({ icon }) => icon && `
    background: url(${icon});
    background-size: 30px 30px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    opacity: 0.7;
  `};
`;

const ImageInput = styled.input`
  display: none;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  align-self: center;
  justify-self: center;
  ${({ small }) => small && `
    width: 30px;
    padding: 0 10px 0 20px;
    opacity: 0.7;
  `}
`;

export const ImageCell = ({ change, id, icon }) => (
  <ImageLabel icon={icon} >
    <ImageInput
      type={'file'}
      onChange={change}
      data-img={id}
    />
  </ImageLabel>
);

ImageCell.propTypes = {
  change: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
