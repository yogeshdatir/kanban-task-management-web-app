import { Draggable, DraggableProvided } from '@hello-pangea/dnd';
import { TTask } from '../../types';
import { TaskContainer, SubTaskDetails, TaskTitle } from './Task.styled';

type Props = {
  task: TTask;
  index: number;
  onClick: () => void;
};

const Task = ({ task, index, onClick }: Props) => {
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
          <SubTaskDetails>{`0 of 2 subtasks`}</SubTaskDetails>
        </TaskContainer>
      )}
    </Draggable>
  );
};

export default Task;
