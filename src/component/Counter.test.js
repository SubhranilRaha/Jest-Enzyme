// Counter.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter component', () => {
  it('should render with initial count of 0', () => {
    const wrapper = shallow(<Counter />);
    const countText = wrapper.find('h1').text();
    expect(countText).toEqual('Count: 0');
  });

  it('should increment count on button click', () => {
    const wrapper = shallow(<Counter />);
    const incrementBtn = wrapper.find('button').first();

    // Use Jest's spyOn function to mock the incrementCount function
    const incrementCountMock = jest.spyOn(Counter.prototype, 'incrementCount');

    incrementBtn.simulate('click');

    expect(incrementCountMock).toHaveBeenCalled();
    expect(wrapper.find('h1').text()).toEqual('Count: 1');
  });

  it('should call onReset when reset button is clicked', () => {
    const onResetMock = jest.fn();
    const wrapper = shallow(<Counter onReset={onResetMock} />);
    const resetBtn = wrapper.find('button').last();

    resetBtn.simulate('click');

    expect(onResetMock).toHaveBeenCalled();
  });

  it('should have a count state of 2 when count is set to 2', () => {
    const wrapper = shallow(<Counter />);
    const counterInstance = wrapper.instance();
    counterInstance.setState({ count: 2 });

    expect(wrapper.state('count')).toEqual(2);
  });
});
