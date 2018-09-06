// @flow
// Dependencies
import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Components and HOCs
import { Card, CardBody, CardHeader, CardSubtitle } from 'components/common/Card';
import { List, ListItem, ListContent, ListLabel, ListLink } from 'components/common/List';

// Companion files
import '../../styles.scss';

// Static types
type Return = React.Node;

// Component
const Technical = (): Return => (
  <React.Fragment>
    <div>
      <p>Below is the list of technology stack and services I use to build and run this project.</p>
    </div>

    <Tabs className="pills">
      <TabList className="nav nav-pills">
        <Tab className="nav-item" selectedClassName="active">
          <span className="nav-link">Production</span>
        </Tab>
        <Tab className="nav-item" selectedClassName="active">
          <span className="nav-link">Client</span>
        </Tab>
        <Tab className="nav-item" selectedClassName="active">
          <span className="nav-link">Server</span>
        </Tab>
      </TabList>

      <TabPanel className="nav-content">
        <Card>
          <CardHeader>Infrastructure</CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <ListLabel>Cloud platform as a service</ListLabel>
                <ListContent>
                  <ListLink to="https://www.heroku.com">
                    <span styleName="heroku" />
                    Heroku
                  </ListLink>
                  <ul styleName="specs">
                    <li>
                      <span styleName="label">Plan</span>
                      <span styleName="content">Free</span>
                    </li>
                    <li>
                      <span styleName="label">RAM</span>
                      <span styleName="content">512 MB</span>
                    </li>
                    <li>
                      <span styleName="label">Sleep</span>
                      <span styleName="content">After 30 mins of inactivity</span>
                    </li>
                    <li>
                      <span styleName="label">Dedicated</span>
                      <span styleName="content">No</span>
                    </li>
                    <li>
                      <span styleName="label">Region</span>
                      <span styleName="content">United States</span>
                    </li>
                  </ul>
                </ListContent>
              </ListItem>
              <hr />
              <ListItem end>
                <ListLabel>Database as a service for MongoDB</ListLabel>
                <ListContent>
                  <ListLink to="https://mlab.com">
                    <span styleName="mlab" />
                    mLab
                  </ListLink>
                  <ul styleName="specs">
                    <li>
                      <span styleName="label">Plan</span>
                      <span styleName="content">Sandbox</span>
                    </li>
                    <li>
                      <span styleName="label">MongoDB</span>
                      <span styleName="content">v3.4.13 (MMAPv1)</span>
                    </li>
                    <li>
                      <span styleName="label">RAM</span>
                      <span styleName="content">Variable</span>
                    </li>
                    <li>
                      <span styleName="label">Storage</span>
                      <span styleName="content">0.5 GB</span>
                    </li>
                    <li>
                      <span styleName="label">Provider</span>
                      <span styleName="content">Amazon Web Services</span>
                    </li>
                    <li>
                      <span styleName="label">Region</span>
                      <span styleName="content">US East (Virginia) (us-east-1)</span>
                    </li>
                    <li>
                      <span styleName="label">Server</span>
                      <span styleName="content">Single shared database</span>
                    </li>
                    <li>
                      <span styleName="label">Process</span>
                      <span styleName="content">Running on shared VM</span>
                    </li>
                  </ul>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Third-party services</CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <ListLabel>Cloud-based email</ListLabel>
                <ListContent>
                  <ListLink to="https://sendgrid.com">
                    <span styleName="sendgrid" />
                    SendGrid
                  </ListLink>
                  <ul styleName="specs">
                    <li>
                      <span styleName="label">Plan</span>
                      <span styleName="content">Free</span>
                    </li>
                    <li>
                      <span styleName="label">Limitation</span>
                      <span styleName="content">Send 100 emails/day</span>
                    </li>
                  </ul>
                </ListContent>
              </ListItem>

              <hr />

              <ListItem>
                <ListLabel>Online payment platform</ListLabel>
                <ListContent>
                  <ListLink to="https://stripe.com/checkout">
                    <span styleName="stripe" />
                    Stripe
                  </ListLink>
                  <ul styleName="specs">
                    <li>
                      <span styleName="label">Plan</span>
                      <span styleName="content">Sandbox</span>
                    </li>
                    <li>
                      <span styleName="label">Services</span>
                      <span styleName="content">Checkout</span>
                    </li>
                  </ul>
                </ListContent>
              </ListItem>

              <hr />

              <ListItem>
                <ListLabel>Social networking platform</ListLabel>
                <ListContent>
                  <ListLink to="https://developers.facebook.com/products/account-creation">
                    <span styleName="facebook" />
                    Facebook Platform
                  </ListLink>
                  <ul styleName="specs">
                    <li>
                      <span styleName="label">Plan</span>
                      <span styleName="content">Free</span>
                    </li>
                    <li>
                      <span styleName="label">Services</span>
                      <span styleName="content">Facebook Login</span>
                    </li>
                  </ul>
                </ListContent>
              </ListItem>

              <hr />

              <ListItem>
                <ListLabel>Cloud computing, Hosting, and APIs</ListLabel>
                <ListContent>
                  <ListLink to="https://cloud.google.com">
                    <span styleName="google" />
                    Google Cloud Platform
                  </ListLink>
                  <ul styleName="specs">
                    <li>
                      <span styleName="label">Plan</span>
                      <span styleName="content">Free</span>
                    </li>
                    <li>
                      <span styleName="label">Services</span>
                      <span styleName="content">OAuth client ID</span>
                    </li>
                  </ul>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card end>
          <CardHeader>Authoring services</CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <ListLabel>Web-based hosting service for version control using Git</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com">
                    <span styleName="github" />
                    GitHub
                  </ListLink>
                  <ul styleName="specs">
                    <li>
                      <span styleName="label">Plan</span>
                      <span styleName="content">Free</span>
                    </li>
                    <li>
                      <span styleName="label">Services</span>
                      <span styleName="content">Version control, deployment</span>
                    </li>
                  </ul>
                </ListContent>
              </ListItem>

              <hr />

              <ListItem>
                <ListLabel>Continuous integration</ListLabel>
                <ListContent>
                  <ListLink to="https://travis-ci.org">
                    <span styleName="travis" />
                    Travis CI
                  </ListLink>
                  <ul styleName="specs">
                    <li>
                      <span styleName="label">Plan</span>
                      <span styleName="content">Open source</span>
                    </li>
                    <li>
                      <span styleName="label">Services</span>
                      <span styleName="content">CI &amp; CD</span>
                    </li>
                  </ul>
                </ListContent>
              </ListItem>

              <hr />

              <ListItem end>
                <ListLabel>Test coverage history and statistics</ListLabel>
                <ListContent>
                  <ListLink to="https://coveralls.io">
                    <span styleName="coveralls" />
                    Coveralls
                  </ListLink>
                  <ul styleName="specs">
                    <li>
                      <span styleName="label">Plan</span>
                      <span styleName="content">Open source</span>
                    </li>
                    <li>
                      <span styleName="label">Services</span>
                      <span styleName="content">Test coverage history and statistics</span>
                    </li>
                  </ul>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>
      </TabPanel>
      <TabPanel className="nav-content">
        <Card>
          <CardHeader>Core</CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <ListLabel>JavaScript library for building user interfaces</ListLabel>
                <ListContent>
                  <span styleName="react" />
                  <ListLink to="https://reactjs.org" v="16.3.2">
                    React
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>JavaScript library for managing application state</ListLabel>
                <ListContent>
                  <span styleName="redux" />
                  <ListLink to="https://redux.js.org" v="5.0.7">
                    Redux
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem end>
                <ListLabel>Frontend component library</ListLabel>
                <ListContent>
                  <span styleName="bootstrap" />
                  <ListLink to="https://getbootstrap.com" v="4.0.0">
                    Bootstrap
                  </ListLink>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card end>
          <CardHeader>Dependencies</CardHeader>
          <CardBody>
            <CardSubtitle>React &amp; Redux</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>React bindings for Redux</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/reactjs/react-redux">React Redux</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>
                  A Redux middleware that is designed to make handling side effects nice and simple
                </ListLabel>
                <ListContent>
                  <ListLink to="https://redux-saga.js.org">Redux Saga</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>
                  Utility for creating an equivalent function of Redux <code>combineReducers</code>{' '}
                  that works with Immutable.js state.
                </ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/gajus/redux-immutable">Redux Immutable</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>HOC decorator for forms using Redux &amp; React</ListLabel>
                <ListContent>
                  <ListLink to="https://redux-form.com">Redux Form</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Selector library for Redux</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/reactjs/reselect">Reselect</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>A React utility belt for function components and HOCs</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/acdlite/recompose">Recompose</ListLink>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle>Data</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>Immutable collections for JavaScript</ListLabel>
                <ListContent>
                  <ListLink to="https://facebook.github.io/immutable-js/">Immutable</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>
                  Utility for normalizing and denormalizing JSON according to schema for Redux and
                  Flux applications
                </ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/paularmstrong/normalizr">normalizr</ListLink>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle>React components</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>Declarative routing for React</ListLabel>
                <ListContent>
                  <ListLink to="https://reacttraining.com/react-router/web/guides/philosophy">
                    React Router (DOM)
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>React component toolset for managing animations</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/reactjs/react-transition-group">
                    react-transition-group
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>React infinite scroll component</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/CassetteRocks/react-infinite-scroller">
                    react-infinite-scroller
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>
                  A utility provides access to the last location in React and React Router apps
                </ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/hinok/react-router-last-location">
                    react-router-last-location
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>React component to keep the scroll position of the page</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/ipatate/react-router-scroll-memory">
                    react-router-scroll-memory
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>A document head manager for React</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/nfl/react-helmet">react-helmet</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>A HOC for loading components with dynamic imports</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/jamiebuilds/react-loadable">
                    react-loadable
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>
                  A wrapper around react-loadable to load elements that are visible on the page
                </ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/stratiformltd/react-loadable-visibility">
                    react-loadable-visibility
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>An accessible modal dialog component for React</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/reactjs/react-modal">react-modal</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>An accessible and easy tab component for React</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/reactjs/react-tabs">react-tabs</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>An alerts / notifications for React</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/juliancwirko/react-s-alert">
                    react-s-alert
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>
                  React component to add custom button for scroll to top of page
                </ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/milosjanda/react-scroll-up">
                    react-scroll-up
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>
                  A HOC with a high performance that transform window sizes into props
                </ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/renatorib/react-sizes">react-sizes</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>A sticky component for React</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/captivationsoftware/react-sticky">
                    react-sticky
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>A non-prescriptive React.js dropdown toolkit</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/Fauntleroy/react-simple-dropdown">
                    react-simple-dropdown
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>A collection of loading indicators animated with CSS</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/bentatum/better-react-spinkit">
                    better-react-spinkit
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>An off-canvas sidebar component for React</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/negomi/react-burger-menu">
                    react-burger-menu
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>
                  A Redux reducer &amp; HOC decorator for use with react-burger-menu
                </ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/negomi/redux-burger-menu">
                    redux-burger-menu
                  </ListLink>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle>Third-party services and libraries for React</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>Easily inject checkout.js as a React component</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/azmenak/react-stripe-checkout">
                    react-stripe-checkout
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>React wrapper for Chart.js 2</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/jerairrest/react-chartjs-2">
                    react-chartjs-2
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>A Component React for Facebook Login</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/keppelen/react-facebook-login">
                    react-facebook-login
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>A Google OAuth log-in component for React</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/anthonyjgrove/react-google-login">
                    react-google-login
                  </ListLink>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle>Utilities</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>Promise based HTTP client</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/axios/axios">Axios</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>JavaScript utility library</ListLabel>
                <ListContent>
                  <ListLink to="https://lodash.com">Lodash</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>A practical functional library for JavaScript programmers</ListLabel>
                <ListContent>
                  <ListLink to="https://ramdajs.com">Ramda</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Utility for conditionally joining class names</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/JedWatson/classnames">classnames</ListLink>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle>Graphic</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>
                  Icon set with marks in SVG, sprite, webfont &amp; raster format
                </ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/iconic/open-iconic">Open Iconic</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Simple HTML5 Charts using the canvas element</ListLabel>
                <ListContent>
                  <ListLink to="http://www.chartjs.org">chart.js</ListLink>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle>More...</CardSubtitle>
            <List>
              <ListItem end>
                <ListLabel>Full list of dependencies</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/rxseven/onigiri-webapp/blob/master/package.json">
                    <code>package.json</code>
                  </ListLink>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>
      </TabPanel>
      <TabPanel className="nav-content">
        <Card>
          <CardHeader>Core</CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <ListLabel>JavaScript runtime</ListLabel>
                <ListContent>
                  <span styleName="node" />
                  <ListLink to="https://nodejs.org/en/" v="8.9.3">
                    Node.js
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Node.js web application framework</ListLabel>
                <ListContent>
                  <span styleName="express" />
                  <ListLink to="https://expressjs.com" v="4.16.3">
                    Express
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem end>
                <ListLabel>Cross-platform document-oriented database program</ListLabel>
                <ListContent>
                  <span styleName="mongodb" />
                  <ListLink to="https://www.mongodb.com" v="3.4.x">
                    MongoDB
                  </ListLink>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card end>
          <CardHeader>Dependencies</CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <ListLabel>Authentication library for Node.js</ListLabel>
                <ListContent>
                  <ListLink to="http://www.passportjs.org">passport</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Passport authentication strategy using JSON Web Tokens</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/themikenicholson/passport-jwt">
                    passport-jwt
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>
                  Passport strategy for authenticating with a username and password
                </ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/jaredhanson/passport-local">
                    passport-local
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>MongoDB object modeling tool</ListLabel>
                <ListContent>
                  <ListLink to="http://mongoosejs.com">mongoose</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Pagination plugin for Mongoose</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/edwardhotchkiss/mongoose-paginate">
                    mongoose-paginate
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Node.js body parsing middleware</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/expressjs/body-parser">body-parser</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Node.js paths parsing middleware</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/troch/path-parser">path-parser</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Node.js boolean parsing middleware</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/mariusc23/express-query-boolean">
                    express-query-boolean
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Express router wrapper</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/alex-whitney/express-promise-router">
                    express-promise-router
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Password hashing</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/dcodeIO/bcrypt.js">bcrypt.js</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Node.js CORS middleware</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/expressjs/cors">cors</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>JSON Web Token implementation for Node.js</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/auth0/node-jsonwebtoken">jsonwebtoken</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>JavaScript utility library</ListLabel>
                <ListContent>
                  <ListLink to="https://lodash.com">lodash</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Object schema validation</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/hapijs/joi">joi</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Node.js Gravatar library</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/emerleite/node-gravatar">gravatar</ListLink>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle>Third-party libraries for Node.js</CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>SendGrid Node.js library</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/sendgrid/sendgrid-nodejs">sendgrid</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Stripe API wrapper for Node.js</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/stripe/stripe-node">strip</ListLink>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle>More...</CardSubtitle>
            <List>
              <ListItem end>
                <ListLabel>Full list of dependencies</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/rxseven/onigiri-api/blob/master/package.json">
                    <code>package.json</code>
                  </ListLink>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>
      </TabPanel>
    </Tabs>
  </React.Fragment>
);

// Module exports
export default Technical;
