import "./App.css";
import { useState } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface Digimon {
  id: number;
  name: string;
  type: string;
}

const initialTasks = [
  { id: 1, text: "The World is Yours", completed: false },
  { id: 2, text: "We are getting there, now add tasks", completed: false },
];
const starterMon = [{ id: 0, name: "WarGreymon", type: "Vaccine" }];
function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [digiMon, setdigiMon] = useState<Digimon[]>(starterMon);
  const [newTask,setNewTask] = useState<string>("");

  return (
    <>
      <h1>Task Manager</h1>
      <div>
        <h2>Tasks</h2>
        <ul id="taskList">
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
                  );
                }}
              />
              <span
                className={task.completed ? "completed-task" : "task-text"}
              ></span>
            </li>
          ))}
        </ul>
        <form action="" onSubmit={(e) => e.preventDefault()

        }>
          <input type="text" placeholder="Add a task" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
          <button>Submit</button>
        </form>
      </div>

      <div id="digimon">
        <ul>
          {digiMon?.map((mon) => (
            <li key={mon.id}>
              <p>
                Your digimon is {mon.name} and it's a {mon.type} type!
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
