// Module dependencies
import { OrderedMap } from 'immutable';

// Constants
import STATE_MODELS from 'constants/models/state';

// Initial state
export default {
  details: {
    data: {
      survey: null
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
        URI: ''
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
      surveys: {
        data: OrderedMap({}),
        meta: null
      }
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
  },
  new: {
    ui: {
      asynchronous: {
        post: STATE_MODELS.model.asynchronous
      }
    }
  }
};
