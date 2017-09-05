import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';
import Statistics from './Statistics';
import Legend from './Legend';
import { ImageCell } from './ImageCell';
import { TableGrid, Row, Col, TextInput, TableSection } from './Table';
import { TransitionAll, TransitionRow, TransitionCol } from './Transition';

describe('App component', () => {
  const wrapper = shallow(<App />);

  it('renders corretly', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders Statistics component', () => {
    expect(wrapper.find(Statistics)).toBePresent();
  });

  it('renders Legend component', () => {
    expect(wrapper.find(Legend)).toBePresent();
  });

  it('renders ImageCell component', () => {
    expect(wrapper.find(ImageCell)).toBePresent();
    expect(wrapper.find(ImageCell).length).toEqual(4);
  });

  it('renders TableGrid component', () => {
    expect(wrapper.find(TableGrid)).toBePresent();
    expect(wrapper.find(TableGrid).length).toEqual(1);
  });

  it('renders Row component', () => {
    expect(wrapper.find(Row)).toBePresent();
    expect(wrapper.find(Row).length).toEqual(6);
  });

  it('renders Col component', () => {
    expect(wrapper.find(Col)).toBePresent();
    expect(wrapper.find(Col).length).toEqual(14);
  });

  it('renders TextInput component', () => {
    expect(wrapper.find(TextInput)).toBePresent();
    expect(wrapper.find(TextInput).length).toEqual(5);
  });

  it('renders TableSection component', () => {
    expect(wrapper.find(TableSection)).toBePresent();
    expect(wrapper.find(TableSection).length).toEqual(2);
  });

  it('renders TransitionAll component', () => {
    expect(wrapper.find(TransitionAll)).toBePresent();
    expect(wrapper.find(TransitionAll).length).toEqual(2);
  });

  it('renders TransitionRow component', () => {
    expect(wrapper.find(TransitionRow)).toBePresent();
    expect(wrapper.find(TransitionRow).length).toEqual(3);
  });

  it('renders TransitionCol component', () => {
    expect(wrapper.find(TransitionCol)).toBePresent();
    expect(wrapper.find(TransitionCol).length).toEqual(1);
  });
});
