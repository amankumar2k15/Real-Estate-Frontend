import React, { useState } from 'react'
import { setFormValue } from '@/store/slice/buyerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { RegisterBuyerService } from '@/services/api.service';
import { SyncLoader } from "react-spinners";
import { useAddBuyerMutation } from '@/feature/api/buyerApi';

const RegisterBuyer = ({ fetchBuyer, closeForm }) => {
    const [isLoading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.buyer)
    const [addBuyer] = useAddBuyerMutation()

    const handleInput = (key, value) => {
        dispatch(setFormValue({ type: "fill", data: { key, value } }));
    };

    const handleFileInput = (selectedKey, selectedFile) => {
        dispatch(setFormValue({ type: "fill", data: { key: selectedKey, value: selectedFile } }))
    }

    //clearFileInput
    const clearFileInput = (selectedKey) => {
        const fileInput = document.getElementById(selectedKey);
        if (fileInput) {
            fileInput.value = null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData()
        // Append other data
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });
        //FormData---------------------------------------->

        try {
            let res = await addBuyer(formData)
            if (res) {
                // fetchBuyer()
                closeForm()
                dispatch(setFormValue({
                    type: "empty", data: {
                        fullName: null,
                        email: null,
                        phone: null,
                        city: null,
                        state: null,
                        pincode: null,
                        address: null,
                        location: null,
                        adhaar: null,
                        pan: null,
                        blankCheque: null,
                        source_of_fund: null,
                        siteId: null
                    }
                }))

                // Clear file inputs
                clearFileInput('adhaar');
                clearFileInput('blankCheque');
                clearFileInput('pan');
                clearFileInput('source_of_fund');

                toast.success(`${res.data.result.fullName} registered successfully`)
            }
        } catch (err) {
            toast.success(err.response.data.message)
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className=''>
            <form className="registerForm px-4 pt-6 pb-8 mb-4 bg-white  dark:bg-gray-800 rounded-b-lg h-[600px] overflow-y-auto"
                style={{ maxWidth: "464px" }}
            >
                <div className="mb-4 md:flex ">
                    {/* Username  */}
                    <div className="mb-4 md:mr-2 md:mb-0">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 "
                            htmlFor="fullName"
                        >
                            Full Name
                        </label>
                        <input
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="fullName"
                            type="text"
                            placeholder="Full Name"
                            value={data?.fullName || ""}
                            onChange={(e) => handleInput("fullName", e.target.value)}
                        />
                    </div>
                    {/* Email  */}
                    <div className="md:ml-2">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 "
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={data?.email || ""}
                            onChange={(e) => handleInput("email", e.target.value)}
                        />
                    </div>
                </div>

                <div className="mb-6">
                    {/* Phone  */}
                    <div className="mb-4 md:mr-2 md:mb-0">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 "
                            htmlFor="phone"
                        >
                            Phone
                        </label>
                        <input
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="phone"
                            type="tel"
                            placeholder="Phone"
                            value={data?.phone || ""}
                            onChange={(e) => handleInput("phone", e.target.value)}
                        />
                    </div>
                </div>

                <div className="mb-6">
                    {/* Address */}
                    <div className="mb-4 md:mr-2 md:mb-0">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 "
                            htmlFor="address"
                        >
                            Address
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="address"
                            type="text"
                            placeholder="Address"
                            value={data?.address || ""}
                            onChange={(e) => handleInput("address", e.target.value)}
                        />
                    </div>
                </div>

                <div className="mb-6">
                    {/* Company Name */}
                    <div className="mb-4 md:mr-2 md:mb-0">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 "
                            htmlFor="sideId"
                        >
                            Site ID
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="sideId"
                            type="text"
                            disabled
                            placeholder="Site Id"
                            value={data?.siteId || ""}
                            onChange={(e) => handleInput("sideId", e.target.value)}
                        />
                    </div>
                </div>

                <div className="mb-4 md:flex ">
                    {/* //location  */}
                    <div className="mb-4 md:mr-2 md:mb-0">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 "
                            htmlFor="location"
                        >
                            Location
                        </label>
                        <input
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="location"
                            type="text"
                            placeholder="Location"
                            value={data?.location || ""}
                            onChange={(e) => handleInput("location", e.target.value)}
                        />
                    </div>
                    {/* State  */}
                    <div className="md:ml-2">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 "
                            htmlFor="state"
                        >
                            State
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="state"
                            type="text"
                            placeholder="State"
                            value={data?.state || ""}
                            onChange={(e) => handleInput("state", e.target.value)}
                        />
                    </div>
                </div>

                <div className="mb-4 md:flex ">
                    {/* //location  */}
                    <div className="mb-4 md:mr-2 md:mb-0">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 "
                            htmlFor="city"
                        >
                            City
                        </label>
                        <input
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="city"
                            type="text"
                            placeholder="City"
                            value={data?.city || ""}
                            onChange={(e) => handleInput("city", e.target.value)}
                        />
                    </div>
                    {/* Pin Code  */}
                    <div className="md:ml-2">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 "
                            htmlFor="pincode"
                        >
                            Pin code
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="pincode"
                            type="tel"
                            placeholder="Pin Code"
                            value={data?.pincode || ""}
                            onChange={(e) => handleInput("pincode", e.target.value)}
                        />
                    </div>
                </div>

                <div className="mb-4 md:flex flex-col">
                    {/* Adhaar Card */}
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 "
                        htmlFor="adhaar"
                    >
                        Adhaar Card
                    </label>
                    <input className="block  w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="adhaar"
                        type="file"
                        onChange={(e) => handleFileInput("adhaar", e.target.files[0])}
                    />
                </div>

                <div className="mb-4 md:flex flex-col">
                    {/* blankCheque */}
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 "
                        htmlFor="blankCheque"
                    >
                        Blank Cheque
                    </label>
                    <input className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="blankCheque"
                        type="file"
                        onChange={(e) => handleFileInput("blankCheque", e.target.files[0])}
                    />
                </div>

                <div className="mb-4 md:flex flex-col">
                    {/* //Pan card  */}
                    <label className="block mb-2 text-sm font-medium text-gray-900 "
                        htmlFor="pan">
                        Pan
                    </label>
                    <input className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="pan"
                        type="file"
                        onChange={(e) => handleFileInput("pan", e.target.files[0])}
                    />
                </div>

                <div className='mb-4 md:flex flex-col'>
                    {/* //COI */}
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 "
                        htmlFor="source_of_fund"
                    >
                        Source of fund
                    </label>
                    <input className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 "
                        id="source_of_fund"
                        type="file"
                        onChange={(e) => handleFileInput("source_of_fund", e.target.files[0])}
                    />
                </div>



                {/* //button  */}
                <div className="mb-6  flex justify-between">
                    <button
                        className="w-1/4 px-2 py-2 font-bold text-sm text-white bg-red-600 rounded-lg hover:bg-red-800"
                        type="button"
                    >
                        Cancel
                    </button>
                    <button
                        className="w-1/4 px-2 py-2 font-bold text-sm text-white bg-black rounded-lg hover:bg-gray-900"
                        type="button"
                        onClick={handleSubmit}
                    >
                        {isLoading ? <SyncLoader size={8} color="#fff" /> : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegisterBuyer





