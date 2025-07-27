import React from 'react';
import type { FilterType } from '../types';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  todoCount: {
    total: number;
    active: number;
    completed: number;
  };
}

const TodoFilter: React.FC<TodoFilterProps> = ({
  currentFilter,
  onFilterChange,
  todoCount,
}) => {
  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' },
  ];

  return (
    <div className="todo-filter">
      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`filter-btn ${
              currentFilter === filter.key ? 'active' : ''
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="todo-stats">
        <span>
          {todoCount.active} of {todoCount.total} remaining
        </span>
      </div>
    </div>
  );
};

export default TodoFilter;
