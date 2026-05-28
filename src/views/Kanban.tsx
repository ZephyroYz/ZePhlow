import {useState} from "react"
import Column from "@/components/Column"
import Modal from "@/components/Modal";


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
        tasks: [
            {id: 'task-1' , title: 'Play Pugbmobile', desc:'Play videogames'}
        ]
    }
];


export default function Kanban(){
const [columns, setColumns] = useState<ColumnData[]>(initialColumns);
const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <div className="p-8">
            <div className="flex justify-between items-center">
                <h2>My Pendings</h2>

            </div>
            

            <div className="flex gap-4 items-start overflow-x-auto pb-4">



                {columns.map((column) => (
                    <Column
                        key={column.id}
                        id={column.id}
                        title={column.title}
                        onAddTask={() => setIsModalOpen(true)}
                        tasks={column.tasks}>

                    </Column>
                    

                ))}

            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h3>New Task</h3>
            </Modal>

        </div>
    )
}