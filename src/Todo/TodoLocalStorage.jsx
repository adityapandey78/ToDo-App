const todoKey = "reactTodo";

// Retrieve tasks from local storage
export const getLocalStorageTodoData = () => {
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) return []; // Return an empty array if no data is found
    console.log("Initial load from local storage:", rawTodos);
    return JSON.parse(rawTodos);
};

// Save tasks to local storage
export const setLocalStorageTodoData = (task) => {
    return localStorage.setItem(todoKey, JSON.stringify(task));
    // setItem requires data to be in string format
};
