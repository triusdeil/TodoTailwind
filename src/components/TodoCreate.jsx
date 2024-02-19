import { useState } from "react";

export default function TodoCreate({handleCreateTodo}) {

    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title.trim()){
            return setTitle('')
        }  
        handleCreateTodo(title)
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit} className="dark:bg-gray-800 transition-all duration-1000 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4">
            <span className=" rounded-full border-2 inline-block h-5 w-5"></span>
            <input
                placeholder="create new todo..."
                type="text"
                className="w-full dark:bg-gray-800 transition-all duration-1000 text-gray-400 outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
}
