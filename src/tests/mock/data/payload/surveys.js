// Source data
import source from '../source';

// Constants
const { list, item } = source.surveys;
const { details, landing, recipients } = item;
const { _id: id } = details;

// Payload
export default {
  item: {
    details: {
      data: {
        request: { id },
        response: details
      },
      delete: {
        request: { id },
        response: { id }
      },
      remove: {
        request: { id },
        response: undefined
      },
      selected: {
        request: { id },
        response: undefined
      },
      update: {
        request: {
          id,
          values: { completed: true }
        },
        response: { completed: true }
      }
    },
    recipients: {
      request: { id },
      response: {
        normalized: recipients.normalized,
        raw: recipients.raw
      }
    },
    landing: {
      request: { id },
      response: landing
    }
  },
  list: {
    query: {
      list: {
        request: {
          page: 1,
          completed: true
        },
        response: list.data
      },
      mode: {
        request: {
          mode: 'archived',
          query: { archived: true }
        },
        response: undefined
      }
    },
    view: {
      pagination: {
        request: {
          current: 2,
          more: true,
          next: 3,
          query: {
            completed: true
          },
          total: 2
        },
        response: undefined
      },
      selected: {
        request: '5ae46e3c40ea63072f8a1c41'
      }
    }
  },
  new: {
    request: {
      body: 'We are going to have a company trip next week, would you like to join us?',
      from: 'hr@mail.io',
      landing: 'http://www.rxseven.com',
      recipients:
        'recipient-001@mail.io, recipient-002@mail.io, recipient-003@mail.io, recipient-004@mail.io, recipient-005@mail.io',
      sender: 'HR Team',
      subject: 'Would you like to join a company next week?',
      title: 'Company Trip Survey'
    },
    response: {
      credits: { balance: 5 },
      id: '5ae46e3c40ea63072f8a1c41'
    }
  }
};
