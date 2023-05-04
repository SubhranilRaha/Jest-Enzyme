import React from 'react';
import { shallow } from 'enzyme';
import Promise from './Promise';

describe('MyComponent', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Promise url="https://example.com/data" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays loading message when data is not yet loaded', () => {
    const wrapper = shallow(<Promise url="https://example.com/data" />);
    expect(wrapper.find('p').text()).toEqual('Loading...');
  });

  it('displays error message when there is an error fetching data', async () => {
    const error = new Error('Failed to fetch data');
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.reject(error)
    );
    const wrapper = shallow(<Promise url="https://example.com/data" />);
    await wrapper.instance().componentDidMount();
    wrapper.update();
    expect(wrapper.find('p').text()).toEqual('Failed to fetch data');
    global.fetch.mockRestore();
  });

  it('displays fetched data', async () => {
    const data = { id: 1, name: 'John Doe' };
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      })
    );
    const wrapper = shallow(<Promise url="https://example.com/data" />);
    await wrapper.instance().componentDidMount();
    wrapper.update();
    expect(wrapper.find('p').text()).toEqual('John Doe');
    global.fetch.mockRestore();
  });

  it('calls onDataChange when button is clicked', async () => {
    const onDataChange = jest.fn();
    const wrapper = shallow(
      <Promise
        url="https://example.com/data"
        onDataChange={onDataChange}
      />
    );
    await wrapper.instance().componentDidMount();
    wrapper.update();
    wrapper.find('button').simulate('click');
    expect(onDataChange).toHaveBeenCalled();
  });
});
