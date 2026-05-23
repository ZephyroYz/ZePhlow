import KanbanCards from "./KanbanCard";
import  {type TaskData}  from "@/views/Kanban";




interface ColumnProps{
    id: string;
    title: string;
    tasks: TaskData[];
}


export default function Column({id, title, tasks}: ColumnProps) {
    return(
        <div className="w-72 shrink-0">
            <div>
                <h3>
                    {title}
                </h3>
                <span>
                    {tasks.length}
                </span>
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