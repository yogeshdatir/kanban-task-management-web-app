import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { TTask } from '../types';
import { TaskContainer, SubTaskDetails, TaskTitle } from './Task.styled';

type Props = {
  task: TTask;
  index: number;
};

const Task = ({ task, index }: Props) => {
  return (
    <Draggable draggableId={task.title} index={index}>
      {(provided: DraggableProvided) => (
        <TaskContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <TaskTitle>{task.title}</TaskTitle>
          <SubTaskDetails>{`0 of 2 subtasks`}</SubTaskDetails>
        </TaskContainer>
      )}
    </Draggable>
  );
};

export default Task;
