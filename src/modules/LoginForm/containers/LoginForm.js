import { withFormik } from 'formik';
import LoginForm from '../components/LoginForm';
import validateForm from '../../../utils/validation';

import axios from '../../../core/axios';

export default withFormik({
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

  handleSubmit: (values, { setSubmitting }) => {
    return axios.post('user/login',values).then(({data}) => {
      console.log(data);
    });
  },
  displayName: 'LoginForm', 
})(LoginForm);