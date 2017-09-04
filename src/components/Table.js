import styled from 'styled-components';

export const TableGrid = styled.div`
  display: grid;
  ${({ size }) => `grid-template-columns: repeat(${size}, max-content)`};
  grid-gap: 10px;
  border-right: 1px solid grey;
`;

export const Row = styled.div`
  display: grid;
  grid-auto-rows: 50px;
  grid-auto-columns: minmax(50px, max-content);
  grid-column-gap: 10px;
  grid-gap: 10px;
`;

export const Col = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  font-size: 12px;
  ${({ remove }) => remove && 'background-color: salmon; cursor: pointer'};
  ${({ add }) => add && 'background-color: lightSeaGreen; cursor: pointer'};
  ${({ text }) => text && 'background-color: LightSteelBlue'};
  ${({ space }) => space && 'background-color: #fff'};
  ${({ icon }) => icon && `
    background: url(${icon});
    background-size: 30px 30px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    opacity: 0.7;
  `};
`;

export const TextInput = styled.input`
  text-align: center;
  background: transparent;
  box-sizing: border-box;
  outline: none;
  border: none;
  &::placeholder {
    color: #000;
    font-style: italic;
  }
  ${({ question }) => question && `
    font-size: 20px;
    width: 100%;
    text-align: left;
    &::placeholder {
      color: grey;
    }
  `}
`;

export const Icon = styled.div`
  align-self: center;
  justify-self: center;
`;

export const TableSection = styled.div`
  display: grid;
  ${({ title }) => title && 'padding: 0 20px 20px;'};
`;
