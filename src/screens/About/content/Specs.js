// Dependencies
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Card, CardBody, CardHeader, CardSubtitle } from '../../../components/shared/base/Card';
import {
  List,
  ListItem,
  ListContent,
  ListLabel,
  ListLink
} from '../../../components/shared/base/List';
import JSXwrapper from '../../../components/shared/helpers/JSXwrapper';

// Peer dependencies
import styles from '../styles.scss';

// Component
const Technical = () => (
  <JSXwrapper>
    <div>
      <p>
        Below is the list of technology stack and third party services I use to build and run this
        project.
      </p>
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
                    <span className={styles.heroku} />
                    Heroku
                  </ListLink>
                  <ul className={styles.specs}>
                    <li>
                      <span className={styles.label}>Plan</span>
                      <span className={styles.content}>Free</span>
                    </li>
                    <li>
                      <span className={styles.label}>RAM</span>
                      <span className={styles.content}>512 MB</span>
                    </li>
                    <li>
                      <span className={styles.label}>Sleep</span>
                      <span className={styles.content}>After 30 mins of inactivity</span>
                    </li>
                    <li>
                      <span className={styles.label}>Dedicated</span>
                      <span className={styles.content}>No</span>
                    </li>
                    <li>
                      <span className={styles.label}>Region</span>
                      <span className={styles.content}>United States</span>
                    </li>
                  </ul>
                </ListContent>
              </ListItem>
              <hr />
              <ListItem end>
                <ListLabel>Database as a service for MongoDB</ListLabel>
                <ListContent>
                  <ListLink to="https://mlab.com">
                    <span className={styles.mlab} />
                    mLab
                  </ListLink>
                  <ul className={styles.specs}>
                    <li>
                      <span className={styles.label}>Plan</span>
                      <span className={styles.content}>Sandbox</span>
                    </li>
                    <li>
                      <span className={styles.label}>MongoDB</span>
                      <span className={styles.content}>v3.4.10</span>
                    </li>
                    <li>
                      <span className={styles.label}>RAM</span>
                      <span className={styles.content}>Variable</span>
                    </li>
                    <li>
                      <span className={styles.label}>Storage</span>
                      <span className={styles.content}>0.5 GB</span>
                    </li>
                    <li>
                      <span className={styles.label}>Provider</span>
                      <span className={styles.content}>Amazon Web Services</span>
                    </li>
                    <li>
                      <span className={styles.label}>Region</span>
                      <span className={styles.content}>US East (Virginia) (us-east-1)</span>
                    </li>
                    <li>
                      <span className={styles.label}>Server</span>
                      <span className={styles.content}>Single shared database</span>
                    </li>
                    <li>
                      <span className={styles.label}>Process</span>
                      <span className={styles.content}>Running on shared VM</span>
                    </li>
                  </ul>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card end>
          <CardHeader>
            3<sup>rd</sup> party services
          </CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <ListLabel>Cloud-based email service</ListLabel>
                <ListContent>
                  <ListLink to="https://sendgrid.com">
                    <span className={styles.sendgrid} />
                    SendGrid
                  </ListLink>
                  <ul className={styles.specs}>
                    <li>
                      <span className={styles.label}>Plan</span>
                      <span className={styles.content}>Free</span>
                    </li>
                    <li>
                      <span className={styles.label}>Limitation</span>
                      <span className={styles.content}>Send 100 emails/day</span>
                    </li>
                  </ul>
                </ListContent>
              </ListItem>

              <hr />

              <ListItem end>
                <ListLabel>Online payment platform</ListLabel>
                <ListContent>
                  <ListLink to="https://stripe.com/checkout">
                    <span className={styles.stripe} />
                    Stripe
                  </ListLink>
                  <ul className={styles.specs}>
                    <li>
                      <span className={styles.label}>Plan</span>
                      <span className={styles.content}>Sandbox</span>
                    </li>
                    <li>
                      <span className={styles.label}>Service</span>
                      <span className={styles.content}>Checkout</span>
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
                  <span className={styles.react} />
                  <ListLink to="https://reactjs.org" v="16.2.0">
                    React
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>JavaScript library for managing application state</ListLabel>
                <ListContent>
                  <span className={styles.redux} />
                  <ListLink to="https://redux.js.org" v="5.0.7">
                    Redux
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem end>
                <ListLabel>Frontend component library</ListLabel>
                <ListContent>
                  <span className={styles.bootstrap} />
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
                <ListLabel>A middleware for handling asynchronous actions in Redux</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/gaearon/redux-thunk">Redux Thunk</ListLink>
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
                  <ListLink to="react-router-last-location">react-router-last-location</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>A document head manager for React</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/nfl/react-helmet">react-helmet</ListLink>
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

            <CardSubtitle>
              3<sup>rd</sup> party services and libraries for React
            </CardSubtitle>
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
                  <span className={styles.node} />
                  <ListLink to="https://nodejs.org/en/" v="8.9.3">
                    Node.js
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Node.js web application framework</ListLabel>
                <ListContent>
                  <span className={styles.express} />
                  <ListLink to="https://expressjs.com" v="4.16.3">
                    Express
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem end>
                <ListLabel>Cross-platform document-oriented database program</ListLabel>
                <ListContent>
                  <span className={styles.mongodb} />
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
                  <ListLink to="http://www.passportjs.org">Passport</ListLink>
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
                  <ListLink to="https://lodash.com">Lodash</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Object schema validation</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/hapijs/joi">Joi</ListLink>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle>
              3<sup>rd</sup> party services and libraries for Node.js
            </CardSubtitle>
            <List>
              <ListItem>
                <ListLabel>SendGrid Node.js library</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/sendgrid/sendgrid-nodejs">SendGrid</ListLink>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Stripe API wrapper for Node.js</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/stripe/stripe-node">Stripe</ListLink>
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
  </JSXwrapper>
);

// Module exports
export default Technical;
