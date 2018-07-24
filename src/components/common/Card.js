// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';
import { Link } from 'react-router-dom';

import CSS from 'constants/string/css';

// Declare prop types and default props
const propTypes = exact({
  body: { children: PropTypes.node.isRequired },
  container: {
    alignment: PropTypes.string,
    background: PropTypes.string,
    children: PropTypes.node.isRequired,
    end: PropTypes.bool,
    marginBottom: PropTypes.string,
    options: PropTypes.string,
    text: PropTypes.string
  },
  footer: { children: PropTypes.node.isRequired },
  header: { children: PropTypes.node.isRequired },
  link: {
    children: PropTypes.node.isRequired,
    link: PropTypes.string.isRequired
  },
  subtitle: {
    bold: PropTypes.bool,
    children: PropTypes.node.isRequired,
    options: PropTypes.string
  },
  text: {
    children: PropTypes.node.isRequired,
    options: PropTypes.string
  },
  title: {
    children: PropTypes.node.isRequired,
    options: PropTypes.string
  }
});

const defaultProps = {
  container: {
    end: false,
    marginBottom: CSS.margin.MB04,
    options: null
  },
  subtitle: {
    bold: false,
    options: null
  },
  text: { options: null },
  title: { options: null }
};

// Card container
export const Card = ({
  alignment, background, children, end, marginBottom, options, text
}) => (
  <div
    className={cx(
      'card',
      alignment && `${alignment}`,
      background && `bg-${background}`,
      !end && marginBottom,
      options,
      text && `text-${text}`
    )}
  >
    {children}
  </div>
);

// Card body
export const CardBody = ({ children }) => <div className="card-body">{children}</div>;

// Card footer
export const CardFooter = ({ children }) => (
  <div className="card-footer text-muted">{children}</div>
);

// Card header
export const CardHeader = ({ children }) => <div className="card-header">{children}</div>;

// Card link
export const CardLink = ({ children, link }) => (
  <Link className="card-link" to={link}>
    {children}
  </Link>
);

// Card subtitle
export const CardSubtitle = ({ bold, children, options }) => (
  <h6 className={cx('card-title', bold && 'font-weight-bold', options)}>{children}</h6>
);

// Card text
export const CardText = ({ children, options }) => (
  <p className={cx('card-text', options)}>{children}</p>
);

// Card title
export const CardTitle = ({ children, options }) => (
  <h5 className={cx('card-title', options)}>{children}</h5>
);

// Specify prop types and default values for props
Card.propTypes = propTypes.container;
CardBody.propTypes = propTypes.body;
CardFooter.propTypes = propTypes.footer;
CardHeader.propTypes = propTypes.header;
CardLink.propTypes = propTypes.link;
CardSubtitle.propTypes = propTypes.subtitle;
CardText.propTypes = propTypes.text;
CardTitle.propTypes = propTypes.title;

Card.defaultProps = defaultProps.container;
CardSubtitle.defaultProps = defaultProps.subtitle;
CardTitle.defaultProps = defaultProps.title;
