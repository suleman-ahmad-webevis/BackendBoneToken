import React from "react";
import BackArrow from "../../assets/images/BackArrow.png";
import { Img } from "../../GlobalStyles";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)}>
      <Img src={BackArrow} alt="BackArrow" />
    </div>
  );
};

export default Back;
