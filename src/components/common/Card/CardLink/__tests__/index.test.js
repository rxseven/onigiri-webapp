// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';
import { Link } from 'react-router-dom';

// Helper functions
import { mockRouter } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Components
import CardLink from '../index';

// Source data
const source = {
  props: {
    children: mock.data.source.content.children,
    link: '/'
  }
};

// Unit tests
describe('components/common/Card/CardLink', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<CardLink {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should contain <Link /> component', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<CardLink {...props} />);

      // Assertions
      expect(wrapper.find(Link)).toExist();
    });

    it('should have "card-link" class', () => {
      // Mock data
      const props = { ...source.props };
      const result = 'card-link';

      // Shallow rendering
      const wrapper = shallow(<CardLink {...props} />);

      // Assertions
      expect(wrapper).toHaveClassName(result);
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"children"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { children: props.children };

          // Shallow rendering
          const wrapper = shallow(<CardLink {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<CardLink {...props}>{props.children}</CardLink>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });

    describe('"link"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { link: props.link };

          // Shallow rendering
          const wrapper = shallow(mockRouter(<CardLink {...props} />));

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper.dive()).toHaveProp(result);
        });

        it('should specify a link URL', () => {
          // Mock data
          const props = { ...source.props };
          const result = { to: props.link };

          // Shallow rendering
          const wrapper = shallow(mockRouter(<CardLink {...props} />));

          // Assertions
          expect(wrapper.find(CardLink).dive()).toHaveProp(result);
        });
      });
    });
  });
});
