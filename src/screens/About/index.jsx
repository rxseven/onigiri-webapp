// @flow
// Module dependencies
import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Components and HOCs
import { Body, Document, Head, Title } from 'components/common/Page';
import Layout from 'components/common/Layout';
import { HL } from 'components/common/Typography';

// Companion files
import Development from './content/Development';
import Overview from './content/Overview';
import Specs from './content/Specs';

// Static types
type Return = React.Element<typeof Document>;

// Component
const About = (): Return => (
  <Document>
    <Head>
      <Title>About Onigiri</Title>
    </Head>
    <Body>
      <Layout>
        <HL>About Onigiri</HL>
        <Tabs className="tabs">
          <TabList className="nav nav-tabs">
            <Tab className="nav-item" selectedClassName="active">
              <span className="nav-link">Overview</span>
            </Tab>
            <Tab className="nav-item" selectedClassName="active">
              <span className="nav-link">Development</span>
            </Tab>
            <Tab className="nav-item" selectedClassName="active">
              <span className="nav-link">Specs</span>
            </Tab>
          </TabList>

          <TabPanel className="nav-content">
            <Overview />
          </TabPanel>
          <TabPanel className="nav-content">
            <Development />
          </TabPanel>
          <TabPanel className="nav-content">
            <Specs />
          </TabPanel>
        </Tabs>
      </Layout>
    </Body>
  </Document>
);

// Module exports
export default About;
