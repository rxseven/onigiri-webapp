// @flow
// Module dependencies
import cx from 'classnames';
import { map } from 'lodash';
import * as React from 'react';
import { Field } from 'redux-form/immutable';

// Components and HOCs
import { FormField } from 'components/common/Forms';

// Helper function
import { generateStatus } from 'helpers/state';
import { isAlert } from 'helpers/utilities';

// Constants
import STATE_MODELS from 'constants/models/state';

// Types
import type { Asynchronous } from 'types/common/state';

// Companion files
import FormCTA from '../FormCTA';

// Static types
type Props = {
  alert: boolean,
  asynchronous: Asynchronous,
  cancelButton: React.Node,
  fields: Array<Object>,
  handleSubmit: Function,
  options: string,
  pristine: boolean,
  spinner: boolean,
  submitButton: string,
  submitCallback: Function,
  submitFunction: Function
};

type Return = React.Element<'form'>;

// Component
class Form extends React.Component<Props> {
  // Default props
  static defaultProps = {
    alert: true,
    asynchronous: { ...STATE_MODELS.model.asynchronous },
    options: '',
    pristine: true,
    spinner: true
  };

  // Submit handler
  onSubmit = (values: any): void => {
    this.props.submitFunction(values, this.props.submitCallback);
  };

  // Render field
  renderField = (): any =>
    // Create Field array of values
    map(this.props.fields, ({
      helper, label, name, type
    }, index: number) => (
      <Field
        component={FormField}
        helper={helper}
        key={`field-0${index}`}
        label={label}
        name={name}
        type={type}
      />
    ));

  // Render a component
  render(): Return {
    // Variables
    const { props } = this;
    const {
      alert, asynchronous, handleSubmit, options
    } = props;

    // Properties
    const properties = {
      cta: {
        cancelButton: props.cancelButton,
        loading: asynchronous.loading,
        pristine: props.pristine,
        spinner: props.spinner,
        submitButton: props.submitButton,
        ...generateStatus({}, asynchronous, isAlert(alert))
      }
    };

    // View
    return (
      <form className={cx(!!options && options)} onSubmit={handleSubmit(this.onSubmit)}>
        {this.renderField()}
        <FormCTA {...properties.cta} />
      </form>
    );
  }
}

// Module exports
export default Form;
