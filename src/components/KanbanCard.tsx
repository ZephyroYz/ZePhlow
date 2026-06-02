import { Ellipsis, Pencil,Trash2, Copy } from "lucide-react";
import { useState } from "react";


interface KanbanCardProps{
    id: string;
    title: string;
    desc?: string;
    onDeleteTask: (id: string) => void;
}

export default function KanbanCards({id, title, desc, onDeleteTask}: KanbanCardProps){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return(
        <div className="relative border border-gray-400 p-4 rounded-md bg-gray-50 mt-2">
            <div className="flex justify-between items-start gap-2 mb-2">
                <h4 className="text-base mb-2"> {title} </h4>
                <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-slate-400 p-1 rounded cursor-pointer block border border-gray-300 text-white"
                >
                    <Ellipsis size={16}/>
                </button>

                {isMenuOpen && (
                    <div className="mt-1 w-28 bg-white border border-gray-300 rounded shadow-md flex flex-col p-1 text-xs text-gray-800">
                        <button 
                        className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded cursor-pointer flex justify-between items-center"
                        >
                            Edit
                            <Pencil size={14}/>
                        </button>

                        <button 
                        className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded cursor-pointer flex justify-between items-center"
                        >
                            Copy
                            <Copy size={14}/>
                        </button>

                        <button 
                        onClick={() => onDeleteTask(id)}
                        className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded text-red-600 hover:bg-red-50 cursor-pointer flex justify-between items-center"
                        >
                            Delete
                            <Trash2 size={14}/>
                        </button>

                    </div>
                )}

            </div>

                {desc && (
                    <p className="text-sm whitespace-pre-wrap">
                        {desc} 
                    </p>
                )}
            
            <span className="text-slate-400 text-xs">
                ID: {id}
            </span>

        </div>
    )
}
