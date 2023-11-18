import { Droppable, DroppableProvided } from 'react-beautiful-dnd';
import { TColumn, TTask } from '../types';
import { ColumnContainer, ColumnTitle, TaskList } from './Column.styled';
import Task from './Task';

type Props = {
  column: TColumn;
};

const Column = ({ column }: Props) => {
  return (
    <Droppable droppableId={column.name}>
      {(provided: DroppableProvided) => (
        <ColumnContainer>
          <ColumnTitle>{`${column.name} (${column.tasks.length})`}</ColumnTitle>
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {column.tasks.map((task: TTask, index: number) => (
              <Task key={task.title} task={task} index={index} />
            ))}
            {/* A place holder is a React element that is used to increase the available space in a droppable during a drag when it's needed. The place holder needs to be added as a child of the component that you designate as the droppable. */}
            {provided.placeholder}
          </TaskList>
        </ColumnContainer>
      )}
    </Droppable>
  );
};

export default Column;
