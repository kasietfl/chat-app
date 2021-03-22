import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";

import { 
  MailOutlined, 
  LockOutlined, 
  UserOutlined,
  InfoCircleTwoTone 
} from '@ant-design/icons';

import { Button, Block } from "../../../components";

const RegisterForm = props => {
  return (
    <div>
      <div className="auth__top">
        <h2>Sign up</h2>
        <p>Please, sign up to enter chat</p>
      </div>
      <Block>
        <Form className="register-form">
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
              id="email"
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              placeholder="Username"
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
          <Input className="input"
              id="password_2"
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              type="password"
              placeholder="Repeat password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              size="large"
            >
              Sign up
            </Button>
          </Form.Item>
          <Form.Item>
              <Link className="auth__register-link" to='/signin'>
                Log in
              </Link>
          </Form.Item>
        </Form>
      </Block>
    </div>
  );
};

export default RegisterForm;