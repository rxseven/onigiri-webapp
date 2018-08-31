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
      modal: {
        closeModal: jest.fn(),
        openModal: jest.fn()
      },
      surveys: {
        addSelectedSurvey: jest.fn(),
        deleteSurvey: jest.fn(),
        getRecipients: jest.fn(),
        getSurvey: jest.fn(),
        removeSurvey: jest.fn(),
        resetData: jest.fn(),
        updateSurvey: jest.fn()
      }
    },
    history: {},
    location: {
      state: {
        fromList: true,
        mode: 'active'
      }
    },
    match: {
      params: {
        id: '5ae46e3c40ea63072f8a1c41'
      }
    },
    state: {
      data: {
        interfaces: {
          modal: mock.data.source.interfaces.modal
        },
        survey: mock.data.source.surveys.item.details
      },
      ui: {
        asynchronous: {
          delete: {
            survey: STATE_MODELS.model.asynchronous
          },
          get: {
            recipients: STATE_MODELS.model.asynchronous,
            survey: STATE_MODELS.model.asynchronous
          },
          patch: {
            survey: STATE_MODELS.model.asynchronous
          }
        }
      }
    }
  }
};

// Unit tests
describe('screens/surveys/details/UI', () => {
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
      describe('.modal', () => {
        describe('.closeModal', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.actions.modal.closeModal;

              // Full DOM rendering
              const wrapper = mount(<UI {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().actions.modal.closeModal).toEqual(result);
            });
          });
        });

        describe('.openModal', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.actions.modal.openModal;

              // Full DOM rendering
              const wrapper = mount(<UI {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().actions.modal.openModal).toEqual(result);
            });
          });
        });
      });

      describe('.surveys', () => {
        describe('.addSelectedSurvey', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.actions.surveys.addSelectedSurvey;

              // Full DOM rendering
              const wrapper = mount(<UI {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().actions.surveys.addSelectedSurvey).toEqual(result);
            });
          });
        });

        describe('.deleteSurvey', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.actions.surveys.deleteSurvey;

              // Full DOM rendering
              const wrapper = mount(<UI {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().actions.surveys.deleteSurvey).toEqual(result);
            });
          });
        });

        describe('.getRecipients', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.actions.surveys.getRecipients;

              // Full DOM rendering
              const wrapper = mount(<UI {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().actions.surveys.getRecipients).toEqual(result);
            });
          });
        });

        describe('.getSurvey', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.actions.surveys.getSurvey;

              // Full DOM rendering
              const wrapper = mount(<UI {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().actions.surveys.getSurvey).toEqual(result);
            });
          });
        });

        describe('.removeSurvey', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.actions.surveys.removeSurvey;

              // Full DOM rendering
              const wrapper = mount(<UI {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().actions.surveys.removeSurvey).toEqual(result);
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
              const wrapper = mount(<UI {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().actions.surveys.resetData).toEqual(result);
            });
          });
        });

        describe('.updateSurvey', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.actions.surveys.updateSurvey;

              // Full DOM rendering
              const wrapper = mount(<UI {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().actions.surveys.updateSurvey).toEqual(result);
            });
          });
        });
      });
    });

    describe('"history"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.history;

          // Full DOM rendering
          const wrapper = mount(<UI {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper.props().history).toEqual(result);
        });
      });
    });

    describe('"location"', () => {
      describe('.state', () => {
        describe('.fromList', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.location.state.fromList;

              // Full DOM rendering
              const wrapper = mount(<UI {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().location.state.fromList).toEqual(result);
            });
          });
        });

        describe('.mode', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.location.state.mode;

              // Full DOM rendering
              const wrapper = mount(<UI {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().location.state.mode).toEqual(result);
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
        describe('.interfaces', () => {
          describe('.modal', () => {
            describe('Receiving prop', () => {
              it('should receive the correct prop', () => {
                // Mock data
                const props = { ...source.props };
                const result = props.state.data.interfaces.modal;

                // Full DOM rendering
                const wrapper = mount(<UI {...props} />);

                // Assertions
                expect(result).toBeDefined();
                expect(wrapper.props().state.data.interfaces.modal).toEqual(result);
              });
            });
          });
        });

        describe('.survey', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.state.data.survey;

              // Full DOM rendering
              const wrapper = mount(<UI {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().state.data.survey).toEqual(result);
            });
          });
        });
      });

      describe('.ui', () => {
        describe('.asynchronous', () => {
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

  // TODO: Conditional rendering
});
