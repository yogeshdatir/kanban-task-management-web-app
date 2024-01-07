import PopupModal from '../PopupModal';
import {
  ActionWrapper,
  ConfirmationModalContainer,
  DangerBtn,
  Heading,
  Message,
  SecondaryBtn,
} from './ConfirmationModal.styled';

type Props = {
  setShowConfirmationModal: (prevState: boolean) => void;
  onConfirm: () => void;
};

const ConfirmationModal = ({ setShowConfirmationModal, onConfirm }: Props) => {
  return (
    <PopupModal>
      <ConfirmationModalContainer>
        <Heading>Delete this board?</Heading>
        <Message>
          Are you sure you want to delete the ‘Platform Launch’ board? This
          action will remove all columns and tasks and cannot be reversed.
        </Message>
        <ActionWrapper>
          <DangerBtn
            onClick={() => {
              onConfirm();
              setShowConfirmationModal(false);
            }}
          >
            Delete
          </DangerBtn>
          <SecondaryBtn
            onClick={() => {
              setShowConfirmationModal(false);
            }}
          >
            Cancel
          </SecondaryBtn>
        </ActionWrapper>
      </ConfirmationModalContainer>
    </PopupModal>
  );
};

export default ConfirmationModal;
