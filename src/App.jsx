import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialState = [
    { id: 1, title: "Go to gym", completed: true },
    { id: 2, title: "complete online", completed: false },
    { id: 3, title: "pick up groseries", completed: true },
    { id: 4, title: "complete todo app frontend mentor", completed: false },
];

function App() {
    const [todos, setTodos] = useState(initialState);
    const [filter, setFilter] = useState("completed");

    const filteredTodos = () => {
        switch(filter) {
            case 'all':
                return todos;
            case 'active':
                return todos.filter((todo) => !todo.completed);
            case 'completed':
                return todos.filter((todo) => todo.completed);
            default:
                return todos
        }
    }

    const handleCreateTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const changeFilter = (filter) => setFilter(filter)

    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
            <Header />
            <main className="container mx-auto px-4 mt-8">
                {/*Todo Create */}
                <TodoCreate handleCreateTodo={handleCreateTodo} />
                {/*Todo List */}
                <TodoList
                    todos={filteredTodos()}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
                {/*Todo Computed */}
                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearCompleted={clearCompleted}
                />
            </main>

            <TodoFilter changeFilter={changeFilter} filter={filter} />

            <p className="text-center mt-8">drag and drop</p>
        </div>
    );
}

export default App;
