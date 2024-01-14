import { useRef, useState } from 'react';
import PopupModal from '../../components/PopupModal';
import SubtaskList from '../../components/SubtaskList';
import { FormContainer } from '../../components/forms/Form.styled';
import Select from '../../components/forms/select/SelectDropdown';
import useClickOutside from '../../hooks/useClickOutside';
import { TSubtask, TTask } from '../../types';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../react-redux/boardSlice';

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
  const [localTaskCopy, setLocalTaskCopy] = useState<TTask | null>(task);

  const dispatch = useDispatch();

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => {
    if (showViewTaskModal) setShowViewTaskModal(!showViewTaskModal);
  });

  const subTaskCount = task?.subtasks.length || 0;
  const completedSubTaskCount =
    task?.subtasks.reduce((sum: number, subTask: TSubtask) => {
      if (subTask.isCompleted) return sum + 1;
      return sum;
    }, 0) || 0;

  const handleTaskStatusChange = (e: React.MouseEvent<HTMLOptionElement>) => {
    const target = e.target as HTMLInputElement;
    // OR (event.target as HTMLInputElement).value
    setLocalTaskCopy((prevTask: TTask | null) => {
      return prevTask && { ...prevTask, status: target.value };
    });

    localTaskCopy &&
      dispatch(
        updateTask({
          newTask: { ...localTaskCopy, status: target.value },
          oldTask: localTaskCopy,
        })
      );
  };

  const handleSubTaskStatusChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    subTaskTitle: TSubtask['title']
  ) => {
    setLocalTaskCopy((prevTask: TTask | null) => {
      const updatedSubtaskList = prevTask?.subtasks.map((subTask: TSubtask) => {
        if (subTask.title === subTaskTitle) {
          return { ...subTask, isCompleted: e.target.checked };
        } else {
          return subTask;
        }
      });

      return prevTask && updatedSubtaskList
        ? { ...prevTask, subtasks: updatedSubtaskList }
        : null;
    });

    const updatedSubtaskList = localTaskCopy?.subtasks.map(
      (subTask: TSubtask) => {
        if (subTask.title === subTaskTitle) {
          return { ...subTask, isCompleted: e.target.checked };
        } else {
          return subTask;
        }
      }
    );

    dispatch(
      updateTask({
        newTask: { ...localTaskCopy, subtasks: updatedSubtaskList },
        oldTask: localTaskCopy,
      })
    );
  };

  return (
    <PopupModal ref={wrapperRef}>
      <FormContainer>
        <p>{task?.title}</p>
        <p>{task?.description}</p>
        <p>{`Subtasks (${completedSubTaskCount} of ${subTaskCount})`}</p>
        <SubtaskList
          list={localTaskCopy?.subtasks || []}
          handleSubTaskStatusChange={handleSubTaskStatusChange}
        />
        <Select
          selectedOption={localTaskCopy?.status || ''}
          onChange={handleTaskStatusChange}
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
