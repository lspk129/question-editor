import React from 'react';
import styled from 'styled-components';
import { Image } from './ImageCell';
import deleteIcon from '../icons/ic_delete_forever_black_24px.svg';
import imageIcon from '../icons/ic_image_black_24px.svg';
import addIcon from '../icons/ic_add_circle_black_24px.svg';

const Section = styled.div`
  grid-column: 2;
  padding: 0 20px 20px;
`;

const ImageRow = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  ${({ note }) => note && `
    padding: 20px 0 0 30px;
  `};
`;

const Text = styled.span`
  padding-left: 10px;
`;

const Legend = () => (
  <Section>
    <h3>Legend</h3>
    <ImageRow><Image small src={imageIcon} /> - <Text>Add images</Text></ImageRow>
    <ImageRow><Image small src={addIcon} /> - <Text>Add row/column</Text></ImageRow>
    <ImageRow><Image small src={deleteIcon} /> - <Text>Delete row/column</Text></ImageRow>
    <ImageRow note><i>Italic</i> <Text>text is editable</Text></ImageRow>
  </Section>
);

export default Legend;
