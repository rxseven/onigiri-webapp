// Module dependencies
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import 'jest-localstorage-mock';

// Configure Enzyme adapter
configure({ adapter: new Adapter() });
