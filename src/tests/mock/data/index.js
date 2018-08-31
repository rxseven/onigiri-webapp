// Module dependencies
import { fromJS } from 'immutable';

// Dummy data
import domain from './domain';
import initial from './initial';
import payload from './payload';
import source from './source';

export default {
  domain,
  initial: fromJS(initial),
  payload,
  source,
  store: fromJS(domain)
};
