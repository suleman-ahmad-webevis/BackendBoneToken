import React, { Fragment } from "react";
import {
  ModalBlock,
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalOverlay,
} from "./modal.styles";

const SmartSearchModal = ({ footer, children, active, hideModal }) => {
  return (
    <Fragment>
      {active && (
        <ModalBlock>
          <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
          <ModalContainer Height>
            {/* <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <ModalClose onClick={() => hideModal()}>X</ModalClose>
            </ModalHeader> */}
            <ModalBody>{children}</ModalBody>
            <ModalFooter>{footer}</ModalFooter>
          </ModalContainer>
        </ModalBlock>
      )}
    </Fragment>
  );
};
export default SmartSearchModal;
