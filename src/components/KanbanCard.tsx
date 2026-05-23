


interface KanbanCardProps{
    id: string;
    title: string;
    desc?: string;
}

export default function KanbanCards({id, title, desc}: KanbanCardProps){
    return(
        <div className="border border-black p-4 rounded-md">
            <h4 className="text-md"> {title} </h4>
            {desc && (
                <p className="text-sm"> {desc} </p>
            )}
            
            <span>
                ID: {id}
            </span>

        </div>
    )
}
