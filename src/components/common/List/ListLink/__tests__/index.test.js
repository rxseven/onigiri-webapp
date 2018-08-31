// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Helper functions
import { cssModule } from 'tests/helpers/assertions';

// Mock data
import mock from 'tests/mock';

// Components
import ExLink from 'components/common/ExLink';
import ListLink from '../index';

// Source data
const source = {
  props: {
    children: mock.data.source.content.children,
    icon: false,
    tag: '',
    to: 'http://www.rxseven.com',
    v: ''
  }
};

// Unit tests
describe('components/common/List/ListLink', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<ListLink />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"children"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { children: props.children };

          // Full DOM rendering
          const wrapper = mount(<ListLink {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<ListLink>{props.children}</ListLink>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });

    describe('"icon"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { icon: props.icon };

          // Full DOM rendering
          const wrapper = mount(<ListLink />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT render an icon', () => {
          // Mock data
          const props = { ...source.props };
          const result = { icon: props.icon };

          // Shallow rendering
          const wrapper = shallow(<ListLink />);

          // Assertions
          expect(wrapper.find(ExLink)).toHaveProp(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const icon = true;

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, icon };
          const result = { icon: props.icon };

          // Full DOM rendering
          const wrapper = mount(<ListLink {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render an icon', () => {
          // Mock data
          const props = { ...source.props, icon };
          const result = { icon: props.icon };

          // Shallow rendering
          const wrapper = shallow(<ListLink {...props} />);

          // Assertions
          expect(wrapper.find(ExLink)).toHaveProp(result);
        });
      });
    });

    describe('"tag"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { tag: props.tag };

          // Full DOM rendering
          const wrapper = mount(<ListLink />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT render a tag number', () => {
          // Mock data
          const props = { ...source.props };
          const result = <code>{props.tag}</code>;

          // Shallow rendering
          const wrapper = shallow(<ListLink />);

          // Assertions
          expect(wrapper).not.toContainReact(result);
        });
      });

      describe('Receiving prop', () => {
        // configuration
        const tag = 'Android v8.0';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, tag };
          const result = { tag: props.tag };

          // Full DOM rendering
          const wrapper = mount(<ListLink {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render a tag number', () => {
          // Mock data
          const props = { ...source.props, tag };
          const result = <code>{props.tag}</code>;

          // Shallow rendering
          const wrapper = shallow(<ListLink {...props} />);

          // Assertions
          expect(wrapper).toContainReact(result);
        });

        it('should set "version" class', () => {
          // Mock data
          const style = 'version';
          const props = { ...source.props, tag };
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<ListLink {...props} />);

          // Assertions
          expect(cssModule(wrapper, result)).toBeTruthy();
        });
      });
    });

    describe('"to"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { to: props.to };

          // Full DOM rendering
          const wrapper = mount(<ListLink {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should specify a link URL', () => {
          // Mock data
          const props = { ...source.props };
          const result = { to: props.to };

          // Shallow rendering
          const wrapper = shallow(<ListLink {...props} />);

          // Assertions
          expect(wrapper.find(ExLink)).toHaveProp(result);
        });
      });
    });

    describe('"v"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { v: props.v };

          // Full DOM rendering
          const wrapper = mount(<ListLink />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT render a version number', () => {
          // Mock data
          const props = { ...source.props };
          const result = <code>v{props.v}</code>;

          // Shallow rendering
          const wrapper = shallow(<ListLink />);

          // Assertions
          expect(wrapper).not.toContainReact(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const v = '0.1.0';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, v };
          const result = { v: props.v };

          // Full DOM rendering
          const wrapper = mount(<ListLink {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render a version number', () => {
          // Mock data
          const props = { ...source.props, v };
          const result = <code>v{props.v}</code>;

          // Shallow rendering
          const wrapper = shallow(<ListLink {...props} />);

          // Assertions
          expect(wrapper).toContainReact(result);
        });

        it('should set "version" class', () => {
          // Mock data
          const style = 'version';
          const props = { ...source.props, v };
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<ListLink {...props} />);

          // Assertions
          expect(cssModule(wrapper, result)).toBeTruthy();
        });
      });
    });
  });
});
