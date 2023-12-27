import { XMarkIcon } from '@heroicons/react/24/solid'
import { IconButton } from '@material-tailwind/react'
import React from 'react'

const Modal = ({ closeForm, isFormVisible }) => {
    return (
        <div className="relative">
            <div className={`${isFormVisible ? "right-0 " : "-right-full"} transition-all duration-300 ease-in-out fixed top-0 flex flex-col items-center justify-center bg-black bg-opacity-50 `}>
                <div className="flex flex-row justify-center items-center w-[260px] rounded-t-lg md:w-[464px] gap-4 px-1 bg-black  ">
                    <h3 className="py-4 text-2xl whitespace-nowrap text-center text-white">
                        Create an Account!
                    </h3>
                    <IconButton variant="text" color="white" className="bg-gray-600 text-white"
                        onClick={closeForm}
                    >
                        <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-black" />
                    </IconButton>
                </div>
                <form className="registerForm px-8 pt-6 pb-8 mb-4 bg-white  dark:bg-gray-800 rounded-b-lg h-[600px] overflow-y-auto"
                    style={{ maxWidth: "464px" }}

                >
                    <div className="mb-4 md:flex md:justify-between">
                        {/* Username  */}
                        <div className="mb-4 md:mr-2 md:mb-0">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                htmlFor="userName"
                            >
                                Username
                            </label>
                            <input
                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Username"
                            />
                        </div>
                        {/* Email  */}
                        <div className="md:ml-2">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                    </div>

                    <div className="mb-4 md:flex md:justify-between">
                        {/* Phone  */}
                        <div className="mb-4 md:mr-2 md:mb-0">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                htmlFor="phone"
                            >
                                Phone
                            </label>
                            <input
                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="phone"
                                type="tel"
                                placeholder="Phone"
                            />
                        </div>
                        {/* /Password  */}
                        <div className="md:ml-2">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        {/* Address */}
                        <div className="mb-4 md:mr-2 md:mb-0">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                htmlFor="address"
                            >
                                Address
                            </label>
                            <input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="address"
                                type="text"
                                placeholder="Address"
                            />
                        </div>
                    </div>

                    <div className="mb-4 md:flex md:justify-between">
                        {/* //location  */}
                        <div className="mb-4 md:mr-2 md:mb-0">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                htmlFor="location"
                            >
                                Location
                            </label>
                            <input
                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="location"
                                type="text"
                                placeholder="location"
                            />
                        </div>
                        {/* State  */}
                        <div className="md:ml-2">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                htmlFor="state"
                            >
                                State
                            </label>
                            <input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="state"
                                type="text"
                                placeholder="state"
                            />
                        </div>
                    </div>

                    <div className="mb-4 md:flex md:justify-between">
                        {/* //location  */}
                        <div className="mb-4 md:mr-2 md:mb-0">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                htmlFor="city"
                            >
                                City
                            </label>
                            <input
                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="city"
                                type="text"
                                placeholder="city"
                            />
                        </div>
                        {/* State  */}
                        <div className="md:ml-2">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                htmlFor="pincode"
                            >
                                Pin code
                            </label>
                            <input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="pincode"
                                type="text"
                                placeholder="pin code"
                            />
                        </div>
                    </div>

                    <div className="mb-4 md:flex md:justify-between">
                        {/* //Profile  */}
                        <div className="mb-4 md:mr-2 md:mb-0">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                htmlFor="city"
                            >
                                Profile
                            </label>
                            <input
                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="profile"
                                type="text"
                                placeholder="profile"
                            />
                        </div>
                        {/* Adhaar Card */}
                        <div className="md:ml-2">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                htmlFor="adhar"
                            >
                                Adhaar Card
                            </label>
                            <input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="adhar"
                                type="text"
                                placeholder="adhaar"
                            />
                        </div>
                    </div>

                    <div className="mb-4 md:flex md:justify-between">
                        {/* //Pan card  */}
                        <div className="mb-4 md:mr-2 md:mb-0">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                htmlFor="pan"
                            >
                                Pan Card
                            </label>
                            <input
                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="pan"
                                type="text"
                                placeholder="pan card"
                            />
                        </div>
                        {/* State  */}
                        <div className="md:ml-2">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                htmlFor="blankcheque"
                            >
                                Blank Cheque
                            </label>
                            <input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="blankcheque"
                                type="text"
                                placeholder="blank cheque"
                            />
                        </div>
                    </div>



                    {/* //button  */}
                    <div className="mb-6 text-center">
                        <button
                            className="w-full px-4 py-2 font-bold text-white bg-black rounded-full hover:bg-gray-900"
                            type="button"
                        >
                            Register User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal