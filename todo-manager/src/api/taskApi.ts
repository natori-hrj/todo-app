import axios from "axios";

const API_URL = "http://localhost:8000/api/tasks/";

export const getTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addTask = async (text: string) => {
    const response = await axios.post(API_URL, { text });
    return response.data;
};

export const updateTask = async (id: number, completed: boolean) => {
    await axios.put(`${API_URL}${id}/`, { completed });
};

export const deleteTask = async (id: number) => {
    await axios.delete(`${API_URL}${id}/`);
};
