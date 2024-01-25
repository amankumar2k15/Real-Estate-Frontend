// import React, { useState } from 'react'
// import LoginImg from "../../assets/login/loginImg.jpg"
// import { FiMail } from "react-icons/fi"
// import { AiOutlineSend } from "react-icons/ai"
// import { toast } from 'react-toastify'
// import axios from 'axios'
// import { SERVER_URL } from '../../constants'
// import { NavLink, useNavigate } from 'react-router-dom'
import { setRole, setToken } from "@/helper/tokenHelper";
import { GenerateOtpForPasswordReset, LoginService, ResetPassword } from "@/services/api.service";
import { setUserName, setUserRole } from "@/store/slice/userSlice";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Input, Button, Typography, } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SyncLoader } from "react-spinners";


export function ForgetPassword() {
    const [changeScreen, setChangeScreen] = useState(true)
    const [isLoading, setLoading] = useState(false)
    const [hide, setHide] = useState(false)
    const navigate = useNavigate()

    const [initialData, setInitialData] = useState({
        email: "",
        otp: "",
        newPassword: ""
    })



    const handleSendOTP = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (!initialData.email) {
            setLoading(false)
            return toast.warning("Email is missing")
        }
        else {
            GenerateOtpForPasswordReset({ email: initialData.email }).then((res) => {
                setLoading(false)
                toast.success(res.data.message)
                setChangeScreen(!changeScreen)
            }).catch((err) => {
                setLoading(false)
                toast.error(err.response.data.message)
            })
        }
    }

    const handleResetPassword = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (!initialData.email) {
            setLoading(false)
            return toast.warning("Email is missing")
        }
        if (!initialData.otp) {
            setLoading(false)
            return toast.warning("OTP is missing")
        }
        if (!initialData.newPassword) {
            setLoading(false)
            return toast.warning("Password is missing")
        }
        else {
            ResetPassword(initialData).then((res) => {
                setLoading(false)
                toast.success("Password Updatd successfully")
                navigate("/auth/sign-in")
            }).catch((err) => {
                setLoading(false)
                toast.error(err.response.data.message)
            })
        }
    }


    return (
        <section className=" flex gap-4">
            <div className="w-[100%] lg:w-[60%] mt-24">

                <div className="text-center">
                    {changeScreen ? (
                        <>
                            <Typography variant="h2" className="font-bold mb-4">Forget Password</Typography>
                            <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your email to get OTP.</Typography>
                        </>
                    )
                        : (
                            <>
                                <Typography variant="h2" className="font-bold mb-4">Reset Password</Typography>
                                <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your otp and new password.</Typography>
                            </>
                        )

                    }
                </div>
                <form className="mt-8 mb-2 mx-auto w-72 sm:w-96 max-w-screen-lg lg:w-1/2">
                    {
                        changeScreen ? (
                            <>
                                <div className="mb-1 flex flex-col gap-6">
                                    <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                                        Your email
                                    </Typography>
                                    <Input
                                        size="lg"
                                        placeholder="name@mail.com"
                                        onChange={(e) => setInitialData((prev) => ({ ...prev, email: e.target.value }))}
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                            </>
                        )
                            :
                            (
                                <>
                                    <div className="mb-1 flex flex-col gap-6">
                                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                                            Your email
                                        </Typography>
                                        <Input
                                            size="lg"
                                            disabled
                                            placeholder="name@mail.com"
                                            value={initialData.email || ""}
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />
                                    </div>
                                    <div className="mb-1 flex flex-col gap-6">
                                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                                            Enter OTP
                                        </Typography>
                                        <div className="relative">
                                            <Input
                                                type="tel"
                                                size="lg"
                                                placeholder="****************"
                                                onChange={(e) => setInitialData((prev) => ({ ...prev, otp: e.target.value }))}
                                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                labelProps={{
                                                    className: "before:content-none after:content-none",
                                                }}
                                            />
                                        </div>

                                    </div>
                                    <div className="mb-1 flex flex-col gap-6">
                                        <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                                            Enter new password
                                        </Typography>
                                        <div className="relative">
                                            <Input
                                                type="text"
                                                size="lg"
                                                placeholder="****************"
                                                onChange={(e) => setInitialData((prev) => ({ ...prev, newPassword: e.target.value }))}
                                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                labelProps={{
                                                    className: "before:content-none after:content-none",
                                                }}
                                            />
                                        </div>

                                    </div>

                                </>
                            )
                    }

                    {changeScreen ?
                        <Button className="mt-6" fullWidth
                            onClick={handleSendOTP}>
                            {isLoading ? <SyncLoader size={8} color="#fff" /> : "Send OTP"}
                        </Button>
                        :
                        <Button className="mt-6" fullWidth
                            onClick={handleResetPassword}>
                            {isLoading ? <SyncLoader size={8} color="#fff" /> : "Reset Password"}
                        </Button>

                    }



                    {/* <div className="flex items-center justify-end gap-2 mt-2">
                        <Typography variant="small" className="font-medium text-gray-900">
                            <Link to="/auth/forget-password">
                                Forgot Password
                            </Link>
                        </Typography>
                    </div> */}


                    <div className="flex items-center justify-center gap-2 mt-2">
                        Already have an account ?
                        <Typography variant="small" className="font-medium text-gray-900">
                            <Link to="/auth/sign-in">
                                Sign in
                            </Link>
                        </Typography>
                    </div>

                </form>

            </div>
            <div className="lg:w-[25%] mt-7 h-[580px] hidden lg:block">
                <img
                    src="/gif/logo.gif"
                    className="h-[580px] w-full object-cover rounded-3xl"
                />
            </div>

        </section>
    );
}

