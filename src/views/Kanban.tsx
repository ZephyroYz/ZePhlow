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
        tasks: [
            {id: 'task-1' , title: 'My first task', desc:'My first description'}
        ]
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
const [isModalOpen, setIsModalOpen] = useState(false);
const [activeColumnId, setActiveColumnID] = useState<string | null>(null);
const [boardTitle, setBoardTitle] = useState("My pendings");
const [isEditingTitle, setIsEditingTitle] = useState(false);


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

const HandleDeleteTask = (taskId: string) => {
    const updateColumns = columns.map((column) => ({
        ...column,
        tasks: column.tasks.filter((task) => task.id !== taskId),
    }));

    setColumns(updateColumns);
}

const handleTitleBlur = () => {
    if (boardTitle.trim() === ""){
        setBoardTitle("Untitled Board :(");
    }
    setIsEditingTitle(false)
};

const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter'){
        handleTitleBlur();
    }
};


const HandleCopyTask = (columnId: string, taskToCopy: TaskData) => {
    const duplicatedTask: TaskData= {
        ...taskToCopy,
        id: crypto.randomUUID()
    };


    const updateColumns = columns.map((column) => {
        if (column.id === columnId) {
            return{
                ...column,
                tasks: [...column.tasks, duplicatedTask]
            };
        }
        return column;
    });

    setColumns(updateColumns);
    };

    return(
        <div className="p-8">
            <div className="flex justify-between items-center pb-1 text-xl">
                {isEditingTitle ? (
                    <div className="flex felx-col relative pb-1">
                        <input 
                            type="text"
                            value={boardTitle}
                            maxLength={50}
                            onChange={(e) => setBoardTitle(e.target.value)}
                            onBlur={handleTitleBlur}
                            onKeyDown={handleTitleKeyDown}
                            autoFocus
                            className="bg-transparent border-b-2 border-slate-400 focus:outline-none px-2 py-2 w-64"
                        />
                        <span className="absolute right-2 bottom-1 text-xs font-normal text-gray-400 pointer-events-none">
                            {boardTitle.length}/50
                        </span>
                    </div>

                ) : (
                        <h2
                            onClick={() => setIsEditingTitle(true)}
                            className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded transition-colors"
                            title="Click to edit"
                        >
                            {boardTitle}
                        </h2>
                )}        
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
                        tasks={column.tasks}
                        onDeleteTask={HandleDeleteTask}
                        onCopyTask={HandleCopyTask}
                    >

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