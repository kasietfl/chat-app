import { withFormik } from 'formik';
import RegisterForm from './../components/RegisterForm';
import validateForm from './../../../utils/validation';

export default withFormik({
    validate: values => {
      let errors = {};

      validateForm({ isAuth: false, values, errors })

      Object.keys(values).forEach(
        key => validate[key] && validate[key](errors, values[key])
      );

      return errors;
    },
  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
  
    displayName: 'RegisterForm', 
  })(RegisterForm);