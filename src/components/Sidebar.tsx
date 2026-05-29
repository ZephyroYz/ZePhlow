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

        <aside className={`h-screen bg-gray-600 border-r border-gray-300 flex flex-col p-4 transition-all duration-300 text-white 
            ${isCollapsed ? "w-16" : "w-32"}`}>

            <div>
                <button 
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="hover:bg-gray-400  p-1 rounded mt-2 cursor-ponter block">
                    <Menu size={24} />
                </button>

            </div>
        
            <nav className="flex flex-col gap-2 p-1  flex-1 ">
                {menuItems.map((item) =>{
                    const Icons = item.icon;

                    return(
                        <Link className="flex rounded-md hover:bg-gray-400 font-medium transition-colors mt-4"
                        key={item.path}
                        to={item.path}>
                            <Icons size={24} className="shrink-0 mr-2" />

                            {!isCollapsed && <span>{item.label}</span>}
                        </Link>
                    
                    );
                })}
            </nav>

            <div className="border-t pt-4">
                <button className="w-full text-left py-2  hover:bg-red-100 cursor-pointer">
                    Sign Out
                </button>
            </div>
        </aside>


        </>
    );
}