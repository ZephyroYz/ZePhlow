import { X } from "lucide-react";

interface ModalProps{
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}



export default function Modal({isOpen, onClose, children}:ModalProps){
    if(!isOpen) return null;

    return(
        <div className="flex fixed top-0 left-0 w-screen h-screen bg-black/50 z-50 items-center justify-center">
            <div className="p-6 bg-gray-100 rounded-lg w-full max-w-md shadow-xl relative text-black">
                <div className="absolute top-4 right-4">
                    <button onClick={onClose} className="">
                        <X size={20} />
                    </button>
                </div>

                <div className="mt-2">
                    {children}
                </div>
            </div>


        </div>
    )
}