import styled from "styled-components";

export const Article = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media screen and (max-width: 800px) {
    height: 50vh;
  }
`;

export const list = [
  {
    prop: "spin",
    name: "Spin",
  },
];
