// Module dependencies
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
        <div>
          <div styleName="item">
            <div styleName="label">Avatar</div>
            <div styleName="content">
              <div styleName="avatar">
                <img alt="Avatar" src={data.photo.url} styleName="photo" />
                <If condition={isLocal}>
                  <ExLink options={styles.overlay} to="https://en.gravatar.com">
                    <span styleName="text">
                      Change<br /> avatar
                    </span>
                  </ExLink>
                </If>
              </div>
              <If condition={isLocal}>
                <div styleName="description">
                  <p>
                    Update your avatar through your{' '}
                    <ExLink to="https://en.gravatar.com">Gavatar account</ExLink>.
                  </p>
                </div>
              </If>
            </div>
          </div>
          <div styleName="item">
            <div styleName="label">Name</div>
            <div styleName="content">{`${data.name.firstName} ${data.name.lastName}`}</div>
          </div>
          <div styleName="item">
            <div styleName="label">Email</div>
            <div styleName="content">{data.email}</div>
          </div>
          <div styleName="item">
            <div styleName="label">Gender</div>
            <div styleName="content">{data.gender}</div>
          </div>
          <div styleName="item end">
            <div styleName="label">Language</div>
            <div styleName="content">{data.language}</div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

// Module exports
export default Profile;
