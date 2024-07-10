import React, { useState } from 'react';

function TodoForm({ onAddTodo }) {
    // Initialize inputVal as an object to store task details
    const [inputVal, setInputVal] = useState({ id: "", content: "", checked: false });

    // Update inputVal with the current input value
    const handleInputChange = (value) => {
        setInputVal({ id: value, content: value, checked: false });
    };

    // Handle form submission
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputVal); // Pass the task to the parent component
        setInputVal({ id: "", content: "", checked: false }); // Reset input fields
    };

    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input 
                        type="text" 
                        className="todo-input"  
                        autoComplete="off"
                        value={inputVal.content}
                        onChange={(event) => handleInputChange(event.target.value)}
                    />
                </div>
                <div>
                    <button type="submit" className="todo-btn">
                        Add Task
                    </button>
                </div>
            </form>
        </section>
    );
}

export default TodoForm;
