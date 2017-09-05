import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Legend from './';
import { Image } from '../ImageCell';
import deleteIcon from '../../icons/ic_delete_forever_black_24px.svg';
import imageIcon from '../../icons/ic_image_black_24px.svg';
import addIcon from '../../icons/ic_add_circle_black_24px.svg';

describe('Legend component', () => {
  const wrapper = mount(<Legend />,
  );

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('has title with h3 tag', () => {
    expect(wrapper.find('h3')).toBePresent();
    expect(wrapper.find('h3')).toHaveText('Legend');
  });

  it('has image component with imageIcon', () => {
    expect(wrapper.find(Image).at(0)).toHaveProp('src', imageIcon);
  });

  it('has image component with addIcon', () => {
    expect(wrapper.find(Image).at(1)).toHaveProp('src', addIcon);
  });

  it('has image component with deleteIcon', () => {
    expect(wrapper.find(Image).at(2)).toHaveProp('src', deleteIcon);
  });

  it('has copy "Add images"', () => {
    expect(wrapper.find('span').at(0)).toHaveText('Add images');
  });

  it('has copy "Add row/column"', () => {
    expect(wrapper.find('span').at(1)).toHaveText('Add row/column');
  });

  it('has copy "Delete row/column"', () => {
    expect(wrapper.find('span').at(2)).toHaveText('Delete row/column');
  });
});
