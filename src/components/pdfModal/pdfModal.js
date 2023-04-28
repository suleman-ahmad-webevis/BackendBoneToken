import React, { Fragment } from "react";
import {
  ModalBlock,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from "./pdfModalStyles";

const PDFModal = ({ children, active, hideModal }) => {
  return (
    <Fragment>
      {active && (
        <ModalBlock>
          <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>White Paper PDF</ModalTitle>
              <ModalClose onClick={() => hideModal()}>X</ModalClose>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </ModalContainer>
        </ModalBlock>
      )}
    </Fragment>
  );
};
export default PDFModal;
