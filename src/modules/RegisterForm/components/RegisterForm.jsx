// import React from "react";
// import { Form, Input } from "antd";
// import { Link } from "react-router-dom";

// import { 
//   MailOutlined, 
//   LockOutlined, 
//   UserOutlined,
//   InfoCircleTwoTone 
// } from '@ant-design/icons';

// import { Button, Block } from "../../../components";

// const success = false;

// const RegisterForm = props => {
//   const {
//     values,
//     touched,
//     errors,
//     handleChange,
//     handleBlur,
//     handleSubmit,
//     isValid,
//     isSubmitting
//   } = props;
//   return (
//     <div>
//       <div className="auth__top">
//         <h2>Sign up</h2>
//         <p>Please, sign up to enter chat</p>
//       </div>
//       <Block>
//         {!success ? (
//         <Form onSubmit={handleSubmit} className="register-form">
//           <Form.Item
//           validateStatus="success"
//               hasFeedback
//             >
//             <Input
//               id="email"
//               value={values.email}
//               prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
//               size="large"
//               placeholder="E-Mail"
//             />
//           </Form.Item>
//           <Form.Item validateStatus="success">
//             <Input
//               id="username"
//               prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
//               size="large"
//               placeholder="Username"
//             />
//           </Form.Item>
//           <Form.Item 
//           hasFeedback>
//             <Input 
//               id="password"
//               prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
//               size="large"
//               type="password"
//               placeholder="Password"
//             />
//           </Form.Item>
//           <Form.Item>
//           <Input className="input"
//               id="password_2"
//               prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
//               size="large"
//               type="password"
//               placeholder="Repeat password"
//             />
//           </Form.Item>
//           <Form.Item>
//             <Button onClick={handleSubmit}
//               type="primary"
//               size="large"
//             >
//               Sign up
//             </Button>
//           </Form.Item>
//           <Form.Item>
//               <Link className="auth__register-link" to='/signin'>
//                 Log in
//               </Link>
//           </Form.Item>
//         </Form>): (
//           <div className="auth__success-block">
//             <div>
//               <InfoCircleTwoTone style={{ color: "rgba(0,0,0,.25)" }} />
//             </div>
//             <h2>Confirm your account</h2>
//             <p>
//               An email has been sent to your email with a link to confirm your account.
//             </p>
//           </div>
//         )}
//       </Block>
//     </div>
//   );
// };

// export default RegisterForm;