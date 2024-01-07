import { TSubtask } from '../types';

type Props = {
  list: TSubtask[];
};

const SubtaskList = ({ list }: Props) => {
  return (
    <div>
      {list.map((subTask: TSubtask) => (
        <label>
          <input type="checkbox" name="subtask" checked={subTask.isCompleted} />
          <span>{subTask.title}</span>
        </label>
      ))}
    </div>
  );
};

export default SubtaskList;
