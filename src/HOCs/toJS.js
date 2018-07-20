// Module dependencies
import { Iterable } from 'immutable';
import React from 'react';

// Component
const toJS = WrappedComponent => (wrappedComponentProps) => {
  // Variables
  const KEY = 0;
  const VALUE = 1;

  // Map Immutable props to pure JavaScript props
  const propsJS = Object.entries(wrappedComponentProps).reduce((newProps, wrappedComponentProp) => {
    // eslint-disable-next-line
    newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(wrappedComponentProp[VALUE])
      ? wrappedComponentProp[VALUE].toJS()
      : wrappedComponentProp[VALUE];
    return newProps;
  }, {});

  return <WrappedComponent {...propsJS} />;
};

// Module exports
export default toJS;
