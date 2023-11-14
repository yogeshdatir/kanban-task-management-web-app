export type TBoards = {
  boards: TBoard[];
  selectedBoard: string;
};

export type TBoard = {
  name: string;
  columns: TColumn[];
};

export type TColumn = {
  name: string;
  tasks: TTask[];
};

export type TTask = {
  title: string;
  description: string;
  status: string;
  subtasks: TSubtask[];
};

export type TSubtask = {
  title: string;
  isCompleted: boolean;
};
