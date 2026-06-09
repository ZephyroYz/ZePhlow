import { Ellipsis, Pencil,Trash2, Copy } from "lucide-react";
import { useState, useRef, useEffect } from "react";


interface KanbanCardProps{
    id: string;
    title: string;
    desc?: string;
    onDeleteTask: (id: string) => void;
    onCopy: () => void;
    onUpdate: (newTitle: string, newDesc: string) => void;
}

export default function KanbanCards({id, title, desc, onDeleteTask, onCopy, onUpdate}: KanbanCardProps){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(title);
    const [editDesc, setEditDesc] = useState(desc || "");

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)){
                setIsMenuOpen(false);
            }
        };
        
        if (isMenuOpen){
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    },   [isMenuOpen]);

if (isEditing) {
    return (
        <div className="relative border border-teal-500 p-4 rounded-md bg-white mt-2 flex flex-col gap-2">
            <input 
                type="text" 
                value={editTitle} 
                onChange={(e) => setEditTitle(e.target.value)}
                className="border border-gray-300 rounded p-1 text-base focus:outline-none focus:border-teal-500"
            />
            <textarea 
                value={editDesc} 
                onChange={(e) => setEditDesc(e.target.value)}
                className="border border-gray-300 rounded p-1 text-sm focus:outline-none focus:border-teal-500 resize-none h-16"
            />
            <div className="flex justify-end gap-2 text-xs">
                <button 
                    onClick={() => setIsEditing(false)} 
                    className="bg-gray-200 px-2 py-1 rounded cursor-pointer"
                >
                    Cancelar
                </button>
                <button 
                    onClick={() => {
                        onUpdate(editTitle, editDesc); // 🔄 Mandamos los datos al estado global
                        setIsEditing(false);          // Apagamos los inputs
                    }} 
                    className="bg-teal-600 text-white px-2 py-1 rounded cursor-pointer"
                >
                    Guardar
                </button>
            </div>
        </div>
    );
}

    
    return(
        <div className="relative border border-gray-400 p-4 rounded-md bg-gray-50 mt-2">
            <div className="flex justify-between items-start gap-2 mb-2">
                <h4 className="text-base mb-2 flex-1"> {title} </h4>
                <div 
                className="flex flex-col items-end shrink-0 relative"
                ref={menuRef}
                >
                   <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="bg-slate-400 p-1 rounded cursor-pointer block border border-gray-300 text-white"
                    >
                        <Ellipsis size={16}/>
                    </button> 
                
                    {isMenuOpen && (
                        <div className="absolute top-full right-0 z-50 mt-1 w-28 bg-white border border-gray-300 rounded shadow-md flex flex-col p- text-xs text-gray-800">
                            <button 
                            onClick={() => {
                                setIsEditing(true);
                                setIsMenuOpen(false);
                            }}
                            className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded cursor-pointer flex justify-between items-center"
                            >
                                Edit
                                <Pencil size={14}/>
                            </button>

                            <button 
                            onClick={() => {
                                onCopy();
                                setIsMenuOpen(false);
                            }}
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
