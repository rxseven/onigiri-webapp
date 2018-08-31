// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Constants
import STATE_MODELS from 'constants/models/state';

// Components
import Toolbar from '../index';

// Source data
const source = {
  props: {
    actions: {
      back: jest.fn(),
      delete: jest.fn(),
      reload: jest.fn(),
      update: jest.fn()
    },
    state: {
      data: {
        survey: mock.data.source.surveys.item.details
      },
      ui: {
        asynchronous: {
          get: {
            survey: STATE_MODELS.model.asynchronous
          },
          patch: {
            survey: STATE_MODELS.model.asynchronous
          }
        }
      },
      status: {
        updated: false
      }
    }
  }
};

// Unit tests
describe('screens/surveys/details/components/Toolbar', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Toolbar {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"actions"', () => {
      describe('.back', () => {
        describe('Receiving prop', () => {
          it('should receive the correct prop', () => {
            // Mock data
            const props = { ...source.props };
            const result = props.actions.back;

            // Full DOM rendering
            const wrapper = mount(<Toolbar {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper.props().actions.back).toEqual(result);
          });
        });
      });

      describe('.delete', () => {
        describe('Receiving prop', () => {
          it('should receive the correct prop', () => {
            // Mock data
            const props = { ...source.props };
            const result = props.actions.delete;

            // Full DOM rendering
            const wrapper = mount(<Toolbar {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper.props().actions.delete).toEqual(result);
          });
        });
      });

      describe('.reload', () => {
        describe('Receiving prop', () => {
          it('should receive the correct prop', () => {
            // Mock data
            const props = { ...source.props };
            const result = props.actions.reload;

            // Full DOM rendering
            const wrapper = mount(<Toolbar {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper.props().actions.reload).toEqual(result);
          });
        });
      });

      describe('.update', () => {
        describe('Receiving prop', () => {
          it('should receive the correct prop', () => {
            // Mock data
            const props = { ...source.props };
            const result = props.actions.update;

            // Full DOM rendering
            const wrapper = mount(<Toolbar {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper.props().actions.update).toEqual(result);
          });
        });
      });
    });

    describe('"state"', () => {
      describe('.data', () => {
        describe('.survey', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.state.data.survey;

              // Full DOM rendering
              const wrapper = mount(<Toolbar {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().state.data.survey).toEqual(result);
            });
          });
        });
      });

      describe('.ui', () => {
        describe('.asynchronous', () => {
          describe('.get', () => {
            describe('.survey', () => {
              describe('Receiving prop', () => {
                it('should receive the correct prop', () => {
                  // Mock data
                  const props = { ...source.props };
                  const result = props.state.ui.asynchronous.get.survey;

                  // Full DOM rendering
                  const wrapper = mount(<Toolbar {...props} />);

                  // Assertions
                  expect(result).toBeDefined();
                  expect(wrapper.props().state.ui.asynchronous.get.survey).toEqual(result);
                });
              });
            });
          });

          describe('.patch', () => {
            describe('.survey', () => {
              describe('Receiving prop', () => {
                it('should receive the correct prop', () => {
                  // Mock data
                  const props = { ...source.props };
                  const result = props.state.ui.asynchronous.patch.survey;

                  // Full DOM rendering
                  const wrapper = mount(<Toolbar {...props} />);

                  // Assertions
                  expect(result).toBeDefined();
                  expect(wrapper.props().state.ui.asynchronous.patch.survey).toEqual(result);
                });
              });
            });
          });
        });
      });

      describe('.status', () => {
        describe('.updated', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.state.status.updated;

              // Full DOM rendering
              const wrapper = mount(<Toolbar {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().state.status.updated).toEqual(result);
            });
          });
        });
      });
    });
  });

  // TODO: Conditional rendering
});
