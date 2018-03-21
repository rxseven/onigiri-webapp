// Module dependencies
import React from 'react';

import { Card, CardBody, CardHeader } from '../../../../../components/shared/base/Card';
import timestampHelper from '../../../../../helpers/timestamp';

// Peer dependencies
import styles from '../styles/profile.scss';

// Component
const Account = ({ actions, state: { data: { profile } } }) => (
  <Card>
    <CardHeader>Account</CardHeader>
    <CardBody>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.label}>ID</div>
          <div className={styles.content}>{profile.id}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>Account type</div>
          <div className={styles.content}>{profile.role}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>Verification</div>
          <div className={styles.content}>{profile.verify ? 'verified' : 'unverified'}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>Creation date</div>
          <div className={styles.content}>
            {timestampHelper.date(profile.creationDate)},{' '}
            {timestampHelper.time(profile.creationDate)}
          </div>
        </div>
      </div>
    </CardBody>
  </Card>
);

// Module exports
export default Account;
