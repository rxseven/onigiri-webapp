// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Constants
import CSS from 'constants/string/css';

// Component types
import CardBody from '../CardBody';
import CardFooter from '../CardFooter';
import CardHeader from '../CardHeader';

// Static types
type Props = {
  alignment: string,
  background: string,
  children:
    | React.Element<typeof CardBody>
    | React.Element<typeof CardFooter>
    | React.Element<typeof CardHeader>,
  end: boolean,
  marginBottom: string,
  options: string,
  text: string
};

type Return = React.Element<'div'>;

// Declare default props
const defaultProps = {
  alignment: '',
  background: '',
  end: false,
  marginBottom: CSS.margin.MB04,
  options: '',
  text: ''
};

// Component
const CardContainer = ({
  alignment,
  background,
  children,
  end,
  marginBottom,
  options,
  text
}: Props): Return => (
  <div
    className={cx(
      'card',
      !!alignment && `${alignment}`,
      !!background && `bg-${background}`,
      !end && marginBottom,
      !!options && options,
      !!text && `text-${text}`
    )}
  >
    {children}
  </div>
);

// Specify default values for props
CardContainer.defaultProps = defaultProps;

// Module exports
export default CardContainer;
