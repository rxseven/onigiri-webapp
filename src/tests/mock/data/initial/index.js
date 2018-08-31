// Partials
import data from './data';
import { burgerMenu, form } from './libraries';
import surveys from './surveys';
import users from './users';

// Initial state
export default {
  burgerMenu,
  data,
  form,
  screens: {
    surveys,
    users
  }
};
