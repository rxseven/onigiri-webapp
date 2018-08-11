// @flow
// Module dependencies
import * as React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { action as toggleMenu, decorator as reduxMenu } from 'redux-burger-menu/immutable';

// Helper functions
import { generateState } from 'helpers/state';

// Components and HOCs
import Avatar from 'components/common/Avatar';
import ExLink from 'components/common/ExLink';
import Icon from 'components/common/Icon';
import Text from 'components/common/Text';
import toJS from 'HOCs/state/toJS';

// Constants
import HTML from 'constants/elements/html';
import STATE_MODELS from 'constants/models/state';
import PATHS from 'constants/router/paths';

// Types
import type { Session } from 'data/session/types';
import type { History, Location } from 'types/common/router';
import type { Asynchronous } from 'types/common/state';

// Action creators and selectors
import { signOut } from 'data/session/actions';
import { getSession } from 'data/session/reducers';
import { getAsync } from 'data/interfaces/session/reducers';

// Companion files
import MenuLink from './MenuLink';
import './styles.scss';

// Local constants
const MENU_OPEN = 'menu-open';

// Extended Menu component
const ExMenu = reduxMenu(Menu);

// Static types
type Props = {
  actions: {
    auth: {
      signOut: Function
    },
    menu: {
      toggleMenu: Function
    }
  },
  history: History,
  location: Location,
  navigation: {
    exact: boolean
  },
  state: {
    data: {
      interfaces: {
        menu: {
          isOpen: boolean
        }
      },
      session: Session
    },
    ui: {
      asynchronous: {
        signout: Asynchronous
      }
    }
  }
};

type Return = React.Element<typeof ExMenu>;

// Component
class UI extends React.Component<Props> {
  // Default props
  static defaultProps = {
    navigation: {
      exact: false
    }
  };

  // After updating occurs
  componentDidUpdate(prevProps) {
    // Close off-canvas menu
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.onToggleMenu();
    }

    // Toggle overflow content
    if (this.props.state.data.interfaces.menu.isOpen) {
      // flow-disable-next-line
      document.body.classList.add(MENU_OPEN);
    } else {
      // flow-disable-next-line
      document.body.classList.remove(MENU_OPEN);
    }
  }

  // Toggle menu
  onToggleMenu = (): void => {
    this.props.actions.menu.toggleMenu(false);
  };

  // Sign-out handler
  onSignout = (event: SyntheticEvent<HTMLButtonElement>): void => {
    // Prevent a browser from being refreshed
    event.preventDefault();

    // Sign out the current user
    this.props.actions.auth.signOut(() => {
      // Close off-canvas menu
      this.onToggleMenu();

      // Redirect to sign-in screen after the event has been emitted
      this.props.history.push({ pathname: PATHS.users.signin });
    });
  };

  // Render header
  renderHeader = ({ isAuth, user }): React.Element<typeof NavLink> | void => (
    // flow-disable-next-line
    <If condition={isAuth}>
      <NavLink activeClassName="active" styleName="header" to={PATHS.users.profile}>
        <div styleName="user">
          <div styleName="avatar">
            {/* flow-disable-next-line */}
            <Avatar url={user.photo.url} />
          </div>
          {/* flow-disable-next-line */}
          <Text>{`${user.name.firstName} ${user.name.lastName}`}</Text>
        </div>
      </NavLink>
    </If>
  );

  // Render navigation
  renderNav = ({ isAuth }): React.Element<'ul'> => (
    <ul styleName="navigation">
      <li>
        <MenuLink exact icon="home" title="Home" to={PATHS.root}>
          Home
        </MenuLink>
      </li>
      <If condition={isAuth}>
        <li>
          <MenuLink exact icon="list" title="Dashboard" to={PATHS.surveys.list}>
            Dashboard
          </MenuLink>
        </li>
      </If>
      <li>
        <MenuLink icon="info" title="About" to={PATHS.static.about}>
          About
        </MenuLink>
      </li>
      <li>
        <ExLink options="icon" to="http://www.rxseven.com">
          <span styleName="icon">
            <Icon name="comment-square" title="Me" />
          </span>
          Me
        </ExLink>
      </li>
      <li>
        <MenuLink icon="file" title="Terms" to={PATHS.static.terms}>
          Terms
        </MenuLink>
      </li>
      <li>
        <MenuLink icon="shield" title="Privay" to={PATHS.static.privacy}>
          Privacy
        </MenuLink>
      </li>
      <li>
        <ExLink options="icon" to="https://github.com/rxseven/onigiri-webapp">
          <span styleName="icon">
            <Icon name="fork" title="GitHub" />
          </span>
          View on GitHub
        </ExLink>
      </li>
    </ul>
  );

  // Render profile
  renderProfile = ({ asynchronous, isAuth, user }): React.Element<'ul'> => (
    <ul styleName="navigation">
      <Choose>
        <When condition={isAuth}>
          <li>
            <MenuLink icon="cog" title="Credits &amp; Profile" to={PATHS.users.profile}>
              Credits &amp; Profile
            </MenuLink>
          </li>
          <li>
            <button onClick={this.onSignout} styleName="signout" type="button">
              <span styleName="icon">
                <Icon name="account-logout" title="Log out" />
              </span>
              <Choose>
                <When condition={asynchronous.signout.loading}>
                  <span styleName="leaving">Logging out...</span>
                </When>
                <Otherwise>
                  <span>Log out</span>
                </Otherwise>
              </Choose>
            </button>
          </li>
        </When>
        <Otherwise>
          <li>
            <MenuLink icon="account-login" title="Privay" to={PATHS.users.signin}>
              Sign in
            </MenuLink>
          </li>
        </Otherwise>
      </Choose>
    </ul>
  );

  // Render component
  render(): Return {
    // Variables
    const { data: { session: { authorization, user } }, ui: { asynchronous } } = this.props.state;
    const isAuth = !!(authorization && user);

    // Options
    const menuOptions = {
      customBurgerIcon: false,
      customCrossIcon: false,
      outerContainerId: HTML.wrapper,
      pageWrapId: HTML.body,
      width: '85%'
    };

    // View
    return (
      <ExMenu {...menuOptions}>
        <div>
          {this.renderHeader({ isAuth, user })}
          {this.renderNav({ isAuth })}
          {this.renderProfile({ asynchronous, isAuth, user })}
        </div>
      </ExMenu>
    );
  }
}

// Map state to props
const mapStateToProps = (state: any): any =>
  generateState(STATE_MODELS.immutable
    .setIn(['data', 'interfaces', 'menu'], state.get('burgerMenu'))
    .setIn(['data', 'session'], getSession(state))
    .setIn(['ui', 'asynchronous'], getAsync(state)));

// Map dispatch to props
const mapDispatchToProps = (dispatch: any): any => ({
  actions: {
    auth: bindActionCreators({ signOut }, dispatch),
    menu: bindActionCreators({ toggleMenu }, dispatch)
  }
});

// Connect component to application state
const container = withRouter(connect(mapStateToProps, mapDispatchToProps)(toJS(UI)));

// Module exports
export default container;
