import { useState } from "react"

interface TaskFormProps{
    onSubmitTask: (title: string, desc: string) => void;
}




export default function TaskForm({ onSubmitTask }: TaskFormProps){

const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");
const setHandleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmitTask(title, desc);
    setTitle("");
    setDesc("");

}

    return(
        <form 
            className="flex flex-col gap-4"
            onSubmit={setHandleSubmit}
        >
            <input 
                type="text"
                placeholder="Tittle"
                className="w-full border border-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-200 transition-all duration-200 p-2 rounded outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea 
                placeholder="Description..." 
                className="w-full border border-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-200 transition-all duration-200 p-2 rounded outline-none p-2 rounded h-24 resize-y min-h-[80px] max-h-[200px]"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />

            <div>
                <button 
                    type="submit"
                    className="bg-teal-800 hover:bg-teal-600 px-4 py-2 rounded cursor-pointer text-white "
                >
                    Save
                </button>
            </div>

        </form>



    )
}