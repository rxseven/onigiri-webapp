// @flow
// Module dependencies
import * as React from 'react';

// Component types
import HeroBody from '../HeroBody';
import HeroHeader from '../HeroHeader';

// Static types
type Props = {
  children: React.Element<typeof HeroBody> | React.Element<typeof HeroHeader>
};

type Return = React.Element<'div'>;

// Component
const HeroContainer = ({ children }: Props): Return => <div className="jumbotron">{children}</div>;

// Module exports
export default HeroContainer;
