import { useEffect } from "react";
import { useTaskStore } from "../store/taskStore";
import TaskItem from "./TaskItem";

export default function TaskList() {
    const { tasks, fetchTasks } = useTaskStore();

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <ul className="mt-4 space-y-2">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
}