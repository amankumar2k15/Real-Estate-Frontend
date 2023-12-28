import React from "react";
import { IconButton, Typography } from '@material-tailwind/react'
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useMaterialTailwindController, } from "@/context";


const Modal = ({ closeForm, isFormVisible, children }) => {
    const [controller, dispatch] = useMaterialTailwindController();
    const { openConfigurator, sidenavColor, sidenavType, fixedNavbar } =
        controller;
    const sidenavColors = {
        white: "from-gray-100 to-gray-100 border-gray-200",
        dark: "from-black to-black border-gray-200",
        green: "from-green-400 to-green-600",
        orange: "from-orange-400 to-orange-600",
        red: "from-red-400 to-red-600",
        pink: "from-pink-400 to-pink-600",
    };

    return (
        <aside
            className={`fixed top-0 right-0 z-50 h-screen w-96 bg-white px-2.5 shadow-lg transition-all duration-300 
            ${isFormVisible ? "translate-x-0" : "translate-x-96"}`}
        >
            <div className="flex flex-col py-4 ">
                <div className="flex flex-row justify-between w-full px-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Add Seller

                        </Typography>
                        <Typography className="font-normal text-blue-gray-600">
                            Add your seller here
                        </Typography>
                    </div>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={() => closeForm()}
                    >
                        <XMarkIcon strokeWidth={2.5} className="h-5 w-5" />
                    </IconButton>
                </div>

                {children}

            </div>

        </aside>
    )
}

export default Modal