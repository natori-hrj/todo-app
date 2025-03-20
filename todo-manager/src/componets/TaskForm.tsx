import { useState } from "react";
import { useTaskStore } from "../store/taskStore";

export default function TaskForm() {
    const [text, setText] = useState("");
    const addTask = useTaskStore((state) => state.addTask);
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        await addTask(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input 
              type="text" 
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="input task"
              className="border p-2 rounded"
              />
              <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                add
              </button>
        </form>
    );
}

