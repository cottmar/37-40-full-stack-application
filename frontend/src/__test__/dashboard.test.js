import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, shallow as enzymeShallowMount, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Dashboard from '../components/dashboard/dashboard';

configureEnzyme({ adapter: new Adapter() });

describe('#Dashboard', () => {
  const initialState = {
    sections: [{
      title: 'Gregor',
      id: '0.123',
      createdOn: new Date(),
    },
    {
      title: 'Hound',
      id: '0.222',
      createdOn: new Date(),
    }],
    cards: {
      0.123: [],
      0.222: [],
    },
  };

  test('', () => {
    const mockStore = configureStore([]);
    const mountedDashboard = mount(<Provider store={mockStore(initialState)}>
      <Dashboard /></Provider>);

    console.log(mountedDashboard.html());

    expect(mountedDashboard.find('SectionForm')).toBeTruthy();
    expect(mountedDashboard.find('Section').length).toEqual(2);
  });
});