import React from 'react';
import { Task } from '../types/Task';
import './TaskItem.css';

interface TaskItemProps {
  task: Task;
  onUpdate: (id: number, updates: { completed?: boolean; title?: string; description?: string }) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editTitle, setEditTitle] = React.useState(task.title);
  const [editDescription, setEditDescription] = React.useState(task.description);

  const handleToggleComplete = () => {
    onUpdate(task.id, { completed: !task.completed });
  };

  const handleSaveEdit = () => {
    onUpdate(task.id, { title: editTitle, description: editDescription });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditTitle(task.title);
    setEditDescription(task.description);
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleComplete}
          className="task-checkbox"
        />
        
        {isEditing ? (
          <div className="task-edit-form">
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="task-edit-title"
              placeholder="Task title"
            />
            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              className="task-edit-description"
              placeholder="Task description"
              rows={2}
            />
            <div className="task-edit-buttons">
              <button onClick={handleSaveEdit} className="save-btn">Save</button>
              <button onClick={handleCancelEdit} className="cancel-btn">Cancel</button>
            </div>
          </div>
        ) : (
          <div className="task-details">
            <h3 className="task-title">{task.title}</h3>
            {task.description && <p className="task-description">{task.description}</p>}
            <small className="task-date">
              Created: {new Date(task.createdAt).toLocaleDateString()}
            </small>
          </div>
        )}
      </div>
      
      {!isEditing && (
        <div className="task-actions">
          <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
          <button onClick={() => onDelete(task.id)} className="delete-btn">Delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;