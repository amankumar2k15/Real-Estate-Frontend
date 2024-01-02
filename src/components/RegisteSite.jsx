import React, { useState } from 'react'
import { setFormValue } from '@/store/slice/sellerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// import { RegisterSiteService } from '@/services/api.service';
import { SyncLoader } from "react-spinners";

const RegisterSite = ({ fetchBuyer, closeForm }) => {
    const [isLoading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.seller)

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
            let res = await RegisterSiteService(formData)
            if (res) {
                // navigate("/dashboard/home")
                fetchSeller()
                closeForm()
                dispatch(setFormValue({
                    type: "empty", data: {
                        fullName: null,
                        email: null,
                        phone: null,
                        address: null,
                        companyName: null,
                        location: null,
                        state: null,
                        city: null,
                        pincode: null,
                        adhaar: null,
                        companyPan: null,
                        blankCheque: null,
                        certificate_of_incorporate: null,
                    }
                }))

                // Clear file inputs
                clearFileInput('adhaar');
                clearFileInput('blankCheque');
                clearFileInput('pan');
                clearFileInput('source_of_fund');

                toast.success("Seller Added")
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
                            htmlFor="site_name"
                        >
                            Site Name
                        </label>
                        <input
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="site_name"
                            type="text"
                            placeholder="Site Name"
                            value={data?.site_name || ""}
                            onChange={(e) => handleInput("site_name", e.target.value)}
                        />
                    </div>
                    {/* Email  */}
                    <div className="md:ml-2">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 "
                            htmlFor="site_location"
                        >
                            Site Location
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="site_location"
                            type="email"
                            placeholder="Site Location"
                            value={data?.site_location || ""}
                            onChange={(e) => handleInput("site_location", e.target.value)}
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
                    <input className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
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
                        htmlFor="companyPan">
                        Company Pan
                    </label>
                    <input className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="companyPan"
                        type="file"
                        onChange={(e) => handleFileInput("companyPan", e.target.files[0])}
                    />
                </div>

                <div className='mb-4 md:flex flex-col'>
                    {/* //COI */}
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 "
                        htmlFor="certificate_of_incorporate"
                    >
                        Certificate of Incorporate
                    </label>
                    <input className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 "
                        id="certificate_of_incorporate"
                        type="file"
                        onChange={(e) => handleFileInput("certificate_of_incorporate", e.target.files[0])}
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

export default RegisterSite





