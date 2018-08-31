// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Constants
import STATE_MODELS from 'constants/models/state';

// Components
import List from '../index';

// Source data
const source = {
  props: {
    actions: {},
    state: {
      data: mock.data.source.surveys.list.data.data,
      asynchronous: {
        get: {
          ...STATE_MODELS.model.asynchronous,
          loaded: true
        }
      },
      meta: mock.data.source.surveys.list.data.meta,
      mode: 'completed',
      pagination: {
        current: 2,
        more: true,
        next: 3,
        query: {
          completed: true
        },
        total: 2
      },
      query: { completed: true }
    }
  }
};

// Unit tests
describe('screens/surveys/list/components/List', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<List {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Props and conditional rendering
});
