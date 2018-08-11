// @flow
// Module dependencies
import * as React from 'react';
import ScrollToTop from 'react-scroll-up';

// Components and HOCs
import Icon from 'components/common/Icon';

// Companion files
import './styles.scss';

// Static types
type Return = React.Element<'div'>;

// Configuration
const options = {
  showUnder: 160,
  style: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0
  }
};

// Component
const ScrollTop = (): Return => (
  <div styleName="wrapper">
    <div styleName="pin">
      <ScrollToTop {...options}>
        <span styleName="button">
          <Icon name="data-transfer-upload" title="Scroll Top" />
        </span>
      </ScrollToTop>
    </div>
  </div>
);

// Module exports
export default ScrollTop;
