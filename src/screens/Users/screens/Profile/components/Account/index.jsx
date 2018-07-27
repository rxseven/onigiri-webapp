// Module dependencies
import React from 'react';

// Helper functions
import stringHelper from 'helpers/string';
import timestampHelper from 'helpers/timestamp';

// Components and HOCs
import { Button } from 'components/common/Buttons';
import { Card, CardBody, CardHeader, CardSubtitle } from 'components/common/Card';
import Text from 'components/common/Text';
import Confirm from 'components/composite/Confirm';

// Companion files
import '../../styles/profile.scss';

// Component
const Account = ({
  actions,
  state: { data: { credits: { balance }, interfaces, profile }, ui: { asynchronous } }
}) => (
  <Card end>
    <CardHeader>Account</CardHeader>
    <CardBody>
      <div>
        <div styleName="item">
          <div styleName="label">ID</div>
          <div styleName="content">{profile.id}</div>
        </div>
        <div styleName="item">
          <div styleName="label">Account type</div>
          <div styleName="content">{profile.role}</div>
        </div>
        <div styleName="item">
          <div styleName="label">Logged in with</div>
          <div styleName="content">
            <Choose>
              <When condition={profile.provider === 'local'}>Email</When>
              <Otherwise>{stringHelper.capitalizeFirstLetter(profile.provider)} ID</Otherwise>
            </Choose>
          </div>
        </div>
        <div styleName="item">
          <div styleName="label">Verification</div>
          <div styleName="content">{profile.verify ? 'verified' : 'unverified'}</div>
        </div>
        <div styleName="item">
          <div styleName="label">Creation date</div>
          <div styleName="content">
            {timestampHelper.date(profile.creationDate)},{' '}
            {timestampHelper.time(profile.creationDate)}
          </div>
        </div>
      </div>

      <hr />

      <div>
        <CardSubtitle options="is-danger">Delete account</CardSubtitle>
        <p styleName="description">
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
          <p styleName="meta">
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
