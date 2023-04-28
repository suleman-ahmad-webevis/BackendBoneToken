import React, { useEffect } from "react";
import UserLogin from "../../components/Forms/UserRegisteration/UserLogin";

const UserLoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <UserLogin />;
};

export default UserLoginPage;
