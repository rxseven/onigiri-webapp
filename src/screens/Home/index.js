// Module dependencies
import cx from 'classnames';
import React from 'react';

import { Button } from 'components/common/Buttons';
import { Card, CardBody, CardText } from 'components/common/Card';
import { Body, Document, Head, Title } from 'components/common/Document';
import Layout from 'components/common/Layout';

// Constants
import PATHS from 'constants/router/paths';

// Peer dependencies
import styles from './styles.scss';

// Component
const Home = () => (
  <Document>
    <Head>
      <Title>Onigiri</Title>
    </Head>
    <Body>
      <Layout>
        <Card>
          <CardBody>
            <div className={styles.intro}>
              <h3 className={cx(styles.headline, styles.highlight)}>
                What can you do with Onigiri?
              </h3>
              <div className={cx(styles.content, styles.highlight)}>
                <CardText>
                  With Onigiri, you can create and analyze surveys right in your pocket or web
                  browser —no special software required. You get results as they come in and, you
                  can summarize survey results at a glance with graphs.
                </CardText>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <h3 className={styles.headline}>
              <span className={styles.number}>1</span>
              <span>Create your survey</span>
            </h3>
            <div className={styles.content}>
              <CardText>To start, we’ll create a new survey and add questions.</CardText>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <h3 className={styles.headline}>
              <span className={styles.number}>2</span>
              <span>Preview your survey</span>
            </h3>
            <div className={styles.content}>
              <CardText>
                When you’re done adding questions, you can preview your changes before sending it
                out.
              </CardText>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <h3 className={styles.headline}>
              <span className={styles.number}>3</span>
              <span>Send your survey</span>
            </h3>
            <div className={styles.content}>
              <CardText>
                Now, you’re ready to send out your survey and start collecting responses.
              </CardText>
            </div>
          </CardBody>
        </Card>

        <Card end>
          <CardBody>
            <h3 className={styles.headline}>
              <span className={styles.number}>4</span>
              <span>Analyze responses</span>
            </h3>
            <div className={styles.content}>
              <CardText>
                After you send out your form, you’ll see responses on the Surveys tab.
              </CardText>
            </div>
          </CardBody>
        </Card>

        <div className={styles.start}>
          <Button button="outline-primary" link={PATHS.surveys.new} type="link">
            Get started
          </Button>
        </div>
      </Layout>
    </Body>
  </Document>
);

// Module exports
export default Home;
