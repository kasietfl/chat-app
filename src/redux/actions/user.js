import { openNotification } from "../../utils/helpers";
import { userApi } from "../../utils/api";

const Actions = {
  setUserData: data => ({
    type: "USER:SET_DATA",
    payload: data
  }),
  fetchUserData: () => dispatch => {
    userApi.getMe().then(({ data }) => {
      dispatch(Actions.setUserData(data));
    });
  },
  fetchUserLogin: postData => dispatch => {
    return userApi.login(postData).then(({ data }) => {
        const { status, token } = data;
        if (status === "error") {
            openNotification({
                title: "Authorization error",
                text: "Invalid login or password",
                type: "error"
            })
        } else {
            openNotification({
                text: "Successfully logged in",
                type: "success"
            });
            window.axios.defaults.headers.common["token"] = token;
            window.localStorage["token"] = token;
            dispatch(Actions.fetchUserData());
        }
        return data;
    });
  },
  fetchUserRegister: postData => dispatch => {
    return userApi.register(postData).then(({ data }) => {
      console.log(data);
      return data;
    });
  }
};

export default Actions;