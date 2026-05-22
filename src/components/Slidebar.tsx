import { Link } from "react-router-dom";

interface Slidebar {
    label: string;
    path: string;

}

const menuItems: Slidebar[] = [
    { label: " Home", path: "/"},
    { label: " Login", path: "/login"}

];


export default function Slidebar(){
    return(
        
        <aside className="w-32 h-screen bg-purple-300 border-r flex flex-col p-4">
            <div>
                <h2>
                    Hola
                </h2>
            </div>
        
            <nav className="flex flex-col gap-2 flex-1">
                {menuItems.map((item) =>(
                    <Link className="block py-2 px-4 rounded-md hover:bg-gray-300 font-medium transition-colors"
                    key={item.path}
                    to={item.path}>
                        {item.label}
                    </Link>
                    
                ))}
            </nav>

            <div className="border-t pt-4">
                <button className="w-full text-left py-2 px-4 hover:bg-red-100 cursor-pointer">
                    Cerrar Sesión
                </button>
            </div>
        </aside>

    );
}