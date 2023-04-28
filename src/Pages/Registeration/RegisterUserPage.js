import React, { useEffect } from "react";
import RegisterUser from "../../components/Forms/UserRegisteration/RegisterUser";

const RegisterUserPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <RegisterUser />;
};

export default RegisterUserPage;
