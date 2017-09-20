import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createToken } from '../actions';

class Register extends Component {

  renderField(field) {
    const {meta} = field;
    const className = `form-group ${meta.touched && meta.error ? 'has-danger' : ''}`
    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
        <div className="text-help">
          {meta.touched ? meta.error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createToken(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Username"
          name="username"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Email Address"
          name="email"
          type="email"
          component={this.renderField}
        />
        <Field
          label="Password"
          name="password1"
          type="password"
          component={this.renderField}
        />
        <Field
          label="Confirm Password"
          name="password2"
          type="password"
          component={this.renderField}
        />
      <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    );
  }
}

function isValidPassword(password) {
  // TODO: more robust password validation
  if (!password || password.length < 6) {
    return false;
  }
  return true;
}

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = 'Please enter a username';
  }
  if (!values.email) {
    // TODO: check for email validity
    errors.email = 'Please enter a valid email address';
  }
  if (!isValidPassword(values.password1)) {
    errors.password1 = 'A valid password must have more than 6 characters';
  }
  if (values.password1 !== values.password2) {
    errors.password2 = 'Passwords do not match';
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'RegisterForm'
})(
  connect(null, { createToken })(Register)
);
