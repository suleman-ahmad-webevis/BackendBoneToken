import styled from "styled-components";

export const ModalBlock = styled.div`
  display: flex;
`;

export const ModalOverlay = styled.a`
  background: none;
  /* background: rgba(247, 248, 249, 0.75); */
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const ModalClose = styled.a`
  align-self: flex-end;
  color: red;
  text-decoration: none;
  cursor: pointer;
  font-size: 2rem;
  :hover {
    transition: ease-in 50ms;
    transform: scale(120%);
  }
`;

export const ModalContainer = styled.div`
  background: #ffffff;
  border: 1px solid rgba(33, 150, 243, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 50%;
  position: absolute;
  /* left: 250px; */
  top: 90px;
  z-index: 900;

  @media (max-width: 1200px) {
    /* left: 20px; */
    top: 150px;
  }
`;

export const ModalBody = styled.div`
  padding: 10px;
  position: relative;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: none;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: none;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2979ff;
  padding: ${({ Padding }) =>
    Padding ? "30px 5px 15px 5px" : "20px 5px 10px 5px"};
`;

export const ModalTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

export const ModalFooter = styled.div`
  padding: 10px 0px;
  text-align: right;
`;

export const Button = styled.button`
  background: #7b2cbf;
  color: white;
  font-size: 1em;
  margin: 10px;
  padding: 5px 10px;
  border: 2px solid #7b2cbf;
  border-radius: 3px;
  cursor: pointer;
`;
