import { create } from "zustand";
import { getTasks, addTask, updateTask, deleteTask } from "../api/taskApi";

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskStore {
    tasks: Task[];
    fetchTasks: () => Promise<void>;
    addTask: (task: string) => Promise<void>;
    toggleTask: (id: number, completed: boolean) => Promise<void>;
    removeTask: (id: number) => Promise<void>;
}

export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    fetchTasks: async () => {
      const tasks = await getTasks();
      set({ tasks });
    },
    addTask: async (text: string) => {
      const newTask = await addTask(text);
      set((state) => ({ tasks: [...state.tasks, newTask] }));
    },
    toggleTask: async (id, completed) => {
      await updateTask(id, completed);
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, completed } : task
        ),
      }));
    },
    removeTask: async (id) => {
        await deleteTask(id);
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
        }));
    },
}));