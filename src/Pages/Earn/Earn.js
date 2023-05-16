import React from "react";
import EarnComp from "../../components/Earn/EarnComp";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Earn = () => {
  return (
    <EarnContainer>
      <div id="69947-d4g1evo2" class="sw_container">
        <Helmet>
          <script
            type="text/javascript"
            src="https://sweepwidget.com/w/j/w_init.js"
          ></script>
        </Helmet>
      </div>
      <EarnComp />
    </EarnContainer>
  );
};

export default Earn;

export const EarnContainer = styled.div`
  display: flex;
  grid-gap: 20px;
  padding: 20px 10px;
`;
