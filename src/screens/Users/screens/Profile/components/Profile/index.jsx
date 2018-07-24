// Module dependencies
import cx from 'classnames';
import React from 'react';

// Components and HOCs
import { Card, CardBody, CardHeader } from 'components/common/Card';
import ExLink from 'components/common/ExLink';

// Companion files
import styles from '../../styles/profile.scss';

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
                  <ExLink options={styles.overlay} to="https://en.gravatar.com">
                    <span className={styles.text}>
                      Change<br /> avatar
                    </span>
                  </ExLink>
                </If>
              </div>
              <If condition={isLocal}>
                <div className={styles.description}>
                  <p>
                    Update your avatar through your{' '}
                    <ExLink to="https://en.gravatar.com">Gavatar account</ExLink>.
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
