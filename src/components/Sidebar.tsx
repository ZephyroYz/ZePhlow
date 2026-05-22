import { Link } from "react-router-dom";
import { useState } from "react";
import { 
    House,
    LogIn,
    Menu 
 } from "lucide-react";
 import type { LucideProps } from "lucide-react";


interface Sidebar {
    label: string;
    path: string;
    icon: React.ComponentType<LucideProps>;
}

const menuItems: Sidebar[] = [
    { label: " Home", path: "/", icon: House},
    { label: " Login", path: "/login", icon: LogIn}

];


export default function Slidebar(){

    const[isCollapsed, setIsCollapsed] = useState<boolean>(false);

    return(
        <>

        <aside className={`h-screen bg-yellow-100 border-r flex flex-col p-2 transition-all duration-300 
            ${isCollapsed ? "w-16" : "w-32"}`}>

            <div>
                <button 
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="bg-gray-200 p-1 rounded mt-2 cursor-ponter block">
                    <Menu size={20} />
                </button>

            </div>
        
            <nav className="flex flex-col gap-2 p-2 flex-1">
                {menuItems.map((item) =>{
                    const Icons = item.icon;

                    return(
                        <Link className="flex py-2 px-4 rounded-md hover:bg-gray-300 font-medium transition-colors"
                        key={item.path}
                        to={item.path}>
                            <Icons size={20} className="shrink-0" />

                            {!isCollapsed && <span>{item.label}</span>}
                        </Link>
                    
                    );
                })}
            </nav>

            <div className="border-t pt-4">
                <button className="w-full text-left py-2 px-4 hover:bg-red-100 cursor-pointer">
                    Cerrar Sesión
                </button>
            </div>
        </aside>


        </>
    );
}