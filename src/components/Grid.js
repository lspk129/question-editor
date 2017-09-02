import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-auto-rows: 50px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
  grid-template-rows: 50px;
  grid-column-gap: 10px;
  ${({ first }) => first && 'grid-column: 3;'};
`;

export const Col = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  font-size: 12px;
  background-color: #BADA55;
  ${({ remove }) => remove && 'background-color: salmon; cursor: pointer'};
  ${({ add }) => add && 'background-color: lightSeaGreen; cursor: pointer'};
  ${({ text }) => text && 'background-color: LightSteelBlue'};
`;

export const Empty = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
`;
