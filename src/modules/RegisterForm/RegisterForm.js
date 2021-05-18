import React from 'react';
import { withFormik } from 'formik';
import { Form, Input } from "antd";
import { Link } from "react-router-dom";

import { 
  MailOutlined, 
  LockOutlined, 
  UserOutlined,
  InfoCircleTwoTone 
} from '@ant-design/icons';

import { validationField } from "../../utils/helpers";
import { Button, Block } from "../../components";
import { userActions } from "../../redux/actions";

import validateForm from "../../utils/validation";
import store from "../../redux/store";

const success = false;

const RegisterForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting
  } = props
  return (
    <div>
      <div className="auth__top">
        <h2>Sign up</h2>
        <p>Please, sign up to enter chat</p>
      </div>
      <Block>
        {!success ? (
        <Form onSubmit={handleSubmit} className="register-form">
          <Form.Item
              validateStatus={validationField("email", touched, errors)}
              help={!touched.email ? "" : errors.email}
              hasFeedback
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
            validateStatus={validationField("fullname", touched, errors)}
            help={!touched.fullname ? "" : errors.fullname}
            hasFeedback
          >
            <Input
              id="fullname"
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              placeholder="Username"
              value={values.fullname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item 
            validateStatus={validationField("password", touched, errors)}
            help={!touched.password ? "" : errors.password}
            hasFeedback
          >
            <Input 
              id="password"
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              type="password"
              value={values.password}
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            validateStatus={validationField("password_2", touched, errors)}
            help={!touched.password_2 ? "" : errors.password_2}
          >
            <Input className="input"
              id="password_2"
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              type="password"
              value={values.password_2}
              placeholder="Repeat password"
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
              Sign up
            </Button>
          </Form.Item>
          <Form.Item>
              <Link className="auth__register-link" to='/login'>
                Log in
              </Link>
          </Form.Item>
        </Form>): (
          <div className="auth__success-block">
            <div>
              <InfoCircleTwoTone style={{ color: "rgba(0,0,0,.25)" }} />
            </div>
            <h2>Confirm your account</h2>
            <p>
              An email has been sent to your email with a link to confirm your account.
            </p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    fullname: "",
    password: "",
    password_2: ""
  }),
  validate: values => {
    let errors = {};
    validateForm({ isAuth: false, values, errors });
    return errors;
  },
  handleSubmit: (values, { setSubmitting, props }) => {
    store.dispatch(userActions.fetchUserRegister(values)).then(({ status }) => {
      if (status === "success") {
        setTimeout(() => {
          props.history.push("/");
        }, 100);
      }
      setSubmitting(false);
    });
  },
  displayName: 'RegisterForm'
})(RegisterForm);