import React, { useEffect, useState } from "react";
import { Result, Button } from "antd";

import { userApi } from "../../../utils/api";
import { Block } from "../../../components";

const renderTextInfo = (hash, verified) => {
  if (hash) {
    if (verified) {
      return {
        status: "success",
        message: "Account confirmed successfully!"
      };
    } else {
      return {
        status: "error",
        message: "Account verification error!"
      };
    }
  } else {
    return {
      status: "success",
      message: "Сonfirmation link has been sent to your Email."
    };
  }
};

const CheckEmailInfo = ({ location, history }) => {
  const [verified, setVerified] = useState(false);
  const hash = location.search.split("hash=")[1];
  const info = renderTextInfo(hash, verified);

  useEffect(() => {
    if (hash) {
      userApi.verifyHash(hash).then(({ data }) => {
        if (data.status === "success") {
          setVerified(true);
        }
      });
    }
  });

  return (
    <div>
      <Block>
        <Result
          status={info.status}
          title={info.status === "success" ? "Well done!" : "Error"}
          subTitle={info.message}
          extra={
            info.status === "success" &&
            verified && (
              <Button type="primary" onClick={() => history.push("/login")} style={{backgroundColor: "#7E6CD0"}}>
                Log In
              </Button>
            )
          }
        />
      </Block>
    </div>
  );
};

export default CheckEmailInfo;