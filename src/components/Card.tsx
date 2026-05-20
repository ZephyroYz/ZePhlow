

interface CardProps {
    title: string;
    desc: string;
}

export default function Card({title, desc}: CardProps){
    return(
    <>
        <div className="border border-black p-4 rounded-md">
            <h3 className="text-md "> {title} </h3>
            <p className="text-sm">{desc}</p>

        </div>


    </>
    )
}