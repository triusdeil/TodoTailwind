import { useState } from "react";
import "./App.css";
import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

function App() {
    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
                        Todo
                    </h1>
                    <button >
                        <MoonIcon className="fill-red-400"/>
                    </button>
                </div>
                <form className="bg-white rounded-md overflow-hidden py-4 px-4 flex gap-4 items-center mt-8">
                    <span className="rounded-full border-2 inline-block h-5 w-5"></span>
                    <input
                        placeholder="create new todo..."
                        type="text"
                        className="w-full text-gray-400 outline-none"
                    />
                </form>
            </header>

            <main className="container mx-auto px-4 mt-8">
                <div className="rounded-md bg-white [&>article]:p-4">
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="rounded-full border-2 inline-block h-5 w-5 flex-none"></button>
                        <p className="text-gray-600 flex-grow">
                            complete online js curse
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="rounded-full border-2 inline-block h-5 w-5 flex-none"></button>
                        <p className="text-gray-600 flex-grow">
                            complete online js curse
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="rounded-full border-2 inline-block h-5 w-5 flex-none"></button>
                        <p className="text-gray-600 flex-grow">
                            complete online js curse
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <section className="py-4 px-4 justify-between flex">
                        <span className="text-gray-400">5 items left</span>
                        <button className="text-gray-400">
                            clear complete
                        </button>
                    </section>
                </div>
            </main>

            <section className="container mx-auto px-4 mt-8">
                <div className="bg-white p-4 rounded-md flex justify-center gap-4">
                    <button className="text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Complete</button>
                </div>
            </section>

            <p className="text-center mt-8">drag and drop</p>
        </div>
    );
}

export default App;
