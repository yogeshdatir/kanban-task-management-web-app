import { TSubtask } from '../types';
import { List } from './SubtaskList.styled';

type Props = {
  label: string;
  list: TSubtask[];
  handleSubTaskStatusChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    subTaskTitle: TSubtask['title']
  ) => void;
};

const SubtaskList = ({ label, list, handleSubTaskStatusChange }: Props) => {
  return (
    <List>
      <p>{label}</p>
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
