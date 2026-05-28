import KanbanCards from "./KanbanCard";
import  {type TaskData}  from "@/views/Kanban";
import { Plus } from "lucide-react";



interface ColumnProps{
    id: string;
    title: string;
    onAddTask: () => void;
    tasks: TaskData[];
}


export default function Column({id, title, onAddTask, tasks}: ColumnProps) {
    return(
        <div className="w-72 shrink-0 border border-black p-4 rounded-md bg-gray-50">
            <div className="flex justify-between items-center p-2">
                <h3>{title}</h3>
                <span>{tasks.length}</span>
                <button 
                    onClick={onAddTask} 
                    className="bg-gray-200 p-1 rounded cursor-pointer block">
                        <Plus size={20}/>
                </button>
            </div>
            
            <div>
                {tasks.map((task) =>(
                    <KanbanCards 
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        desc={task.desc}
                    />
                ))}
            </div>

        </div>

    )
}