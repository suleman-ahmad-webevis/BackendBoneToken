import styled from "styled-components";

export const ModalBlock = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 10px;
`;

export const ModalOverlay = styled.a`
  background: rgba(247, 248, 249, 0.75);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: block;
  cursor: default;
`;

export const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  max-height: ${({ Height }) => (Height ? "100vh" : "90vh")};
  max-width: ${({ Height }) => (Height ? "800px" : "850px")};
  padding: 0 20px;
  flex-basis: 50%;
  animation: slide-down 0.2s ease 1;
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
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
