import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { verifyTheOtp } from "../../redux/user/userSlice";

const Otp = () => {
  const [otp, setOtp] = useState(0);
  const dispatch = useDispatch();
  const otpHandler = (e) => {
    e.preventDefault();
    dispatch(verifyTheOtp(otp));
  };

  return (
    <div>
      Enter Otp
      <input name="otp" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <button onSubmit={otpHandler}>Submit</button>
    </div>
  );
};

export default Otp;
