import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const AirDrop = () => {
  return (
    <AirDropWrapper>
      <div id="69947-d4g1evo2" class="sw_container">
        <Helmet>
          <script
            type="text/javascript"
            src="https://sweepwidget.com/w/j/w_init.js"
          ></script>
        </Helmet>
      </div>
    </AirDropWrapper>
  );
};

export default AirDrop;

export const AirDropWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  border-radius: 8px;
  height: 90vh;
  overflow: scroll; */
`;
