export default ({ isAuth, values, errors }) => {
    const rules = {
      email: (errors, value) => {
        if (!value) {
            errors.email = "E-Mail is required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            errors.email = "Invalid email address";
          }
      },
      password: (errors, value) => {
        if (!value) {
          errors.password = "Password is required";
        } else if ( !isAuth &&
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
        ) {
          errors.password = "Passowrd must be stronger";
        }
      }
    };

    Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
};
