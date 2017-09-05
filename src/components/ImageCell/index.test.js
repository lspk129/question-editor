import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ImageCell } from './';
import imageIcon from '../../icons/ic_image_black_24px.svg';

describe('ImageCell', () => {
  const props = {
    change: () => {},
    id: '12345',
    icon: imageIcon,
  };
  const wrapper = mount(
    <ImageCell {...props} />,
  );

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('has change prop', () => {
    expect(wrapper).toHaveProp('change');
  });

  it('has with id prop', () => {
    expect(wrapper).toHaveProp('id', '12345');
  });

  it('has icon props', () => {
    expect(wrapper).toHaveProp('icon', imageIcon);
  });
});
