// Dependencies
import React from 'react';

import { Card, CardBody, CardHeader, CardSubtitle } from '../../../components/shared/base/Card';
import {
  List,
  ListItem,
  ListContent,
  ListGroup,
  ListGroupItem,
  ListLabel,
  ListLink
} from '../../../components/shared/base/List';
import JSXwrapper from '../../../components/shared/helpers/JSXwrapper';

// Component
const Development = () => (
  <JSXwrapper>
    <div>
      <p>
        Below is the list of design &amp; development principles, web authoring and debugging tools,
        and third party services I use on a daily basis to build this project. I can’t include
        everything, but here are a couple of my favorites and other widely used ones.
      </p>
    </div>

    <Card>
      <CardHeader>Principles</CardHeader>
      <CardBody>
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
                  <ListLink to="https://github.com/airbnb/javascript">Airbnb’s JavaScript</ListLink>
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
          <ListItem end>
            <ListLabel>Design</ListLabel>
            <ListContent>
              <ListLink to="https://en.wikipedia.org/wiki/Responsive_web_design">
                Mobile-first responsive web design
              </ListLink>
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
              <ListLink to="https://www.apple.com/mac-mini/">Mac mini</ListLink>,{' '}
              <ListLink to="https://www.apple.com/macbook-pro/">MacBook Pro</ListLink>
            </ListContent>
          </ListItem>
        </List>

        <hr />
        
        <CardSubtitle>Environment</CardSubtitle>
        <List>
          <ListItem>
            <ListLabel>Operating system</ListLabel>
            <ListContent>
              <ListLink to="https://www.apple.com/lae/macos/high-sierra/" v="10.13.3">
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
            <ListLabel>Code editor</ListLabel>
            <ListContent>
              <ListLink to="https://code.visualstudio.com">Visual Studio Code</ListLink>
            </ListContent>
          </ListItem>
          <ListItem>
            <ListLabel>Web browser</ListLabel>
            <ListContent>
              <ListLink to="https://www.google.com/chrome/">Chrome</ListLink>
            </ListContent>
          </ListItem>
          <ListItem>
            <ListLabel>Web authoring and debugging tools</ListLabel>
            <ListContent>
              <ListLink to="https://developer.chrome.com/devtools">Chrome DevTools</ListLink>
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
              <ListLink to="https://www.sourcetreeapp.com">Sourcetree</ListLink>
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
          <ListItem end>
            <ListLabel>Photo editing tool</ListLabel>
            <ListContent>
              <ListLink to="http://adobe.com/photoshop">Adobe Photoshop CC</ListLink>
            </ListContent>
          </ListItem>
        </List>

        <hr />

        <CardSubtitle>Workflow</CardSubtitle>
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
            <ListLabel>React hot reloading plugin</ListLabel>
            <ListContent>
              <ListLink to="https://github.com/gaearon/react-hot-loader">React Hot Loader</ListLink>
            </ListContent>
          </ListItem>
          <ListItem>
            <ListLabel>Node.js bindings to libSass</ListLabel>
            <ListContent>
              <ListLink to="https://github.com/sass/node-sass">node-sass</ListLink>
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
            <ListLabel>Code formatter</ListLabel>
            <ListContent>
              <ListLink to="https://prettier.io">Prettier</ListLink>
            </ListContent>
          </ListItem>
          <ListItem>
            <ListLabel>Formats JavaScript using Prettier followed by ESLint</ListLabel>
            <ListContent>
              <ListLink to="https://github.com/prettier/prettier-eslint">prettier-eslint</ListLink>
            </ListContent>
          </ListItem>
        </List>

        <hr />

        <CardSubtitle>Configurations</CardSubtitle>
        <List>
          <ListItem>
            <ListLabel>ESLint’s rules for Node.js</ListLabel>
            <ListContent>
              <ListLink to="https://github.com/mysticatea/eslint-plugin-node">
                eslint-plugin-node
              </ListLink>
            </ListContent>
          </ListItem>
          <ListItem>
            <ListLabel>Airbnb’s ESLint as an extensible shared config</ListLabel>
            <ListContent>
              <ListLink to="https://github.com/airbnb/javascript">eslint-config-airbnb</ListLink>
            </ListContent>
          </ListItem>
        </List>

        <hr />

        <CardSubtitle>Utilities</CardSubtitle>
        <List>
          <ListItem>
            <ListLabel>Runtime type checking for React props</ListLabel>
            <ListContent>
              <ListLink to="https://github.com/facebook/prop-types">PropTypes</ListLink>
            </ListContent>
          </ListItem>
          <ListItem end>
            <ListLabel>
              For use with React PropTypes. Will error on any prop not explicitly specified.
            </ListLabel>
            <ListContent>
              <ListLink to="https://github.com/airbnb/prop-types-exact">prop-types-exact</ListLink>
            </ListContent>
          </ListItem>
        </List>
      </CardBody>
    </Card>

    <Card>
      <CardHeader>
        3<sup>rd</sup> party services
      </CardHeader>
      <CardBody>
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
          <ListItem>
            <ListLabel>Database as a service for MongoDB</ListLabel>
            <ListContent>
              <ListLink to="https://mlab.com">mLab</ListLink>
            </ListContent>
          </ListItem>
          <ListItem>
            <ListLabel>Cloud-based email service</ListLabel>
            <ListContent>
              <ListLink to="https://sendgrid.com">SendGrid</ListLink>
            </ListContent>
          </ListItem>
          <ListItem end>
            <ListLabel>Online payment platform</ListLabel>
            <ListContent>
              <ListLink to="https://stripe.com/checkout">Stripe</ListLink>
            </ListContent>
          </ListItem>
        </List>
      </CardBody>
    </Card>

    <Card end>
      <CardHeader>Testing</CardHeader>
      <CardBody>
        <List>
          <ListItem>
            <ListLabel>Operating system</ListLabel>
            <ListContent>
              <ListLink to="https://www.apple.com/macos/high-sierra/" v="10.13.3">
                macOS High Sierra
              </ListLink>
            </ListContent>
          </ListItem>
          <ListItem>
            <ListLabel>Mobile simulators</ListLabel>
            <ListContent>
              <ListGroup>
                <ListGroupItem>
                  <ListLink to="https://developer.apple.com/xcode/" v="9.2.0">
                    Xcode - iOS Simulator
                  </ListLink>
                </ListGroupItem>
                <ListGroupItem>
                  <ListLink to="https://www.google.com/chrome/" v="65.0.3325.181">
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
                  <ListLink to="#" v="11.0.3">
                    Safari
                  </ListLink>
                </ListGroupItem>
                <ListGroupItem>
                  <ListLink to="#" v="59.0.1">
                    Firefox
                  </ListLink>
                </ListGroupItem>
                <ListGroupItem>
                  <ListLink to="https://www.google.com/chrome/" v="65.0.3325.181">
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
                  <ListLink to="https://www.apple.com/ios/ios-11/" tag="iOS v11.2.6">
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
              <ListLink to="https://www.android.com/versions/nougat-7-0/" tag="Android v7.0">
                Samsung Galaxy S8
              </ListLink>
            </ListContent>
          </ListItem>
          <ListItem end>
            <ListLabel>Tablet</ListLabel>
            <ListContent>
              <ListLink to="https://www.apple.com/ios/ios-11/" tag="iOS v11.2.6">
                iPad mini 3
              </ListLink>
            </ListContent>
          </ListItem>
        </List>
      </CardBody>
    </Card>
  </JSXwrapper>
);

// Module exports
export default Development;
