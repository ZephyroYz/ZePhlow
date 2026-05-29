


interface KanbanCardProps{
    id: string;
    title: string;
    desc?: string;
}

export default function KanbanCards({id, title, desc}: KanbanCardProps){
    return(
        <div className="border border-gray-300 p-4 rounded-md bg-gray-50 mt-2">
            <h4 className="text-md"> {title} </h4>
            {desc && (
                <p className="text-sm"> {desc} </p>
            )}
            
            <span className="text-slate-400 text-xs">
                ID: {id}
            </span>

        </div>
    )
}
