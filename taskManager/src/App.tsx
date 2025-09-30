import "./App.css";
import { useState } from "react";
import TaskList from "./TaskList";
import Digimon from "./Digimon";
import AddTask from "./AddTask";

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export interface DigimonAttributes {
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
  const [digiMon, setdigiMon] = useState<DigimonAttributes[]>(starterMon);
  const [newTask, setNewTask] = useState<string>("");
  const [newMon, setNewMon] = useState<string>("");
  const [newType, setNewType] = useState<string>("");

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTaskObject = {
      id: tasks.length + 1,
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, newTaskObject]);
    setNewTask("");
  };

  const handleNewMon = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newDigimonObject = {
      id: digiMon.length + 1,
      name: newMon,
      type: newType,
    };

    setdigiMon([...digiMon, newDigimonObject]);
    setNewMon("");
    setNewType("");
  };

  const deleteTask = (id: number) => {
    const newTasks = tasks.filter((tasks) => tasks.id !== id);
    setTasks(newTasks);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteMon = (id: number) => {
    const deleteMon = digiMon.filter((digi) => digi.id !== id);
    setdigiMon(deleteMon);
  };

  return (
    <>
      <h1>Task Manager</h1>
      <div id="taskList">
        <h2>Tasks</h2>
        <TaskList
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
        <AddTask
          currentValue={newTask}
          handleAddTask={handleAddTask}
          updateValue={setNewTask}
        ></AddTask>
      </div>

      <div id="digimon">
        <Digimon Digimon={digiMon} deleteMon={deleteMon}></Digimon>

        <form onSubmit={handleNewMon}>
          <input
            type="text"
            placeholder="What is your digimon?"
            value={newMon}
            onChange={(e) => setNewMon(e.target.value)}
          />
          <input
            type="text"
            placeholder="What is your digimon's type?"
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
