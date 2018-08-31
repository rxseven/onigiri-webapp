// Constants
import STATE_MODELS from 'constants/models/state';

// Dummy data
export default {
  item: {
    details: {
      archived: true,
      body: 'Lorem Ipsum is simply dummy text of the printing and ,typesetting industry.',
      completed: false,
      dateSent: '2018-04-28T12:51:08.145Z',
      from: 'no-reply@mail.io',
      landing: 'https://github.com/rxseven/onigiri-webapp',
      lastResponded: '2018-04-28T12:55:08.145Z',
      locked: true,
      no: 8,
      sender: 'Administrator',
      subject: 'Survey Subject - 001',
      title: 'Testing Survey - 001',
      yes: 12,
      _id: '5ae46e3c40ea63072f8a1c41'
    },
    recipients: {
      normalized: {
        '5ae46e3c40ea63072f8a1c55': {
          responded: true,
          _id: '5ae46e3c40ea63072f8a1c55',
          email: 'recipient-001@mail.io'
        },
        '5ae46e3c40ea63072f8a1c54': {
          responded: true,
          _id: '5ae46e3c40ea63072f8a1c54',
          email: 'recipient-002@mail.io'
        },
        '5ae46e3c40ea63072f8a1c53': {
          responded: true,
          _id: '5ae46e3c40ea63072f8a1c53',
          email: 'recipient-003@mail.io'
        },
        '5ae46e3c40ea63072f8a1c52': {
          responded: true,
          _id: '5ae46e3c40ea63072f8a1c52',
          email: 'recipient-004@mail.io'
        },
        '5ae46e3c40ea63072f8a1c51': {
          responded: true,
          _id: '5ae46e3c40ea63072f8a1c51',
          email: 'recipient-005@mail.io'
        },
        '5ae46e3c40ea63072f8a1c50': {
          responded: true,
          _id: '5ae46e3c40ea63072f8a1c50',
          email: 'recipient-006@mail.io'
        },
        '5ae46e3c40ea63072f8a1c4f': {
          responded: true,
          _id: '5ae46e3c40ea63072f8a1c4f',
          email: 'recipient-007@mail.io'
        },
        '5ae46e3c40ea63072f8a1c4e': {
          responded: true,
          _id: '5ae46e3c40ea63072f8a1c4e',
          email: 'recipient-008@mail.io'
        },
        '5ae46e3c40ea63072f8a1c4d': {
          responded: true,
          _id: '5ae46e3c40ea63072f8a1c4d',
          email: 'recipient-009@mail.io'
        },
        '5ae46e3c40ea63072f8a1c4c': {
          responded: true,
          _id: '5ae46e3c40ea63072f8a1c4c',
          email: 'recipient-010@mail.io'
        }
      },
      raw: {
        0: { responded: true, _id: '5ae46e3c40ea63072f8a1c55', email: 'recipient-001@mail.io' },
        1: { responded: true, _id: '5ae46e3c40ea63072f8a1c54', email: 'recipient-002@mail.io' },
        2: { responded: true, _id: '5ae46e3c40ea63072f8a1c53', email: 'recipient-003@mail.io' },
        3: { responded: true, _id: '5ae46e3c40ea63072f8a1c52', email: 'recipient-004@mail.io' },
        4: { responded: true, _id: '5ae46e3c40ea63072f8a1c51', email: 'recipient-005@mail.io' },
        5: { responded: true, _id: '5ae46e3c40ea63072f8a1c50', email: 'recipient-006@mail.io' },
        6: { responded: true, _id: '5ae46e3c40ea63072f8a1c4f', email: 'recipient-007@mail.io' },
        7: { responded: true, _id: '5ae46e3c40ea63072f8a1c4e', email: 'recipient-008@mail.io' },
        8: { responded: true, _id: '5ae46e3c40ea63072f8a1c4d', email: 'recipient-009@mail.io' },
        9: { responded: true, _id: '5ae46e3c40ea63072f8a1c4c', email: 'recipient-010@mail.io' }
      }
    },
    landing: {
      URI: 'http://www.rxseven.com'
    }
  },
  list: {
    data: {
      data: {
        '5ae477ca40ea63072f8a1dc2': {
          dateSent: '2018-04-28T13:31:54.406Z',
          no: 0,
          subject: 'Survey Subject - 001',
          title: 'Testing Survey - 016',
          yes: 0,
          _id: '5ae477ca40ea63072f8a1dc2'
        },
        '5ae477f040ea63072f8a1de1': {
          dateSent: '2018-04-28T13:32:32.946Z',
          no: 0,
          subject: 'Survey Subject - 002',
          title: 'Testing Survey - 017',
          yes: 0,
          _id: '5ae477f040ea63072f8a1de1'
        }
      },
      meta: {
        paging: {
          next: 3,
          previous: 1
        },
        query: {
          limit: 5,
          page: 2
        },
        summary: {
          pages: 5,
          total: 23
        }
      }
    },
    item: {
      dateSent: '2018-04-28T13:31:54.406Z',
      no: 0,
      subject: 'Survey Subject - 001',
      title: 'Testing Survey - 016',
      yes: 0,
      _id: '5ae477ca40ea63072f8a1dc2'
    },
    ui: {
      asynchronous: {
        get: {
          ...STATE_MODELS.model.asynchronous,
          loaded: false
        }
      }
    },
    view: {
      mode: 'active',
      pagination: null,
      query: null,
      selected: null
    }
  }
};
