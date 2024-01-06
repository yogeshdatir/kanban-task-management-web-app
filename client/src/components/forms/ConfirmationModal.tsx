import PopupModal from '../PopupModal';

type Props = {
  setShowFormModal: (prevState: boolean) => void;
};

const ConfirmationModal = ({ setShowFormModal }: Props) => {
  return <PopupModal></PopupModal>;
};

export default ConfirmationModal;
