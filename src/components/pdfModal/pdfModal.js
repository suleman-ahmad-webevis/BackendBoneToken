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
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <ModalBlock>
            <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
            <ModalContainer>
              <ModalHeader>
                <ModalTitle></ModalTitle>
                <ModalClose onClick={() => hideModal()}>X</ModalClose>
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
            </ModalContainer>
          </ModalBlock>
        </div>
      )}
    </Fragment>
  );
};
export default PDFModal;
