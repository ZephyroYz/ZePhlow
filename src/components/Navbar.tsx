import { Link } from 'react-router-dom'
import Logo from '@/assets/Logo1.png'


export default function Navbar(){
    return(
        <>
        <header className='bg-gray-200 shadow-md flex items-center justify-between p-4'>
            <div className='flex items-center space-x-4'>
                <Link to="/" className="flex">
                <img 
                    src={Logo} 
                    alt="Zephlow Logo" 
                    className="h-20 w-auto" 
                 />
                </Link> 
                 <h1 className='text-xl font-bold'>ZePhlow</h1>
            </div>

            <div className='flex items-center space-x-4'>
                <Link to="/login" className='bg-purple-500 text-white text-sm font-semibold py-2 px-4 rounded-md'>
                    Sign In
                </Link>
                <Link to="/register" className="bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-md">
                    Sign Up
                </Link>

            </div>

        </header>
        </>
    )
}