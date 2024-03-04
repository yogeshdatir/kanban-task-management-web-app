import { Draggable, DraggableProvided } from '@hello-pangea/dnd';
import { TSubtask, TTask } from '../../types';
import { TaskContainer, SubTaskDetails, TaskTitle } from './Task.styled';

type Props = {
  task: TTask;
  index: number;
  onClick: () => void;
};

const Task = ({ task, index, onClick }: Props) => {
  const incompleteSubtasksCount = task.subtasks.reduce(
    (incompleteSubtasks: number, subTask: TSubtask) => {
      if (!subTask.isCompleted) return incompleteSubtasks + 1;
      return incompleteSubtasks;
    },
    0
  );
  const subtasksCount = task.subtasks.length;

  return (
    <Draggable draggableId={task.title} index={index}>
      {(provided: DraggableProvided) => (
        <TaskContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onClick={() => onClick()}
        >
          <TaskTitle>{task.title}</TaskTitle>
          <SubTaskDetails>{`${incompleteSubtasksCount} of ${subtasksCount} subtasks`}</SubTaskDetails>
        </TaskContainer>
      )}
    </Draggable>
  );
};

export default Task;
