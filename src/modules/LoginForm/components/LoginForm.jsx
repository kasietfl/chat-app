import React from "react";
import { Form, Input } from "antd";
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Route, Link } from 'react-router-dom';
import { Button, Block } from "../../../components";

const LoginForm = props => {
  return (
    <div>
      <div className="auth__top">
        <h2>Log in</h2>
        <p>Please, log into your account</p>
      </div>
      <Block>
        <Form className="login-form">
          <Form.Item>
            <Input className="input"
              id="email"
              prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              placeholder="E-Mail"
            />
          </Form.Item>
          <Form.Item>
            <Input className="input"
              id="password"
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              size="large"
            >
              Log in
            </Button>
          </Form.Item>
          <Form.Item>
              <Link className="auth__register-link" to='/signup'>
                Sign up
              </Link>
          </Form.Item>
        </Form>
      </Block>
    </div>
  );
};

export default LoginForm;