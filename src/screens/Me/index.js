// Module dependencies
import React from 'react';

import { Card, CardBody, CardHeader, CardText } from '../../components/shared/base/Card';
import { Body, Document, Head, Title } from '../../components/shared/base/Document';
import ExLink from '../../components/shared/base/ExLink';
import Icon from '../../components/shared/base/Icon';
import Layout from '../../components/shared/base/Layout';
import {
  List,
  ListItem,
  ListContent,
  ListLabel,
  ListLink,
  ListTitle
} from '../../components/shared/base/List';
import Text from '../../components/shared/base/Text';
import { HL } from '../../components/shared/base/Typography';

// Peer dependencies
import styles from './styles.scss';

// Component
const Me = () => (
  <Document>
    <Head>
      <Title>Me</Title>
    </Head>
    <Body>
      <Layout>
        <HL>Me</HL>
        <Card>
          <CardHeader>Summary</CardHeader>
          <CardBody>
            <CardText>
              Hi, I’m a detail-oriented frontend developer inventing responsive website &amp; web
              application. I’m proficient in HTML, CSS, and JavaScript using valid, well-formatted,
              and semantic coding approaches.
            </CardText>
            <CardText>
              I’m not an expert in this field but I’m doing well at my job and trying to keep up to
              date with the latest web development technology.
            </CardText>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Personal &amp; Contact</CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <ListContent>
                  <span className={styles.avatar} />
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Name</ListLabel>
                <ListContent>Theerawat Pongsupawat</ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Location</ListLabel>
                <ListContent>Chiang Mai, Thailand</ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Languages</ListLabel>
                <ListContent>
                  <Text>
                    Thai{' '}
                    <Text options="text-secondary" small>
                      (native)
                    </Text>, English{' '}
                    <Text options="text-secondary" small>
                      (good)
                    </Text>
                  </Text>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Key skills</ListLabel>
                <ListContent>
                  React, Redux, ES6/ES2015, CSS3/SCSS, Node.js, Webpack
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Education</ListLabel>
                <ListContent>Self-taught</ListContent>
              </ListItem>
            </List>

            <hr />

            <List>
              <ListItem>
                <ListLabel>Phone</ListLabel>
                <ListContent>
                  <a href="tel:66838658732">
                    +66 838 658 732{' '}
                    <Text options="text-secondary" small>
                      (GMT+7)
                    </Text>
                  </a>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Email</ListLabel>
                <ListContent>
                  <a href="mailto:t.pongsupawat@gmail.com">t.pongsupawat@gmail.com</a>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>Profile</ListLabel>
                <ListContent>
                  <ListLink to="https://www.linkedin.com/in/pongsupawat/">LinkedIn</ListLink>
                </ListContent>
              </ListItem>
              <ListItem end>
                <ListLabel>Public projects</ListLabel>
                <ListContent>
                  <ListLink to="https://github.com/rxseven">GitHub</ListLink>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Accomplishments</CardHeader>
          <CardBody>
            <List>
              <ListItem end>
                <ListContent>
                  <CardText>
                    Due to contract agreements with different agencies, most of the projects I have
                    accomplised have very sensitive information.{' '}
                    <Text options="text-danger">
                      Therefore, this information must not be public and should not be considered
                      compromised.
                    </Text>
                  </CardText>
                  <hr />
                  <CardText>
                    The recent open-source project I have published and can be shared publicly is
                    this one, <strong>Onigiri</strong>.
                  </CardText>
                  <ListTitle>How could you evaluate me from this project?</ListTitle>
                  <ListLabel>Results</ListLabel>
                  <ul>
                    <li>Functionality</li>
                    <li>User interface</li>
                    <li>User experience and data-flow</li>
                    <li>Contents, data, and assets</li>
                  </ul>
                  <ListLabel>Coding</ListLabel>
                  <ul>
                    <li>Project structure</li>
                    <li>Coding standards and quality</li>
                    <li>Development workflow</li>
                  </ul>
                  <ListLabel>Management</ListLabel>
                  <ul className="list-end">
                    <li>Git branching and merging</li>
                    <li>Git commit history</li>
                    <li>Project management</li>
                  </ul>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Experience</CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <ListLabel>2018 - Present</ListLabel>
                <ListContent>
                  <Text block bold>
                    Web application development
                  </Text>
                  <Text block>Independent contractor</Text>
                  <Text block>React &amp; Redux</Text>
                  <Text block>
                    <ExLink flat to="https://en.wikipedia.org/wiki/Chiang_Rai">
                      Chiang Rai
                    </ExLink>{' '}
                    <small className="text-secondary">
                      <Icon name="location" title="Location" />
                    </small>
                  </Text>
                </ListContent>
              </ListItem>
              <ListItem>
                <ListLabel>2011 - 2017</ListLabel>
                <ListContent>
                  <Text block bold>
                    Frontend web development
                  </Text>
                  <Text block>
                    Inventing cutting-edge responsive website in digital media industry
                  </Text>
                  <Text block>HTML5, CSS3/SCSS, jQuery, Gulp.js</Text>
                  <Text block>
                    <ExLink flat to="https://en.wikipedia.org/wiki/Chiang_Mai">
                      Chiang Mai
                    </ExLink>,{' '}
                    <ExLink flat to="https://en.wikipedia.org/wiki/Singapore">
                      Singapore
                    </ExLink>,{' '}
                    <ExLink flat to="https://en.wikipedia.org/wiki/San_Jose,_California">
                      San Jose
                    </ExLink>{' '}
                    <small className="text-secondary">
                      <Icon name="location" title="Location" />
                    </small>
                  </Text>
                </ListContent>
              </ListItem>
              <ListItem end>
                <ListLabel>2008 - 2010</ListLabel>
                <ListContent>
                  <Text block bold>
                    Full-stack web development
                  </Text>
                  <Text block>XHTML, CSS2, Prototype.js, PHP, MySQL</Text>
                  <Text block>
                    <ExLink flat to="https://en.wikipedia.org/wiki/Chiang_Mai">
                      Chiang Mai
                    </ExLink>{' '}
                    <small className="text-secondary">
                      <Icon name="location" title="Location" />
                    </small>
                  </Text>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card end>
          <CardHeader>Traveling</CardHeader>
          <CardBody>
            <List>
              <ListItem>
                <ListLabel>2016</ListLabel>
                <ListContent>
                  <Text block bold>
                    Overseas projects, remote jobs
                  </Text>
                  <Text block>
                    Singapore, South Korea, San Jose &amp; San Francisco, California, USA
                  </Text>
                </ListContent>
              </ListItem>
              <ListItem end>
                <ListLabel>2013</ListLabel>
                <ListContent>
                  <Text block bold>
                    Employee exchange programs
                  </Text>
                  <Text block>Stuttgart, Germany</Text>
                </ListContent>
              </ListItem>
            </List>
          </CardBody>
        </Card>
      </Layout>
    </Body>
  </Document>
);

// Module exports
export default Me;
