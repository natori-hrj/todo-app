import TaskForm from "./componets/TaskForm";
import TaskList from "./componets/TaskList";

export default function App() {
  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-xl font-bold mb-4">TodoApp</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}
