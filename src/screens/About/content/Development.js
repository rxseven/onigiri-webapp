// Dependencies
import cx from 'classnames';
import React, { Fragment } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Card, CardBody, CardHeader, CardSubtitle } from 'components/common/Card';
import {
  List,
  ListItem,
  ListContent,
  ListGroup,
  ListGroupItem,
  ListLabel,
  ListLink
} from 'components/common/List';
import Text from 'components/common/Text';

// Constants
import CSS from 'constants/string/css';

// Component
const Development = () => (
  <Fragment>
    <div>
      <p>
        Below is the list of my development workflow and tools I use on a daily basis to build this
        project. I can’t include everything, but here are a couple of my favorites and other widely
        used ones.
      </p>
    </div>

    <Tabs className="pills">
      <TabList className="nav nav-pills">
        <Tab className="nav-item" selectedClassName="active">
          <span className="nav-link">Development</span>
        </Tab>
        <Tab className="nav-item" selectedClassName="active">
          <span className="nav-link">Testing</span>
        </Tab>
      </TabList>

      <TabPanel className="nav-content">
        <Card>
          <CardHeader>Mothodlogy</CardHeader>
          <CardBody>
            <CardSubtitle>Patterns &amp; Standards</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>Git branching model</ListLabel>
                <ListContent>
                  <ListLink to="http://nvie.com/posts/a-successful-git-branching-model/">
                    Git-flow
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Style guides</ListLabel>
                <ListContent>
                  <ListGroup>
                    <ListGroupItem>
                      <ListLink to="https://github.com/airbnb/javascript">
                        Airbnb’s JavaScript
                      </ListLink>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListLink to="https://github.com/airbnb/javascript/tree/master/react">
                        Airbnb’s React/JSX
                      </ListLink>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListLink to="https://github.com/airbnb/css">Airbnb’s CSS / Sass</ListLink>
                    </ListGroupItem>
                  </ListGroup>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Versioning convention</ListLabel>
                <ListContent>
                  <ListLink to="https://semver.org">Semantic versioning</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Design</ListLabel>
                <ListContent>
                  <ListLink to="https://en.wikipedia.org/wiki/Responsive_web_design">
                    Mobile-first responsive web design
                  </ListLink>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle>Implementation &amp; Syntax</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>JavaScript syntax</ListLabel>
                <ListContent>
                  <ListGroup>
                    <ListGroupItem>
                      <ListLink to="https://babeljs.io/learn-es2015/">ES2015</ListLink>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListLink to="https://reactjs.org/docs/introducing-jsx.html">JSX</ListLink>
                    </ListGroupItem>
                  </ListGroup>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Sass syntax</ListLabel>
                <ListContent>
                  <ListLink to="http://sass-lang.com">SCSS</ListLink>
                </ListContent>
              </ListItem>
              <ListItem end>
                <ListLabel>CSS implementation</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/css-modules/css-modules">CSS modules</ListLink>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Development</CardHeader>
          <CardBody>
            <CardSubtitle>Machines</CardSubtitle>
            <List>
              <ListItem>
                <ListContent>
                  <ListGroup>
                    <ListGroupItem>
                      <ListLink to="https://www.apple.com/mac-mini/">Mac mini</ListLink>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListLink to="https://www.apple.com/macbook-pro/">MacBook Pro</ListLink>
                    </ListGroupItem>
                  </ListGroup>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle>Environment</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>Operating system</ListLabel>
                <ListContent>
                  <ListLink to="https://www.apple.com/lae/macos/high-sierra/" v="10.13.6">
                    macOS High Sierra
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>JavaScript runtime</ListLabel>
                <ListContent>
                  <ListLink to="https://nodejs.org/en/" v="8.9.3">
                    Node.js
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Package managers</ListLabel>
                <ListContent>
                  <ListGroup>
                    <ListGroupItem>
                      <ListLink to="https://nodejs.org/en/" v="5.5.1">
                        NPM
                      </ListLink>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListLink to="https://nodejs.org/en/" v="1.3.2">
                        Yarn
                      </ListLink>
                    </ListGroupItem>
                  </ListGroup>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle>Authoring tools</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>Code editor and extensions</ListLabel>
                <ListContent>
                  <ListLink to="https://code.visualstudio.com">Visual Studio Code</ListLink>
                  <ul className={cx(CSS.margin.MB00, CSS.margin.MT02)}>
                    <li>
                      <ListLink to="https://github.com/dzannotti/vscode-babel/">
                        Babel ES6/ES7
                      </ListLink>
                    </li>
                    <li>
                      <ListLink to="https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss">
                        SCSS IntelliSense
                      </ListLink>
                    </li>
                    <li>
                      <ListLink to="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">
                        ESLint
                      </ListLink>
                    </li>
                    <li>
                      <ListLink to="https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint">
                        Stylelint
                      </ListLink>
                    </li>
                    <li>
                      <ListLink to="https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode">
                        Flow
                      </ListLink>
                    </li>
                    <li>
                      <ListLink to="https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest">
                        Jest
                      </ListLink>
                    </li>
                    <li>
                      <ListLink to="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">
                        Prettier
                      </ListLink>
                    </li>
                    <li>
                      <ListLink to="https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome">
                        Debugger for Chrome
                      </ListLink>
                    </li>
                    <li>
                      <ListLink to="https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv">
                        DotENV
                      </ListLink>
                    </li>
                    <li>
                      <ListLink to="https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script">
                        npm
                      </ListLink>
                    </li>
                  </ul>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Web browser and debugging tools</ListLabel>
                <ListContent>
                  <ListLink to="https://www.google.com/chrome/">Chrome</ListLink>
                  <ul className={cx(CSS.margin.MB00, CSS.margin.MT02)}>
                    <li>
                      <ListLink to="https://developer.chrome.com/devtools">
                        Chrome DevTools
                      </ListLink>
                    </li>
                    <li>
                      <ListLink to="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi">
                        React Developer Tools
                      </ListLink>
                    </li>
                    <li>
                      <ListLink to="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd">
                        Redux DevTools
                      </ListLink>
                    </li>
                    <li>
                      <ListLink to="https://chrome.google.com/webstore/detail/immutablejs-object-format/hgldghadipiblonfkkicmgcbbijnpeog">
                        Immutable.js Object Formatter
                      </ListLink>
                    </li>
                  </ul>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>HTTP client</ListLabel>
                <ListContent>
                  <ListLink to="https://www.getpostman.com">Postman</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>GUI for Git</ListLabel>
                <ListContent>
                  <ListGroup>
                    <ListGroupItem>
                      <ListLink to="https://www.git-tower.com">Tower</ListLink>{' '}
                      <Text options="text-secondary" small>
                        (primary)
                      </Text>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListLink to="https://www.sourcetreeapp.com">Sourcetree</ListLink>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListLink to="https://desktop.github.com">GitHub Desktop</ListLink>
                    </ListGroupItem>
                  </ListGroup>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>GUI for MongoDB</ListLabel>
                <ListContent>
                  <ListLink to="https://robomongo.org">Robo 3T</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Project management tool</ListLabel>
                <ListContent>
                  <ListLink to="https://trello.com">Trello</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Photo editing tool</ListLabel>
                <ListContent>
                  <ListLink to="http://adobe.com/photoshop">Adobe Photoshop CC</ListLink>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle>Build tool &amp; Starter kit</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>React build tool &amp; Development server</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/facebook/create-react-app">
                    Create React App
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>React & Redux starter kit with best practices</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/rxseven/setup-react-app">
                    Setup React App
                  </ListLink>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle>Development tools</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>JavaScript module bundler</ListLabel>
                <ListContent>
                  <ListLink to="https://webpack.js.org">Webpack</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>JavaScript compiler</ListLabel>
                <ListContent>
                  <ListLink to="https://babeljs.io">Babel</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>React hot reloading plugin</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/gaearon/react-hot-loader">
                    React Hot Loader
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Git hooks</ListLabel>
                <ListContent>
                  <ListGroup>
                    <ListGroupItem>
                      <ListLink to="https://github.com/typicode/husky">Husky</ListLink>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListLink to="https://github.com/okonet/lint-staged">Lint-staged</ListLink>
                    </ListGroupItem>
                  </ListGroup>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Node.js bindings to libSass</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/sass/node-sass">node-sass</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>A tool for transforming CSS with JavaScript</ListLabel>
                <ListContent>
                  <ListLink to="https://postcss.org">PostCSS</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Monitor for any changes in Node.js application</ListLabel>
                <ListContent>
                  <ListLink to="http://nodemon.io">nodemon</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>HTTP request logger middleware for Node.js</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/expressjs/morgan">Morgan</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Linting utility for JavaScript</ListLabel>
                <ListContent>
                  <ListLink to="https://eslint.org">ESLint</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Linting utility for stylesheet</ListLabel>
                <ListContent>
                  <ListLink to="https://stylelint.io">Stylelint</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Static type checker for JavaScript</ListLabel>
                <ListContent>
                  <ListLink to="https://flow.org">Flow</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Code formatter</ListLabel>
                <ListContent>
                  <ListLink to="https://prettier.io">Prettier</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Cross platform setting of environment scripts</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/kentcdodds/cross-env">cross-env</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Runtime type checking for React props</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/facebook/prop-types">PropTypes</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Bash script to manage multiple active Node.js versions</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/creationix/nvm">nvm</ListLink>
                </ListContent>
              </ListItem>
              <ListItem end>
                <ListLabel>
                  A tool for analyzing and debuging JavaScript (or Sass or LESS)
                </ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/danvk/source-map-explorer">
                    Source Map Explorer
                  </ListLink>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card end>
          <CardHeader>Third-party services</CardHeader>
          <CardBody>
            <CardSubtitle>Hosting &amp; Distributing services</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>Hosting service for version control</ListLabel>
                <ListContent>
                  <ListLink to="http://github.com/">GitHub</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Cloud platform as a service</ListLabel>
                <ListContent>
                  <ListLink to="https://www.heroku.com">Heroku</ListLink>
                </ListContent>
              </ListItem>
              <ListItem end>
                <ListLabel>Database as a service for MongoDB</ListLabel>
                <ListContent>
                  <ListLink to="https://mlab.com">mLab</ListLink>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle>Continuous Integration services</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>CI &amp; CD services</ListLabel>
                <ListContent>
                  <ListLink to="https://travis-ci.org">Travis CI</ListLink>
                </ListContent>
              </ListItem>
              <ListItem end>
                <ListLabel>Test coverage history &amp; statistics services</ListLabel>
                <ListContent>
                  <ListLink to="https://coveralls.io">Coveralls</ListLink>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle>Software as services</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>Cloud-based email service</ListLabel>
                <ListContent>
                  <ListLink to="https://sendgrid.com">SendGrid</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Online payment platform</ListLabel>
                <ListContent>
                  <ListLink to="https://stripe.com/checkout">Stripe</ListLink>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle>Platforms</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>Social Networking Platform</ListLabel>
                <ListContent>
                  <ListLink to="https://developers.facebook.com/products/account-creation">
                    Facebook Platform
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem end>
                <ListLabel>Cloud computing, Hosting services &amp; APIs</ListLabel>
                <ListContent>
                  <ListLink to="https://cloud.google.com/">Google Cloud Platform</ListLink>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle>Tools</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>CLI for managing Heroku apps</ListLabel>
                <ListContent>
                  <ListLink to="https://devcenter.heroku.com/articles/heroku-cli">
                    Heroku CLI
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Plugin for Heroku CLI that can manipulate the repo</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/heroku/heroku-repo">Heroku Repo plugin</ListLink>
                </ListContent>
              </ListItem>
              <ListItem end>
                <ListLabel>Coveralls.io support for Node.js</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/nickmerwin/node-coveralls">Coveralls</ListLink>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>
      </TabPanel>
      <TabPanel className="nav-content">
        <Card>
          <CardHeader>Environment &amp; Workflow</CardHeader>
          <CardBody>
            <CardSubtitle>React &amp; Redux</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>JavaScript testing framework</ListLabel>
                <ListContent>
                  <ListLink to="https://facebook.github.io/jest/">Jest</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>JavaScript testing utilities for React</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/airbnb/enzyme">Enzyme</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Enzyme adapter for React</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/airbnb/enzyme/tree/master/packages/enzyme-adapter-react-16">
                    enzyme-adapter-react-16
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Jest assertions for Enzyme</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/FormidableLabs/enzyme-matchers">
                    jest-enzyme
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>ESLint plugin for Jest</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/jest-community/eslint-plugin-jest">
                    eslint-plugin-jest package
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Test Renderer</ListLabel>
                <ListContent>
                  <ListLink to="https://reactjs.org/docs/test-renderer.html">
                    react-test-renderer
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem end>
                <ListLabel>
                  A mock store for testing Redux async action creators and middleware
                </ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/dmitry-zaets/redux-mock-store">
                    redux-mock-store
                  </ListLink>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle>Node.js</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>JavaScript testing framework</ListLabel>
                <ListContent>
                  <ListLink to="https://mochajs.org">Mocha</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>JavaScript assertion library</ListLabel>
                <ListContent>
                  <ListLink to="http://www.chaijs.com">Chai</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>HTTP Response assertions for Chai</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/chaijs/chai-http">Chai HTTP</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>A utility to extend Chai with assertions about promises</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/domenic/chai-as-promised">
                    Chai assertions for Promises
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem end>
                <ListLabel>ESLint rules for Mocha</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/lo1tuma/eslint-plugin-mocha">
                    eslint-plugin-mocha
                  </ListLink>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card end>
          <CardHeader>Devices</CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <ListLabel>Mac</ListLabel>
                <ListContent>
                  <ListLink to="https://www.apple.com/macos/high-sierra/" v="10.13.6">
                    macOS High Sierra
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Mobile simulators</ListLabel>
                <ListContent>
                  <ListGroup>
                    <ListGroupItem>
                      <ListLink to="https://developer.apple.com/xcode/" v="10.0">
                        Xcode - iOS Simulator
                      </ListLink>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListLink to="https://www.google.com/chrome/" v="67.0.3396.99">
                        Chrome DevTools
                      </ListLink>
                    </ListGroupItem>
                  </ListGroup>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Web browsers (macOS)</ListLabel>
                <ListContent>
                  <ListGroup>
                    <ListGroupItem>
                      <ListLink to="https://www.apple.com/safari/" v="11.1.2">
                        Safari
                      </ListLink>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListLink to="https://www.mozilla.org/en-US/firefox/" v="61.0.1">
                        Firefox
                      </ListLink>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListLink to="https://www.google.com/chrome/" v="67.0.3396.99">
                        Chrome
                      </ListLink>
                    </ListGroupItem>
                  </ListGroup>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <List>
              <ListItem>
                <ListLabel>iPhone</ListLabel>
                <ListContent>
                  <ListGroup>
                    <ListGroupItem>
                      <ListLink to="https://www.apple.com/ios/ios-11/" tag="iOS v11.4.1">
                        iPhone 6
                      </ListLink>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListLink to="https://www.apple.com/ios/" tag="iOS v10.3.3">
                        iPhone 5
                      </ListLink>
                    </ListGroupItem>
                  </ListGroup>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Android phone</ListLabel>
                <ListContent>
                  <ListLink to="https://www.android.com/versions/oreo-8-0/" tag="Android v8.0">
                    Samsung Galaxy S8
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem end>
                <ListLabel>Tablet</ListLabel>
                <ListContent>
                  <ListGroup>
                    <ListGroupItem>
                      <ListLink to="https://www.apple.com/ios/ios-11/" tag="iOS v11.4.1">
                        iPad 9.7-inch (2018)
                      </ListLink>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListLink to="https://www.apple.com/ios/ios-11/" tag="iOS v11.4.1">
                        iPad mini 3
                      </ListLink>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListLink to="https://www.apple.com/ios/ios-11/" tag="iOS v9.3.2">
                        iPad mini 2
                      </ListLink>
                    </ListGroupItem>
                  </ListGroup>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>
      </TabPanel>
    </Tabs>
  </Fragment>
);

// Module exports
export default Development;
