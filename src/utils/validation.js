export default ({ isAuth, values, errors }) => {
  const rules = {
    email: value => {
      if (!value) {
        errors.email = "E-Mail required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = "Invalid E-Mail";
      }
    },
    password: value => {
      if (!value) {
        errors.password = "Password required";
      } else if (
        !isAuth &&
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
      ) {
        errors.password = "Password must be stronger";
      }
    },
    password_2: value => {
      if (!isAuth && value !== values.password) {
        errors.password_2 = "Password mismatch";
      }
    },
    fullname: value => {
      if (!isAuth && !value) {
        errors.fullname = "Enter your name and surname";
      }
    }
  };

  Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
};