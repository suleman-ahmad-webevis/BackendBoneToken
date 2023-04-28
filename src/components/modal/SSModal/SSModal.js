import {
  SSModalBlock,
  SSModalOverlay,
  SSModalContainer,
  SSModalHeader,
  SSModalClose,
  SSModalBody,
} from "./SSModal.styles.js";
import CloseModal from "../../../assets/images/SSModal/CloseModal.png";
import { Img } from "../../../GlobalStyles";

const SSModal = ({ children, active, hideModal }) => {
  return (
    <>
      {active && (
        <SSModalBlock>
          <SSModalOverlay onClick={() => hideModal()}></SSModalOverlay>
          <SSModalContainer>
            <SSModalHeader>
              <SSModalClose onClick={() => hideModal()}>
                <Img src={CloseModal} />
              </SSModalClose>
            </SSModalHeader>
            <SSModalBody>{children}</SSModalBody>
          </SSModalContainer>
        </SSModalBlock>
      )}
    </>
  );
};

export default SSModal;
