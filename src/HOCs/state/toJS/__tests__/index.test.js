// Module dependencies
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import React from 'react';
import { connect } from 'react-redux';

// Helper functions
import { mockStore } from 'tests/helpers/mock';

// HOCs
import toJS from '../index';

// UI component
const UI = () => <div>UI component</div>;

// Map state to props
const mapStateToProps = state => ({ state });

// Container component
const Container = connect(mapStateToProps)(toJS(UI));

// Initial state
const initialState = {
  profile: {
    email: 'skywalker@rxseven.com',
    firstName: 'Luke',
    lastName: 'Skywalker'
  }
};

// Source data
const source = {
  state: {
    immutable: fromJS(initialState),
    plain: initialState
  },
  store: mockStore(fromJS(initialState))
};

// Unit tests
describe('HOCs/state/toJS', () => {
  it('should render without crashing', () => {
    // Shallow rendering
    const wrapper = shallow(<Container store={source.store} />);

    // Assertions
    expect(wrapper).toBeDefined();
  });

  it('should map Immutable props to pure JavaScript props', () => {
    // Mock data
    const result = source.state;

    // Shallow rendering
    const wrapper = shallow(<Container store={source.store} />);

    // Assertions
    expect(wrapper.prop('state')).toEqual(result.immutable);
    expect(wrapper.dive().prop('state')).toEqual(result.plain);
  });
});
