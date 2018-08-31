// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Helper functions
import { mockRouter } from 'tests/helpers/mock';

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
        cancelSurveys: jest.fn(),
        getSurveys: jest.fn(),
        removeSelectedSurvey: jest.fn(),
        resetData: jest.fn(),
        resetView: jest.fn(),
        savePagination: jest.fn(),
        selectMode: jest.fn()
      }
    },
    screenWidth: 320,
    state: {
      data: {
        surveys: {
          data: mock.data.source.surveys.list.data.data,
          meta: mock.data.source.surveys.list.data.meta
        }
      },
      ui: {
        asynchronous: {
          get: {
            ...STATE_MODELS.model.asynchronous,
            loaded: true
          }
        }
      },
      view: mock.data.source.surveys.list.view
    }
  }
};

// Unit tests
describe('screens/surveys/list/UI', () => {
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
        describe('.cancelSurveys', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.actions.surveys.cancelSurveys;

              // Full DOM rendering
              const wrapper = mount(mockRouter(<UI {...props} />));

              // Assertions
              const test = wrapper.props().children.props.actions.surveys.cancelSurveys;
              expect(result).toBeDefined();
              expect(test).toEqual(result);
            });
          });
        });

        describe('.getSurveys', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.actions.surveys.getSurveys;

              // Full DOM rendering
              const wrapper = mount(mockRouter(<UI {...props} />));

              // Assertions
              const test = wrapper.props().children.props.actions.surveys.getSurveys;
              expect(result).toBeDefined();
              expect(test).toEqual(result);
            });
          });
        });

        describe('.removeSelectedSurvey', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.actions.surveys.removeSelectedSurvey;

              // Full DOM rendering
              const wrapper = mount(mockRouter(<UI {...props} />));

              // Assertions
              const test = wrapper.props().children.props.actions.surveys.removeSelectedSurvey;
              expect(result).toBeDefined();
              expect(test).toEqual(result);
            });
          });
        });

        describe('.resetData', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.actions.surveys.resetData;

              // Full DOM rendering
              const wrapper = mount(mockRouter(<UI {...props} />));

              // Assertions
              const test = wrapper.props().children.props.actions.surveys.resetData;
              expect(result).toBeDefined();
              expect(test).toEqual(result);
            });
          });
        });

        describe('.resetView', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.actions.surveys.resetView;

              // Full DOM rendering
              const wrapper = mount(mockRouter(<UI {...props} />));

              // Assertions
              const test = wrapper.props().children.props.actions.surveys.resetView;
              expect(result).toBeDefined();
              expect(test).toEqual(result);
            });
          });
        });

        describe('.savePagination', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.actions.surveys.savePagination;

              // Full DOM rendering
              const wrapper = mount(mockRouter(<UI {...props} />));

              // Assertions
              const test = wrapper.props().children.props.actions.surveys.savePagination;
              expect(result).toBeDefined();
              expect(test).toEqual(result);
            });
          });
        });

        describe('.selectMode', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.actions.surveys.selectMode;

              // Full DOM rendering
              const wrapper = mount(mockRouter(<UI {...props} />));

              // Assertions
              const test = wrapper.props().children.props.actions.surveys.selectMode;
              expect(result).toBeDefined();
              expect(test).toEqual(result);
            });
          });
        });
      });
    });

    describe('"screenWidth"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.screenWidth;

          // Full DOM rendering
          const wrapper = mount(mockRouter(<UI {...props} />));

          // Assertions
          const test = wrapper.props().children.props.screenWidth;
          expect(result).toBeDefined();
          expect(test).toEqual(result);
        });
      });
    });

    describe('"state"', () => {
      describe('.data', () => {
        describe('.surveys', () => {
          describe('.data', () => {
            describe('Receiving prop', () => {
              it('should receive the correct prop', () => {
                // Mock data
                const props = { ...source.props };
                const result = props.state.data.surveys.data;

                // Full DOM rendering
                const wrapper = mount(mockRouter(<UI {...props} />));

                // Assertions
                const test = wrapper.props().children.props.state.data.surveys.data;
                expect(result).toBeDefined();
                expect(test).toEqual(result);
              });
            });
          });

          describe('.meta', () => {
            describe('Receiving prop', () => {
              it('should receive the correct prop', () => {
                // Mock data
                const props = { ...source.props };
                const result = props.state.data.surveys.meta;

                // Full DOM rendering
                const wrapper = mount(mockRouter(<UI {...props} />));

                // Assertions
                const test = wrapper.props().children.props.state.data.surveys.meta;
                expect(result).toBeDefined();
                expect(test).toEqual(result);
              });
            });
          });
        });
      });

      describe('.ui', () => {
        describe('.asynchronous', () => {
          describe('.get', () => {
            describe('Receiving prop', () => {
              it('should receive the correct prop', () => {
                // Mock data
                const props = { ...source.props };
                const result = props.state.ui.asynchronous.get;

                // Full DOM rendering
                const wrapper = mount(mockRouter(<UI {...props} />));

                // Assertions
                const test = wrapper.props().children.props.state.ui.asynchronous.get;
                expect(result).toBeDefined();
                expect(test).toEqual(result);
              });
            });
          });
        });
      });

      describe('.view', () => {
        describe('Receiving prop', () => {
          it('should receive the correct prop', () => {
            // Mock data
            const props = { ...source.props };
            const result = props.state.view;

            // Full DOM rendering
            const wrapper = mount(mockRouter(<UI {...props} />));

            // Assertions
            const test = wrapper.props().children.props.state.view;
            expect(result).toBeDefined();
            expect(test).toEqual(result);
          });
        });
      });
    });
  });

  // TODO: Conditional rendering
});
