import styled from "styled-components";

export const RMContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 40px;
  padding: 50px 40px 10px 15px;
`;

export const RMHeading = styled.h5`
  font-weight: 900;
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  color: #000000;
`;