export default ForgetPassword;

{/* <section className="loginForm">
                <div className=' bg-gray-600 '>
                    <>
                        <div className=" border h-screen border-t-2 border-x-0 border-b-0 border-white bg-gradient-to-r row from-[rgb(1,66,106)] to-[#096aa6]  flex items-center justify-center px-5 py-10 pt-[6.55rem]">
                            <div
                                className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl py-[3px] w-full overflow-hidden"
                                style={{ maxWidth: 1000 }}
                            >
                                <div className="md:flex w-full">
                             

                                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                                        <div className="text-center mb-10">
                                            <h1 className="font-bold text-3xl text-gray-900">Forget Password</h1>

                                            {changeScreen ?
                                                <p className='text-sm'>Enter your email to get OTP</p>
                                                :
                                                <p className='text-sm'>Enter your OTP</p>
                                            }


                                        </div>

                                        <div className="flex -mx-3 flex-col">
                                            {changeScreen ?
                                                <>

                                                    <div className="w-full px-3 mb-5 flex flex-col gap-5">
                                                        <label htmlFor="" className="text-md font-semibold px-1">Email</label>
                                                        <div className="flex">
                                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                                <FiMail />
                                                            </div>
                                                            <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="johnsmith@example.com"
                                                                id='email'
                                                                onChange={(e) => setCredentials(prevState => ({ ...prevState, email: e.target.value }))}
                                                            />
                                                        </div>
                                                    </div>


                                                    <div className="flex -mx-3">
                                                        <div className="w-full px-3 mb-5">
                                                            <button className="block w-full max-w-xs mx-auto bg-[#096aa6] transition-all 0.5s ease-in-out hover:bg-[rgb(1,66,106)]  text-white rounded-lg px-3 py-3 font-semibold"
                                                                onClick={handleSendOTP}
                                                            >
                                                                Send OTP
                                                            </button>
                                                        </div>
                                                    </div>
                                                </>

                                                :

                                                <>

                                                    <div className="w-full px-3 mb-5 flex flex-col gap-5">
                                                        <label htmlFor="" className="text-md font-semibold px-1">Email</label>
                                                        <div className="flex">
                                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                                <AiOutlineSend />
                                                            </div>
                                                            <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="Please enter the email"
                                                                id='email'
                                                                // value={initialData.email}
                                                                onChange={(e) => setInitialData(prevState => ({ ...prevState, email: e.target.value }))}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="w-full px-3 mb-5 flex flex-col gap-5">
                                                        <label htmlFor="" className="text-md font-semibold px-1">Enter OTP</label>
                                                        <div className="flex">
                                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                                <AiOutlineSend />
                                                            </div>
                                                            <input type="otp" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-600 text-gray-900" placeholder="Please enter the otp"
                                                                id='otp'
                                                                onChange={(e) => setInitialData(prevState => ({ ...prevState, otp: e.target.value }))}
                                                            />
                                                        </div>
                                                    </div>


                                                    <div className="flex -mx-3">
                                                        <div className="w-full px-3 mb-5">
                                                            <button className="block w-full max-w-xs mx-auto bg-[#096aa6] transition-all 0.5s ease-in-out hover:bg-[rgb(1,66,106)]  text-white rounded-lg px-3 py-3 font-semibold"
                                                                onClick={handleVerifyOTP}
                                                            >
                                                                Verify OTP
                                                            </button>
                                                        </div>
                                                    </div>
                                                </>

                                            }


                                            <div className="text-black text-center">Have an account?
                                                <NavLink to="/login" className='  cursor-pointer text-[#096aa6] hover:text-[rgb(1,66,106)]'> Login</NavLink>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            </section> */}


