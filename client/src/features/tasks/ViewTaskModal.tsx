import { useRef, useState } from 'react';
import PopupModal from '../../components/PopupModal';
import SubtaskList from '../../components/SubtaskList';
import { FormContainer } from '../../components/forms/Form.styled';
import Select from '../../components/forms/select/SelectDropdown';
import useClickOutside from '../../hooks/useClickOutside';
import { TColumn, TSubtask, TTask } from '../../types';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../react-redux/boardSlice';
import DropdownMenuIcon from '../../../assets/icon-vertical-ellipsis.svg?react';
import DropdownMenu from '../../components/dropdownMenu/DropdownMenu';
import { ViewTaskHeader } from './Task.styled';

type Props = {
  task: TTask | null;
  column: TColumn;
  showViewTaskModal: boolean;
  setShowViewTaskModal: (prevState: boolean) => void;
  setShowTaskFormModal: (prevState: boolean) => void;
  setShowConfirmationModal: (prevState: boolean) => void;
};

const ViewTaskModal = ({
  task,
  column,
  showViewTaskModal,
  setShowViewTaskModal,
  setShowTaskFormModal,
  setShowConfirmationModal,
}: Props) => {
  const [localTaskCopy, setLocalTaskCopy] = useState<TTask | null>(task);

  const dispatch = useDispatch();

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => {
    if (showViewTaskModal) setShowViewTaskModal(!showViewTaskModal);
  });

  const subTaskCount = task?.subtasks.length || 0;
  const completedSubTaskCount = localTaskCopy?.subtasks.reduce(
    (sum: number, subTask: TSubtask) => {
      if (subTask.isCompleted) return sum + 1;
      return sum;
    },
    0
  );

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
          column,
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
        column,
      })
    );
  };

  return (
    <PopupModal ref={wrapperRef}>
      <FormContainer>
        <ViewTaskHeader>
          <p>{task?.title}</p>
          <div className="dropdown-icon-wrapper">
            <DropdownMenu
              dropdownMenuIcon={<DropdownMenuIcon />}
              options={[
                { value: 'editTask', displayValue: 'Edit Task' },
                {
                  value: 'deleteTask',
                  displayValue: 'Delete Task',
                  style: { color: '#EA5555' },
                },
              ]}
              onChange={(value) => {
                switch (value) {
                  case 'editTask':
                    setShowTaskFormModal(true);
                    setShowViewTaskModal(false);
                    break;

                  case 'deleteTask':
                    setShowConfirmationModal(true);
                    break;

                  default:
                    break;
                }
              }}
            />
          </div>
        </ViewTaskHeader>
        {task?.description && (
          <p className="description">{task?.description}</p>
        )}
        <div>
          <SubtaskList
            label={`Subtasks (${completedSubTaskCount} of ${subTaskCount})`}
            list={localTaskCopy?.subtasks || []}
            handleSubTaskStatusChange={handleSubTaskStatusChange}
          />
        </div>
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
