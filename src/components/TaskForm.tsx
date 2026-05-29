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
                className="w-full border p-2 rounded"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea 
                placeholder="Description..." 
                className="w-full border p-2 rounded h-24"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />

            <div>
                <button 
                    type="submit"
                    className="bg-gray-100 px-4 py-2 rounded cursor-pointer"
                >
                    Save
                </button>
            </div>

        </form>



    )
}