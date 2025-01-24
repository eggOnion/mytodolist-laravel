import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "../../css/displayToDoList.css";

function DisplayToDoList() {
    const [data, setData] = useState({ tasks: [] });
    const [loading, setLoading] = useState(true);
    const [editingTask, setEditingTask] = useState(null);  // Track the task being edited
    const [newTaskText, setNewTaskText] = useState('');  // Track the new text for the task

    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    useEffect(() => {
        // Fetch tasks from the backend
        axios
            .get('https://mytodolist-laravel.vercel.app/api/data', {
                headers: {
                    accept: 'application/json',
                    'X-CSRF-TOKEN': csrfToken, // Use the CSRF token
                },
                withCredentials: true,
            })
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    const combinedData = data.tasks.map((task) => ({
        task: task.task,
        taskId: task.id,
    }));

    // Handle task edit
    const handleEdit = (taskId, currentTask) => {
        setEditingTask(taskId);
        setNewTaskText(currentTask);
    };

    // Submit the edited task
    const handleUpdate = async (taskId) => {
        try {
            const response = await axios.put(`https://mytodolist-laravel.vercel.app/tasks/${taskId}`, {
                task: newTaskText,
            });
            const updatedTask = response.data;
            setData((prevState) => ({
                ...prevState,
                tasks: prevState.tasks.map((task) =>
                    task.id === updatedTask.id ? updatedTask : task
                ),
            }));
            setEditingTask(null);  // Reset editing state
            setNewTaskText('');  // Reset task text
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    // Handle task deletion
    const handleDelete = async (taskId) => {
        try {
            await axios.delete(`https://mytodolist-laravel.vercel.app/tasks/${taskId}`);
            setData((prevState) => ({
                ...prevState,
                tasks: prevState.tasks.filter((task) => task.id !== taskId),
            }));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div className="data-display">
            <h2>Task List</h2>
            <table>
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>No.</th>
                        <th style={{ textAlign: "center" }}>Task</th>
                        <th style={{ textAlign: "center" }}>Modifications</th>
                    </tr>
                </thead>
                <tbody>
                    {combinedData.map((item, index) => (
                        <tr key={item.taskId}>
                            <td>{index + 1}</td>
                            <td>
                                {editingTask === item.taskId ? (
                                    <input
                                        type="text"
                                        value={newTaskText}
                                        onChange={(e) => setNewTaskText(e.target.value)}
                                    />
                                ) : (
                                    item.task
                                )}
                            </td>
                            <td>
                                {editingTask === item.taskId ? (
                                    <button className="my-modifications-buttons" onClick={() => handleUpdate(item.taskId)}>
                                        Save
                                    </button>
                                ) : (
                                    <button className="my-modifications-buttons" onClick={() => handleEdit(item.taskId, item.task)}>
                                        Edit
                                    </button>
                                )}
                                <button className="my-modifications-buttons" onClick={() => handleDelete(item.taskId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayToDoList;