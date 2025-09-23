import "./App.css";
import { useState } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const initialTasks = [{ id: 1, text: "The World is Yours", completed: false }, {id: 2, text: "We are getting there, now add tasks", completed: false}];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  return (
    <>
      <h1>Task Manager</h1>
      <div>
        <h2>Tasks</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.text}{" "}
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => {
                  setTasks(
                    tasks.map((t) =>
                      t.id === task.id ? { ...t, completed: !t.completed } : t
                    )
                  )
                }}
              />
              <span
                className={task.completed ? "completed-task" : "task-text"}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
