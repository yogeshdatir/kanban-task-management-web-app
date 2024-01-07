import { useRef, useState } from 'react';
import PopupModal from '../../components/PopupModal';
import SubtaskList from '../../components/SubtaskList';
import { FormContainer } from '../../components/forms/Form.styled';
import Select from '../../components/forms/select/SelectDropdown';
import useClickOutside from '../../hooks/useClickOutside';
import { TTask } from '../../types';

type Props = {
  task: TTask | null;
  showViewTaskModal: boolean;
  setShowViewTaskModal: (prevState: boolean) => void;
};

const ViewTaskModal = ({
  task,
  showViewTaskModal,
  setShowViewTaskModal,
}: Props) => {
  const [selectedStatus, setSelectedStatus] = useState(task?.status || 'todo');

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => {
    if (showViewTaskModal) setShowViewTaskModal(!showViewTaskModal);
  });

  return (
    <PopupModal>
      <FormContainer ref={wrapperRef}>
        <p>{task?.title}</p>
        <p>{task?.description}</p>
        <p>Subtasks (2 of 3)</p>
        <SubtaskList list={task?.subtasks || []} />
        <Select
          selectedOption={selectedStatus}
          setSelectedOption={setSelectedStatus}
          options={[
            {
              value: 'todo',
              displayValue: 'todo',
            },
            {
              value: 'doing',
              displayValue: 'doing',
            },
            {
              value: 'done',
              displayValue: 'done',
            },
          ]}
          label="Current Status"
        />
      </FormContainer>
    </PopupModal>
  );
};

export default ViewTaskModal;
