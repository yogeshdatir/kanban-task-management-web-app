import { Droppable, DroppableProvided } from '@hello-pangea/dnd';
import { TColumn, TTask } from '../../types';
import Task from '../tasks/Task';
import { ColumnContainer, ColumnTitle, TaskList } from './Column.styled';
import { useState } from 'react';
import ViewTaskModal from '../tasks/ViewTaskModal';

type Props = {
  column: TColumn;
};

const Column = ({ column }: Props) => {
  const [selectedTask, setSelectedTask] = useState<TTask | null>(null);
  const [showViewTaskModal, setShowViewTaskModal] = useState(false);

  return (
    <>
      <Droppable droppableId={column.name}>
        {(provided: DroppableProvided) => (
          <ColumnContainer>
            <ColumnTitle>{`${column.name} (${column.tasks.length})`}</ColumnTitle>
            <TaskList ref={provided.innerRef} {...provided.droppableProps}>
              {column.tasks.map((task: TTask, index: number) => (
                <Task
                  key={task.title}
                  task={task}
                  index={index}
                  onClick={() => {
                    setSelectedTask(task);
                    setShowViewTaskModal(true);
                  }}
                />
              ))}
              {/* A place holder is a React element that is used to increase the available space in a droppable during a drag when it's needed. The place holder needs to be added as a child of the component that you designate as the droppable. */}
              {provided.placeholder}
            </TaskList>
          </ColumnContainer>
        )}
      </Droppable>
      {showViewTaskModal && (
        <ViewTaskModal
          // ? Difference between passing the task object and task id/title is that the modal won't update entire task object is changed
          task={selectedTask}
          column={column}
          showViewTaskModal={showViewTaskModal}
          setShowViewTaskModal={setShowViewTaskModal}
        />
      )}
    </>
  );
};

export default Column;
