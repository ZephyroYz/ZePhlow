import { Link } from 'react-router-dom'
import Logo from '@/assets/Logo1.png'


export default function Navbar(){
    return(
        <>
        <header className='bg-gray-200 shadow-md'>
            <div className='flex items-center space-x-4'>
                <Link to="/" className="flex">
                <img 
                    src={Logo} 
                    alt="Zephlow Logo" 
                    className="h-20 w-auto flex gap-4" 
                 />
                </Link> 
                 <h1 className='text-xl font-bold'>ZePhlow</h1>
            </div>
        </header>
        </>
    )
}