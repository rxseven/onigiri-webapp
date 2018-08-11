// @flow
// Module dependencies
import * as React from 'react';

// Companion files
import './styles.scss';

// Static types
type Props = { url: string };
type Return = React.Element<'div'>;

// Component
const Avatar = ({ url }: Props): Return => (
  <div className="avatar" styleName="wrapper">
    <img alt="Avtar" src={url} styleName="photo" />
  </div>
);

// Module exports
export default Avatar;
