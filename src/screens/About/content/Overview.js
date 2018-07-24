// Dependencies
import cx from 'classnames';
import React, { Fragment } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Components and HOCs
import { Card, CardBody, CardHeader, CardSubtitle, CardText } from 'components/common/Card';
import ExLink from 'components/common/ExLink';
import Icon from 'components/common/Icon';
import {
  List,
  ListItem,
  ListContent,
  ListGroup,
  ListGroupItem,
  ListLabel,
  ListLink,
  ListTitle
} from 'components/common/List';
import Text from 'components/common/Text';

// Companion files
import CSS from 'constants/string/css';

// Component
const Overview = () => (
  <Fragment>
    <div>
      <p>
        With <strong>Onigiri</strong>, you can create and analyze surveys right in your pocket or
        web browser —no special software required. You get results as they come in and, you can
        summarize survey results at a glance with graphs.
      </p>
    </div>

    <Tabs className="pills">
      <TabList className="nav nav-pills">
        <Tab className="nav-item" selectedClassName="active">
          <span className="nav-link">General</span>
        </Tab>
        <Tab className="nav-item" selectedClassName="active">
          <span className="nav-link">Features</span>
        </Tab>
        <Tab className="nav-item" selectedClassName="active">
          <span className="nav-link">Issues</span>
        </Tab>
      </TabList>

      <TabPanel className="nav-content">
        <Card>
          <CardHeader>What is Onigiri?</CardHeader>
          <CardBody>
            <List>
              <ListItem end>
                <ListContent>
                  <CardText>
                    <strong>Onigiri</strong> is a small open-source web application and RESTful API
                    built with React, Redux, Node.js, Express, Passport, and MongoDB.
                  </CardText>
                  <CardText>
                    It is maintained by{' '}
                    <ExLink to="http://www.rxseven.com">Theerawat Pongsupawat</ExLink>, frontend
                    developer from{' '}
                    <ExLink flat to="https://en.wikipedia.org/wiki/Chiang_Mai">
                      Chiang Mai, Thailand
                    </ExLink>.
                  </CardText>
                  <hr />
                  <CardText options="text-secondary text-small">
                    <strong>Onigiri</strong> (おにぎり) also known as rice ball, is a Japanese food
                    made from white rice formed into triangular or cylindrical shapes and often
                    wrapped in seaweed.{' '}
                    <ExLink to="https://en.wikipedia.org/wiki/Onigiri">Wikipedia</ExLink>
                  </CardText>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Demo</CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <ListLabel>Live URL</ListLabel>
                <ListContent>
                  <ListLink to="https://onigiri-webapp.herokuapp.com">
                    https://onigiri-webapp.herokuapp.com
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem end>
                <ListLabel>Lastest release</ListLabel>
                <ListContent>
                  <ListGroup>
                    <ListGroupItem>
                      <ListLink
                        to="https://github.com/rxseven/onigiri-webapp/releases"
                        v="1.0.0-alpha.7"
                      >
                        Web application
                      </ListLink>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListLink
                        to="https://github.com/rxseven/onigiri-api/releases"
                        v="1.0.0-alpha.5"
                      >
                        RESTful API
                      </ListLink>
                    </ListGroupItem>
                  </ListGroup>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Resources</CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <ListLabel>Web application</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/rxseven/onigiri-webapp">
                    github.com/rxseven/onigiri-webapp
                  </ListLink>
                </ListContent>
              </ListItem>
              <ListItem end>
                <ListLabel>RESTful API</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/rxseven/onigiri-api">
                    github.com/rxseven/onigiri-api
                  </ListLink>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Licenses</CardHeader>
          <CardBody>
            <List>
              <ListItem end>
                <ListContent>
                  <CardText>
                    <ExLink rel="license" to="https://creativecommons.org/licenses/by-nc-nd/4.0/">
                      <img
                        alt="License: CC BY-NC-ND 4.0"
                        src="https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg"
                      />
                    </ExLink>
                    <span>&nbsp;</span>
                    <ExLink rel="license" to="https://www.gnu.org/licenses/agpl-3.0">
                      <img
                        alt="License: AGPL v3"
                        src="https://img.shields.io/badge/License-AGPL%20v3-blue.svg"
                      />
                    </ExLink>
                  </CardText>
                  <CardText>
                    The content of this project itself is licensed under the{' '}
                    <ExLink rel="license" to="http://creativecommons.org/licenses/by-nc-nd/4.0/">
                      Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International
                      license
                    </ExLink>, and the underlying source code is licensed under the{' '}
                    <ExLink rel="license" to="https://www.gnu.org/licenses/agpl-3.0">
                      GNU AGPLv3 license
                    </ExLink>.
                  </CardText>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card end>
          <CardHeader>Notes</CardHeader>
          <CardBody>
            <CardSubtitle bold>
              <Icon name="timer" options={CSS.margin.MR02} title="App sleeping" />App sleeping...
            </CardSubtitle>
            <List>
              <ListItem end>
                <ListContent>
                  <ListTitle>When does the app go to sleep, and why?</ListTitle>
                  <CardText>
                    As Onigiri runs on a free plan, when an app on Heroku has only one web dyno and
                    that dyno doesn’t receive any traffic in 1 hour, the dyno goes to sleep.
                  </CardText>
                  <CardText>
                    When someone accesses the app, the dyno manager will automatically wake up the
                    web dyno to run the web process type.{' '}
                    <Text options="text-danger">
                      This causes a short delay for this first request, but subsequent requests will
                      perform normally.
                    </Text>
                  </CardText>
                  <CardText options="text-small">
                    <ListLink icon to="https://blog.heroku.com/app_sleeping_on_heroku">
                      App Sleeping on Heroku
                    </ListLink>
                  </CardText>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle bold>
              <Icon name="loop-square" options={CSS.margin.MR02} title="Daily limit" />Daily limit
            </CardSubtitle>
            <List>
              <ListItem end>
                <ListContent>
                  <CardText>
                    As Onigiri runs on a free plan, and the free trial is already expired, at which
                    point,{' '}
                    <Text options="text-danger">
                      Onigiri is restricted to sending 100 emails per day.
                    </Text>
                  </CardText>
                  <CardText options="text-small">
                    <ListLink icon to="https://www.sendgrid.com/pricing/">
                      SendGrid Pricing &amp; Plans
                    </ListLink>
                  </CardText>
                </ListContent>
              </ListItem>
            </List>

            <hr />

            <CardSubtitle bold>
              <Icon name="bug" options={CSS.margin.MR02} title="Cross-browser compatibility" />Cross-browser
              compatibility
            </CardSubtitle>
            <List>
              <ListItem end>
                <ListContent>
                  <CardText>
                    As Onigiri is a demo project, I am trying to make use of latest web development
                    technologies to make my work faster, more efficient and convenient.{' '}
                    <Text options="text-danger">
                      But these cutting edge technologies may cause some issues on legacy browsers,
                      especially Internet Explorer.
                    </Text>
                  </CardText>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>
      </TabPanel>
      <TabPanel className="nav-content">
        <Card>
          <CardHeader>Pre-releases</CardHeader>
          <CardBody>
            <CardSubtitle>Release information</CardSubtitle>
            <List>
              <ListItem>
                <ListContent>
                  <ListLabel>Versions</ListLabel>
                  <ListContent>
                    <ListGroup>
                      <ListGroupItem>
                        <ListLink
                          to="https://github.com/rxseven/onigiri-webapp/releases"
                          v="1.0.0-alpha.7"
                        >
                          Web application
                        </ListLink>
                      </ListGroupItem>
                      <ListGroupItem>
                        <ListLink
                          to="https://github.com/rxseven/onigiri-api/releases"
                          v="1.0.0-alpha.5"
                        >
                          RESTful API
                        </ListLink>
                      </ListGroupItem>
                    </ListGroup>
                  </ListContent>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListContent>
                  <ListLabel>Dates</ListLabel>
                  <ListContent>
                    <ListGroupItem>
                      <ListLink
                        to="https://github.com/rxseven/onigiri-webapp/releases"
                        tag="July 20, 2018"
                      >
                        Web application
                      </ListLink>
                    </ListGroupItem>
                    <ListGroupItem>
                      <ListLink
                        to="https://github.com/rxseven/onigiri-api/releases"
                        tag="July 2, 2018"
                      >
                        RESTful API
                      </ListLink>
                    </ListGroupItem>
                  </ListContent>
                </ListContent>
              </ListItem>
            </List>
            <hr />
            <CardSubtitle>Authentication</CardSubtitle>
            <List>
              <ListItem>
                <ListContent>
                  <ul className="list-end">
                    <li>
                      Password-base
                      <ul>
                        <li>Sign up</li>
                        <li>Sign in</li>
                      </ul>
                    </li>
                    <li>
                      OAuth 2.0{' '}
                      <Text options="text-secondary">
                        (via third-party services, Facebook &amp; Google)
                      </Text>
                    </li>
                    <li>Sign out</li>
                  </ul>
                </ListContent>
              </ListItem>
            </List>
            <hr />
            <CardSubtitle>Users</CardSubtitle>
            <List>
              <ListItem>
                <ListContent>
                  <ul className="list-end">
                    <li>View user profile</li>
                    <li>Delete user account</li>
                  </ul>
                </ListContent>
              </ListItem>
            </List>
            <hr />
            <CardSubtitle>Payments</CardSubtitle>
            <List>
              <ListItem>
                <ListContent>
                  <ul className="list-end">
                    <li>View credits</li>
                    <li>
                      Add credits, checkout, pay by credit card{' '}
                      <Text options="text-secondary">(via third-party service, Stripe)</Text>
                    </li>
                  </ul>
                </ListContent>
              </ListItem>
            </List>
            <hr />
            <CardSubtitle>Surveys</CardSubtitle>
            <List>
              <ListItem>
                <ListContent>
                  <ul className="list-end">
                    <li>
                      Create survey <Text options="text-secondary">(and send emails)</Text>
                    </li>
                    <li>
                      View survey list{' '}
                      <Text options="text-secondary">(with infinite scrolling functionality)</Text>
                    </li>
                    <li>View survey details and statistics</li>
                    <li>View recipient list</li>
                    <li>
                      Update survey <Text options="text-secondary">(archive and complete)</Text>
                    </li>
                    <li>Delete survey</li>
                  </ul>
                </ListContent>
              </ListItem>
            </List>
            <hr />
            <CardSubtitle>Emails &amp; Statistics</CardSubtitle>
            <List>
              <ListItem end>
                <ListContent>
                  <ul className="list-end">
                    <li>
                      Send survey emails{' '}
                      <Text options="text-secondary">(via third-party service, SendGrid)</Text>
                    </li>
                    <li>
                      Collect response data <Text options="text-secondary">(via webhook)</Text>
                    </li>
                    <li>Update survey statistics</li>
                  </ul>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card background="secondary" end options="text-white">
          <CardHeader>Next coming features &amp; improvements</CardHeader>
          <CardBody>
            <CardSubtitle>Authentication</CardSubtitle>
            <List>
              <ListItem>
                <ListContent>
                  <ul className="list-end">
                    <li>Verify account</li>
                    <li>Change password</li>
                    <li>Reset password</li>
                    <li>Refresh token</li>
                  </ul>
                </ListContent>
              </ListItem>
            </List>
            <hr />
            <CardSubtitle>Users</CardSubtitle>
            <List>
              <ListItem>
                <ListContent>
                  <ul>
                    <li>Update profile</li>
                  </ul>
                </ListContent>
              </ListItem>
            </List>
            <hr />
            <CardSubtitle>Payments</CardSubtitle>
            <List>
              <ListItem>
                <ListContent>
                  <ul className="list-end">
                    <li>Low credits alert</li>
                    <li>Custom checkout amount</li>
                  </ul>
                </ListContent>
              </ListItem>
            </List>
            <hr />
            <CardSubtitle>Surveys</CardSubtitle>
            <List>
              <ListItem>
                <ListContent>
                  <ul className="list-end">
                    <li>Save draft</li>
                    <li>Shortcut actions</li>
                    <li>Categories, tags, lables, and pins</li>
                    <li>Notes and comments</li>
                    <li>Filter and search</li>
                    <li>Survey templates</li>
                    <li>Import email from external file</li>
                    <li>Remove all archived items</li>
                    <li>Survey goals</li>
                  </ul>
                </ListContent>
              </ListItem>
            </List>
            <hr />
            <CardSubtitle>Common</CardSubtitle>
            <List>
              <ListItem end>
                <ListContent>
                  <ul className="list-end">
                    <li>Animations</li>
                    <li>Performance improvements</li>
                    <li>Testing</li>
                    <li>Static type checking</li>
                  </ul>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>
      </TabPanel>
      <TabPanel className="nav-content">
        <Card end>
          <CardHeader>
            <span className={cx(CSS.margin.MR03, 'text-danger')}>
              <Icon name="warning" title="Open" /> 2 Open
            </span>
            <span className={cx('text-secondary')}>
              <Icon name="check" title="Closed" /> 0 Closed
            </span>
          </CardHeader>
          <CardBody>
            <List>
              <ListItem end>
                <ol className="list-end list-flat">
                  <li>
                    <code>textarea</code> multiple lines is not working properly
                  </li>
                  <li>
                    While menu is opening, page scrolling is not working properly on an iPhone
                  </li>
                </ol>
              </ListItem>
            </List>
          </CardBody>
        </Card>
      </TabPanel>
    </Tabs>
  </Fragment>
);

// Module exports
export default Overview;
