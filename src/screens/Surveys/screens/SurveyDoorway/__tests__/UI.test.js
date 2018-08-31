// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Constants
import STATE_MODELS from 'constants/models/state';

// Components
import UI from '../UI';

// Source data
const source = {
  props: {
    actions: {
      surveys: {
        resetData: jest.fn(),
        getLanding: jest.fn()
      }
    },
    match: {
      params: {
        id: '5ae46e3c40ea63072f8a1c41'
      }
    },
    state: {
      data: {
        landing: mock.data.source.surveys.item.landing
      },
      ui: {
        asynchronous: {
          get: {
            landing: STATE_MODELS.model.asynchronous
          }
        }
      }
    }
  }
};

// Unit tests
describe('screens/surveys/doorway/UI', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<UI {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"actions"', () => {
      describe('.surveys', () => {
        describe('.resetData', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.actions.surveys.resetData;

              // Full DOM rendering
              const wrapper = mount(<UI {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().actions.surveys.resetData).toEqual(result);
            });
          });
        });

        describe('.getLanding', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.actions.surveys.getLanding;

              // Full DOM rendering
              const wrapper = mount(<UI {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().actions.surveys.getLanding).toEqual(result);
            });
          });
        });
      });
    });

    describe('"match"', () => {
      describe('.params', () => {
        describe('.id', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.match.params.id;

              // Full DOM rendering
              const wrapper = mount(<UI {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().match.params.id).toEqual(result);
            });
          });
        });
      });
    });

    describe('"state"', () => {
      describe('.data', () => {
        describe('.landing', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.state.data.landing;

              // Full DOM rendering
              const wrapper = mount(<UI {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().state.data.landing).toEqual(result);
            });
          });
        });
      });

      describe('.ui', () => {
        describe('.asynchronous', () => {
          describe('.get', () => {
            describe('.landing', () => {
              describe('Receiving prop', () => {
                it('should receive the correct prop', () => {
                  // Mock data
                  const props = { ...source.props };
                  const result = props.state.ui.asynchronous;

                  // Full DOM rendering
                  const wrapper = mount(<UI {...props} />);

                  // Assertions
                  expect(result).toBeDefined();
                  expect(wrapper.props().state.ui.asynchronous).toEqual(result);
                });
              });
            });
          });
        });
      });
    });
  });

  // TODO: Conditional rendering
});
