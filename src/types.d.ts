export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type FilterType = 'all' | 'active' | 'completed';
