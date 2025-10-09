import type { Task } from "../App";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center justify-between p-3 bg-gray-100 rounded">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
              className="w-4 h-4"
            />
            <span className={task.completed ? "completed-task" : "task-text"}>
              {task.text}
            </span>
          </div>
          <button 
            className="px-3 py-1 bg-red-100 hover:bg-red-200 rounded text-sm" 
            onClick={() => onDeleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
