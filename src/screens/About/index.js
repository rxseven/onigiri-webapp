// Module dependencies
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Body, Document, Head, Title } from '../../components/common/Document';
import Layout from '../../components/common/Layout';
import { HL } from '../../components/common/Typography';

// Peer dependencies
import Development from './content/Development';
import Overview from './content/Overview';
import Specs from './content/Specs';

// Component
const About = () => (
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
