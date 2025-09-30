interface addTaskProps {
  currentValue: string;
  handleAddTask: (task: React.FormEvent<HTMLFormElement>) => void;
  updateValue: (task: string) => void;
}

function AddTask({ handleAddTask, currentValue, updateValue }: addTaskProps) {
  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Add a task"
        value={currentValue}
        onChange={(e) => updateValue(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}

export default AddTask;
