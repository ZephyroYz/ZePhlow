import { useState} from "react"
import Column from "@/components/Column"

export interface TaskData {
    id: string;
    title: string;
    desc?: string;
}

interface ColumnData {
    id: string;
    title: string;
    tasks: TaskData[];
}


const initialColumns: ColumnData[] = [
    {
        id: 'id-Pendings',
        title: '',
        tasks: []
    },

    {
        id: 'id-InProgress',
        title: 'In Progress',
        tasks:[]
    },
       
    {
        id: 'id-Completed',
        title:'Completed' ,
        tasks: []
    }
];


export default function Kanban(){
const [columns, setColumns] = useState<ColumnData[]>(initialColumns);

    return(
        <div className="p-8">
            <div>
                <h2>My Pendings</h2>
            </div>

            <div className="flex gap-4 items-start overflow-x-auto pb-4">
                {columns.map((column) => (
                    <Column
                        key={column.id}
                        id={column.id}
                        title={column.title}
                        tasks={column.tasks}

                    />
                ))}

            </div>

        </div>
    )
}