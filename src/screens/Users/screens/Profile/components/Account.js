// Module dependencies
import React from 'react';

import { Button } from '../../../../../components/common/Buttons';
import { Card, CardBody, CardHeader, CardSubtitle } from '../../../../../components/common/Card';
import Text from '../../../../../components/common/Text';
import Confirm from '../../../../../components/shared/extended/Confirm';
import stringHelper from '../../../../../helpers/string';
import timestampHelper from '../../../../../helpers/timestamp';

// Peer dependencies
import styles from '../styles/profile.scss';

// Component
const Account = ({
  actions,
  state: { data: { credits: { balance }, interfaces, profile }, ui: { asynchronous } }
}) => (
  <Card end>
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
          <div className={styles.label}>Logged in with</div>
          <div className={styles.content}>
            <Choose>
              <When condition={profile.provider === 'local'}>Email</When>
              <Otherwise>{stringHelper.capitalizeFirstLetter(profile.provider)} ID</Otherwise>
            </Choose>
          </div>
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

      <hr />

      <div>
        <CardSubtitle options="is-danger">Delete account</CardSubtitle>
        <p className={styles.description}>
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <Button
          button="outline-danger"
          disabled={profile.role === 'tester'}
          handler={actions.deleteRequest}
          size="small"
        >
          Delete your account
        </Button>
        <If condition={profile.role === 'tester'}>
          <p className={styles.meta}>
            Note : This account cannot be deleted, it was created for specific use by the
            administrator. If you would like to try with this feature please create your own account
            instead.
          </p>
        </If>
        <Confirm
          asynchronous={asynchronous.delete.profile}
          buttonCancel="Cancel"
          buttonConfirm="Okay"
          onClose={actions.closeModal}
          onConfirm={actions.deleteConfirm}
          title="Permanently Delete Account"
          visibility={interfaces.modal.isOpen}
        >
          <h5>Is this goodbye?</h5>
          <p>This action is permanent. Are you sure you don’t want to reconsider?</p>
          <If condition={balance > 0}>
            <p>
              <Text options="text-secondary" small>
                You have <strong>{balance}</strong> survey credit{balance > 1 && 's'} left, Onigiri
                is a pay-as-you-go service. We do not issue full or partial refunds for deleted
                accounts.
              </Text>
            </p>
          </If>
        </Confirm>
      </div>
    </CardBody>
  </Card>
);

// Module exports
export default Account;
