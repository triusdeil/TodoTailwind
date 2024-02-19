export default function TodoComputed({ computedItemsLeft, clearCompleted }) {
    return (
        <section className="dark:bg-gray-800 transition-all duration-1000 flex py-4 px-4 justify-between rounded-b-md bg-white">
            <span className="text-gray-400">
                {computedItemsLeft} items left
            </span>
            <button onClick={clearCompleted} className="text-gray-400">
                clear complete
            </button>
        </section>
    );
}
