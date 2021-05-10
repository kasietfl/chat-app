import React from "react";
import { Form, Input } from "antd";
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Button, Block } from "../../../components";
import { validationField } from './../../../utils/helpers';

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
            hasFeedback
          >
            <Input 
              id="email"
              prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              placeholder="E-Mail"
              value={values}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            hasFeedback
          >
            <Input 
              id="password"
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item> {isSubmitting && !isValid && <span>Error!</span>}

            <Button 
              disabled={isSubmitting}
              onClick={handleSubmit}
              type="primary"
              size="large"
            >
              Log in
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to='/signup'>
            Sign up
          </Link>
        </Form>
      </Block>
    </div>
  );
};

export default LoginForm;