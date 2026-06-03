import KanbanCards from "./KanbanCard";
import  {type TaskData}  from "@/views/Kanban";
import { Plus } from "lucide-react";



interface ColumnProps{
    id: string;
    title: string;
    onAddTask: () => void;
    onDeleteTask: (id: string) => void;
    tasks: TaskData[];
}


export default function Column({id, title, onAddTask, tasks,onDeleteTask}: ColumnProps) {

    return(
        <div className="w-72 h-120 shrink-0 border border-gray-600 p-4 rounded-md bg-gray-200 flex flex-col">
            <div className="flex justify-between items-center p-2 shrink-0">
                <h3>{title}</h3>
                <span>{tasks.length}</span>
                <button 
                    onClick={onAddTask} 
                    className="bg-teal-600 p-1 rounded cursor-pointer block border border-gray-300 text-white">
                        <Plus size={20}/>
                </button>
            </div>
            
            <div className="overflow-y-auto pb-32">
                {tasks.map((task) =>(
                    <KanbanCards 
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        desc={task.desc}
                        onDeleteTask={onDeleteTask}
                    />
                ))}
            </div>

        </div>

    )
}