// Module dependencies
import { fromJS, List, Map, OrderedMap } from 'immutable';

// Constants
import STATE_MODELS from 'constants/models/state';
import { ERROR, LOADING } from 'constants/types/asynchronous';

// Functions
import {
  fromJSOrdered,
  generateState,
  generateStatus,
  getError,
  normalizeList,
  setAsync
} from '../state';

// Unit tests
describe('helpers/state', () => {
  describe('fromJSOrdered()', () => {
    it('should deeply convert plain JavaScript objects to Immutable.OrderedMap', () => {
      // Mock data
      const data = {
        0: { responded: true, email: 'mail-001@mail.io' },
        1: { responded: true, email: 'mail-002@mail.io' },
        2: { responded: true, email: 'mail-003@mail.io' }
      };

      const result = OrderedMap({
        0: OrderedMap({ responded: true, email: 'mail-001@mail.io' }),
        1: OrderedMap({ responded: true, email: 'mail-002@mail.io' }),
        2: OrderedMap({ responded: true, email: 'mail-003@mail.io' })
      });

      // Assertions
      expect(fromJSOrdered(data)).toEqual(result);
    });

    it('should deeply convert plain JavaScript arrays of objects to Immutable.OrderedMap', () => {
      // Mock data
      const data = [
        { responded: true, email: 'mail-001@mail.io' },
        { responded: true, email: 'mail-002@mail.io' },
        { responded: true, email: 'mail-003@mail.io' }
      ];

      const result = List([
        OrderedMap({ responded: true, email: 'mail-001@mail.io' }),
        OrderedMap({ responded: true, email: 'mail-002@mail.io' }),
        OrderedMap({ responded: true, email: 'mail-003@mail.io' })
      ]);

      // Assertions
      expect(fromJSOrdered(data)).toEqual(result);
    });
  });

  describe('generateState()', () => {
    it('should generate state for a container component', () => {
      // Mock data
      const data = {
        asynchronous: STATE_MODELS.model.asynchronous,
        credits: {
          balance: 15,
          lastCheckout: '2018-08-13T06:42:26.730Z'
        }
      };

      const result = {
        state: Map({
          data: Map({
            credits: Map(data.credits)
          }),
          ui: Map({
            asynchronous: Map(data.asynchronous)
          })
        })
      };

      // Run a function
      const state = generateState(STATE_MODELS.immutable
        .setIn(['data', 'credits'], fromJS(data.credits))
        .setIn(['ui', 'asynchronous'], fromJS(data.asynchronous)));

      // Assertions
      expect(state).toEqual(result);
    });
  });

  describe('generateStatus()', () => {
    it('should generate fetching status', () => {
      // Mock data
      const data = {
        data: 'Untitled',
        asynchronous: STATE_MODELS.model.asynchronous
      };

      const result = {
        status: {
          data: true,
          error: data.asynchronous.error,
          loading: data.asynchronous.loading
        }
      };

      // Run a function
      const state = generateStatus(data.data, data.asynchronous);

      // Assertions
      expect(state).toEqual(result);
    });
  });

  describe('getError()', () => {
    it('should extract an error message from a network response', () => {
      // Mock data
      const data = {
        response: {
          data: {
            error: {
              message: 'Something went wrong!'
            }
          },
          status: 403
        }
      };

      const result = { message: 'Something went wrong!' };

      // Assertions
      expect(getError(data)).toEqual(result);
    });
  });

  describe('normalizeList()', () => {
    it('should normalize a list of entities with their IDs', () => {
      // Mock data
      const data = {
        recipients: [
          { responded: true, _id: '00000', email: 'mail-001@mail.io' },
          { responded: true, _id: '00001', email: 'mail-002@mail.io' },
          { responded: true, _id: '00002', email: 'mail-003@mail.io' },
          { responded: true, _id: '00003', email: 'mail-004@mail.io' },
          { responded: true, _id: '00004', email: 'mail-005@mail.io' }
        ]
      };

      const result = {
        '00000': { responded: true, _id: '00000', email: 'mail-001@mail.io' },
        '00001': { responded: true, _id: '00001', email: 'mail-002@mail.io' },
        '00002': { responded: true, _id: '00002', email: 'mail-003@mail.io' },
        '00003': { responded: true, _id: '00003', email: 'mail-004@mail.io' },
        '00004': { responded: true, _id: '00004', email: 'mail-005@mail.io' }
      };

      // Assertions
      expect(normalizeList(data, 'recipients')).toEqual(result);
    });
  });

  describe('setAsync()', () => {
    it('should set an "error" state', () => {
      // Mock data
      const { asynchronous } = STATE_MODELS.model;
      const error = { message: 'Something went wrong!' };
      const payload = fromJS(error);

      const state = fromJS({
        signout: {
          ...asynchronous,
          loading: true
        }
      });

      const result = fromJS({
        signout: {
          ...asynchronous,
          error
        }
      });

      // Assertions
      expect(setAsync(['signout'], state, ERROR, payload)).toEqual(result);
    });

    it('should set a "loading" state', () => {
      // Mock data
      const { asynchronous } = STATE_MODELS.model;
      const state = fromJS({ signout: asynchronous });

      const result = fromJS({
        signout: {
          ...asynchronous,
          loading: true
        }
      });

      // Assertions
      expect(setAsync(['signout'], state, LOADING)).toEqual(result);
    });

    it('should set a "default" state', () => {
      // Mock data
      const { asynchronous } = STATE_MODELS.model;
      const error = { message: 'Something went wrong!' };

      const state = fromJS({
        signout: {
          ...asynchronous,
          error
        }
      });

      const result = fromJS({ signout: asynchronous });

      // Assertions
      expect(setAsync(['signout'], state)).toEqual(result);
    });
  });
});
