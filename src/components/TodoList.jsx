import TodoItem from "./TodoItem";

export default function TodoList({todos, removeTodo, updateTodo}) {
    return (
        <div className="mt-8 rounded-md bg-white [&>article]:p-4">
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
                ))
            }
         
        </div>
    );
}
