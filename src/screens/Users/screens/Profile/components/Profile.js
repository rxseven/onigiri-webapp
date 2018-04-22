// Module dependencies
import cx from 'classnames';
import React from 'react';

import { Card, CardBody, CardHeader } from '../../../../../components/shared/base/Card';

// Peer dependencies
import styles from '../styles/profile.scss';

// Component
const Profile = ({ state: { data } }) => {
  // Variables
  const isLocal = data.provider === 'local';

  // View
  return (
    <Card>
      <CardHeader>Profile</CardHeader>
      <CardBody>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.label}>Avatar</div>
            <div className={styles.content}>
              <div className={styles.avatar}>
                <img alt="Avatar" className={styles.photo} src={data.photo.url} />
                <If condition={isLocal}>
                  <a
                    className={styles.overlay}
                    href="https://en.gravatar.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className={styles.text}>
                      Change<br /> avatar
                    </span>
                  </a>
                </If>
              </div>
              <If condition={isLocal}>
                <div className={styles.description}>
                  <p>
                    Update your avatar through your{' '}
                    <a href="https://en.gravatar.com/" rel="noopener noreferrer" target="_blank">
                      Gavatar account
                    </a>.
                  </p>
                </div>
              </If>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.label}>Name</div>
            <div className={styles.content}>{`${data.name.firstName} ${data.name.lastName}`}</div>
          </div>
          <div className={styles.item}>
            <div className={styles.label}>Email</div>
            <div className={styles.content}>{data.email}</div>
          </div>
          <div className={styles.item}>
            <div className={styles.label}>Gender</div>
            <div className={styles.content}>{data.gender}</div>
          </div>
          <div className={cx(styles.item, styles.end)}>
            <div className={styles.label}>Language</div>
            <div className={styles.content}>{data.language}</div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

// Module exports
export default Profile;
