// Constants
import STATE_MODELS from 'constants/models/state';

// Dummy data
import surveys from '../dummy/surveys';

// Domain
export default {
  details: {
    data: {
      survey: surveys.item.details
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
  },
  doorway: {
    data: {
      landing: {
        URI: 'http://www.rxseven.com'
      }
    },
    ui: {
      asynchronous: {
        get: {
          landing: STATE_MODELS.model.asynchronous
        }
      }
    }
  },
  list: {
    data: {
      surveys: surveys.list.data,
      meta: surveys.list.meta
    },
    ui: {
      asynchronous: {
        get: STATE_MODELS.model.asynchronous
      }
    },
    view: {
      mode: 'active',
      pagination: null,
      query: null,
      selected: null
    }
  },
  new: {
    ui: {
      asynchronous: {
        post: STATE_MODELS.model.asynchronous
      }
    }
  }
};
