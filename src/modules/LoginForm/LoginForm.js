import React from 'react';
import { withFormik } from 'formik';
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { validationField } from "../../utils/helpers";
import { Button, Block } from "../../components";
import { userActions } from "../../redux/actions";

import validateForm from "../../utils/validation";
import store from "../../redux/store";

const LoginForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting
  } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Log in</h2>
        <p>Please, log into your account</p>
      </div>
      <Block>
        <Form onSubmit={ handleSubmit } className="login-form">
          <Form.Item
            validateStatus={validationField("email", touched, errors)}
            help={!touched.email ? "" : errors.email}
          >
            <Input 
              id="email"
              prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              placeholder="E-Mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            validateStatus={validationField("password", touched, errors)}
            help={!touched.password ? "" : errors.password}
          >
            <Input 
              id="password"
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item> 
            {isSubmitting && !isValid && <span>Error!</span>}
            <Button 
              disabled={isSubmitting}
              onClick={handleSubmit}
              type="primary"
              size="large"
            >
              Log in
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to='/register'>
            Sign up
          </Link>
        </Form>
      </Block>
    </div>
  );
};

const LoginFormContainer = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    password: ""
  }),
  validate: values => {
    let errors = {};
    validateForm({ isAuth: true, values, errors });
    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    store.dispatch(userActions.fetchUserLogin(values)).then(({ status }) => {
      if (status === "success") {
        setTimeout(() => {
          props.history.push("/");
        }, 100);
      }
      setSubmitting(false);
    });
  },

  displayName: 'LoginForm', 
})(LoginForm);

export default LoginFormContainer;