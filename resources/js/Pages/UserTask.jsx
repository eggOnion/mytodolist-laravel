import React, { useState } from 'react';
import axios from 'axios';

import "../../css/userTask.css";
import TextInput from '@/Components/TextInput';


function App() {
    const [text, setText] = useState('');

    // Retrieve the CSRF token from the meta tag
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(csrfToken);
            const response = await axios.post('https://mytodolist-laravel.vercel.app/api/todolist', { task: text },
                {
                    headers: {accept: 'application/json',
                        'X-CSRF-TOKEN': csrfToken, // Use the CSRF token
                    },
                    withCredentials: true,
                }
            );
            console.log('Data saved:', response.data);
            setText('');
            window.location.reload();
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    return (
        <div className="my-todolist">
            {/* <h1>To-Do List</h1> */}
            <form onSubmit={handleSubmit}>
                <TextInput
                    className="my-task"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter your task..."
                    required
                    pattern=".*\S.*" // Ensures at least one non-whitespace character
                    title="The input must not be empty"
                />
                {/* <input
                    className="my-task"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter your task"                
                    required
                /> */}
                <button type="submit" className="my-todolist-submit-button">
                    Add Task
                </button>
            </form>
        </div>
    );
}

export default App;
