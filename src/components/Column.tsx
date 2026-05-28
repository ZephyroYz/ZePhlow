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
        <div className="w-72 shrink-0">
            <div className="flex justify-between items-center">
                <h3>{title}</h3>
                <button 
                onClick={onAddTask} 
                className="bg-gray-200 p-1 rounded mt-2 cursor-ponter block">
                    <Plus size={20}/>
                </button>

                <span>{tasks.length}</span>
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