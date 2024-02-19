import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

export default function TodoItem({ todo, removeTodo, updateTodo }) {
    const { id, title, completed } = todo;
    return (
        <article className="flex gap-4 border-b border-b-gray-400 dark:bg-gray-800 transition-all duration-1000 dark:text-gray-400" id={id}>
            <button
                onClick={() => updateTodo(id)}
                className={`h-5 w-5 rounded-full border-2  flex-none ${
                    completed
                        ? " bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
                        : "inline-block"
                }`}
            >
                {completed && <IconCheck />}
            </button>

            <p className={` text-gray-600 flex-grow dark:text-gray-400 ${completed && "line-through" }`}>{title}</p>
            <button onClick={() => removeTodo(id)} className="flex-none">
                <IconCross />
            </button>
        </article>
    );
}
