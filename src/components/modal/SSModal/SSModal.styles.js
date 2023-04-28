import styled from "styled-components";

export const SSModalBlock = styled.div`
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
  padding: 10px 0px;
`;

export const SSModalOverlay = styled.a`
  background: rgba(247, 248, 249, 0.75);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: block;
  cursor: default;
`;

export const SSModalContainer = styled.div`
  background: #ffffff;
  border: 1px solid rgba(33, 150, 243, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  /* max-width: 840px; */
  flex-basis: 50%;
  animation: slide-down 0.2s ease 1;
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
`;

export const SSModalBody = styled.div`
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

export const SSModalHeader = styled.div`
  position: relative;
`;

export const SSModalClose = styled.div`
  position: absolute;
  top: 13px;
  right: 10px;
  cursor: pointer;
  z-index: 1;
`;
