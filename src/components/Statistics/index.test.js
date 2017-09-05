import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Statistics from './';

describe('Statistics component', () => {
  const props = {
    rows: [
      { id: '1', text: 'hello', img: [] },
    ],
    cols: [
      { id: '2', text: '', img: ['1'] },
      { id: '3', text: 'world', img: [] },
    ],
  };
  const wrapper = mount(<Statistics state={props} />);

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('has state prop', () => {
    expect(wrapper).toHaveProp('state');
  });

  it('has h2 title with copy "Question Summary View"', () => {
    expect(wrapper.find('h2')).toHaveText('Question Summary View');
  });

  it('has copy "Number of rows"', () => {
    expect(wrapper.find('p').at(0)).toHaveText('Number of rows: 1');
  });

  it('has copy "Number of columns"', () => {
    expect(wrapper.find('p').at(1)).toHaveText('Number of columns: 2');
  });

  it('has copy "Number of images uploaded"', () => {
    expect(wrapper.find('p').at(2)).toHaveText('Number of images uploaded: 1');
  });

  it('has copy "Longest row label"', () => {
    expect(wrapper.find('p').at(3)).toHaveText('Longest row label: 5');
  });

  it('has copy "Longest column label"', () => {
    expect(wrapper.find('p').at(4)).toHaveText('Longest column label: 5');
  });
});
