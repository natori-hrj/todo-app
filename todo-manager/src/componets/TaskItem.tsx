import { useTaskStore } from "../store/taskStore";

interface TaskProps {
    task: { id: number; text: string; completed: boolean };
}

export default function TaskItem({ task }: TaskProps) {
    const { toggleTask, removeTask } = useTaskStore();

    return (
        <li className="flex jutify-between items-center border p-2 rounded">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id, !task.completed)}
              className="mr-2"
            />
            <span className={task.completed ? "line-through" : ""}>{task.text}</span>
            <button onClick={() => removeTask(task.id)} className="text-red-500">
                Delete
            </button>
        </li>
    );
}