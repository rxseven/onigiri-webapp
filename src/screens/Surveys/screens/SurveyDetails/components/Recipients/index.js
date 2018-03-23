// Module dependencies
import React from 'react';

import { CardSubtitle } from '../../../../../../components/shared/base/Card';
import JSXwrapper from '../../../../../../components/shared/helpers/JSXwrapper';

// Constants
import PROP_TYPES from '../../../../../../constants/models/propTypes';
import STATE_MODELS from '../../../../../../constants/models/state';
import CSS from '../../../../../../constants/string/css';

// Declare prop types and default props
const propTypes = PROP_TYPES.pattern.asynchronous;
const defaultProps = STATE_MODELS.pattern.asynchronous;

// Component
const Recipients = () => (
  <JSXwrapper>
    <hr />
    <CardSubtitle options={CSS.margin.MB04}>Recipients</CardSubtitle>
  </JSXwrapper>
);

// Specify prop types and default values for props
Recipients.propTypes = propTypes;
Recipients.defaultProps = defaultProps;

// Module exports
export default Recipients;
