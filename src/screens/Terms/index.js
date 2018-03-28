// Module dependencies
import React from 'react';

import { Body, Document, Head, Title } from '../../components/shared/base/Document';
import Layout from '../../components/shared/base/Layout';
import { HL } from '../../components/shared/base/Typography';

// Component
const Terms = () => (
  <Document>
    <Head>
      <Title>Terms of Service</Title>
    </Head>
    <Body>
      <Layout>
        <HL>Terms of Service</HL>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry’s standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </Layout>
    </Body>
  </Document>
);

// Module exports
export default Terms;
