// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import ReferralRoute from '../index';

// Source data
const source = {
  props: {
    component: <div>Component</div>,
    exact: false,
    location: {
      state: {
        referral: false
      }
    },
    redirectTo: '/'
  }
};

// Unit tests
describe('HOCs/routes/ReferralRoute', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };
      const component = <ReferralRoute {...props} />;

      // Shallow rendering
      const wrapper = shallow(component);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Props and conditional rendering
});
