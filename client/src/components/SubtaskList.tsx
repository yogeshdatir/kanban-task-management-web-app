import { TSubtask } from '../types';
import { List } from './SubtaskList.styled';

type Props = {
  list: TSubtask[];
  handleSubTaskStatusChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    subTaskTitle: TSubtask['title']
  ) => void;
};

const SubtaskList = ({ list, handleSubTaskStatusChange }: Props) => {
  return (
    <List>
      {list.map((subTask: TSubtask) => (
        <label key={subTask.title}>
          <input
            type="checkbox"
            name="subtask"
            checked={subTask.isCompleted}
            onChange={(e) => handleSubTaskStatusChange(e, subTask.title)}
          />
          <p className={subTask.isCompleted ? 'completed' : ''}>{subTask.title}</p>
        </label>
      ))}
    </List>
  );
};

export default SubtaskList;
