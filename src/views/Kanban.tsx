import {useState} from "react"
import Column from "@/components/Column"
import Modal from "@/components/Modal";
import TaskForm from "@/components/TaskForm";


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
        title: 'Pendings',
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
        tasks: [
            {id: 'task-1' , title: 'Play Pugbmobile', desc:'Play videogames'}
        ]
    }
];


export default function Kanban(){
const [columns, setColumns] = useState<ColumnData[]>(initialColumns);
const [isModalOpen, setIsModalOpen] = useState(false);
const [activeColumnId, setActiveColumnID] = useState<string | null>(null);
const HandleCreateTask = (title: string, desc: string) => {
    setIsModalOpen(false);
    const newTask: TaskData = {
        id: crypto.randomUUID(),
        title: title,
        desc: desc
    };

    const updateColumns = columns.map((column) => {
        if (column.id === activeColumnId){
            return{
                ...column,
                tasks: [...column.tasks, newTask]
            };
        }
        return column;
    });

    setColumns(updateColumns);
    setIsModalOpen(false)

}

    return(
        <div className="p-8">
            <div className="flex justify-between items-center p-4">
                <h2>My Pendings</h2>

            </div>
            

            <div className="flex gap-4 items-start overflow-x-auto pb-4">



                {columns.map((column) => (
                    <Column
                        key={column.id}
                        id={column.id}
                        title={column.title}
                        onAddTask={() => {
                            setActiveColumnID(column.id)
                            setIsModalOpen(true);
                        }}
                        tasks={column.tasks}>

                    </Column>
                    

                ))}

            </div>

            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
            >
                <TaskForm onSubmitTask={HandleCreateTask} />
            </Modal>

        </div>
    )
}