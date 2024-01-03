import React, { useState } from 'react'
import { setFormValue } from '@/store/slice/sellerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { RegisterSiteService } from '@/services/api.service';
import { SyncLoader } from "react-spinners";
import axios from 'axios';

const RegisterSite = ({ fetchSite, closeForm }) => {
    const [formData, setFormData] = useState({
        site_name: '',
        site_image: '',
        site_location: '',
        site_description: '',
        buildings: [
            {
                block: '',
                flats: [
                    {
                        flat_name: '',
                        flat_image: null,
                        flat_type: '',
                    },
                ],
            },
        ],
    });
    const [isLoading, setLoading] = useState(false)
    // const dispatch = useDispatch();
    // const { data } = useSelector((state) => state.site)
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleFlatInputChange = (buildingIndex, flatIndex, e) => {
        const updatedBuildings = [...formData.buildings];
        updatedBuildings[buildingIndex].flats[flatIndex][e.target.name] = e.target.value;
        setFormData({ ...formData, buildings: updatedBuildings });
    };

    const handleBuildingInputChange = (e) => {
        setFormData((prev) => {
            if (prev.buildings) {
                prev.buildings[0].block = e.target.value
            }
            console.log("aman prev", prev)
            return prev
        })
    };

    const handleImageChange = (buildingIndex, flatIndex, e) => {
        const updatedBuildings = [...formData.buildings];
        updatedBuildings[buildingIndex].flats[flatIndex].flat_image = e.target.files[0];
        setFormData({ ...formData, buildings: updatedBuildings });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('site_name', formData.site_name);
            formDataToSend.append('site_image', formData.site_image);
            formDataToSend.append('site_location', formData.site_location);
            formDataToSend.append('site_description', formData.site_description);
            formDataToSend.append('buildings', JSON.stringify(formData.buildings));

            const response = await axios.post('http://localhost:4400/api/v1/site/create-site', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success("Site created successfully")
            console.log('Site created successfully:', response.data);
            // You can handle success, redirect, or any other action here
        } catch (error) {
            console.error('Error creating site:', error);
            // Handle error or show an error message to the user
        }
    };

    // const handleInput = (key, value) => {
    //     dispatch(setFormValue({ type: "fill", data: { key, value } }));
    // };

    // const handleFileInput = (selectedKey, selectedFile) => {
    //     dispatch(setFormValue({ type: "fill", data: { key: selectedKey, value: selectedFile } }))
    // }

    // //clearFileInput
    // const clearFileInput = (selectedKey) => {
    //     const fileInput = document.getElementById(selectedKey);
    //     if (fileInput) {
    //         fileInput.value = null;
    //     }
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     setLoading(true)
    //     const formData = new FormData()
    //     // Append other data
    //     Object.keys(data).forEach((key) => {
    //         formData.append(key, data[key]);
    //     });

    //     //FormData---------------------------------------->

    //     try {
    //         let res = await RegisterSiteService(formData)
    //         if (res) {
    //             // navigate("/dashboard/home")
    //             fetchSeller()
    //             closeForm()
    //             dispatch(setFormValue({
    //                 type: "empty", data: {
    //                     site_name: null,
    //                     site_image: null,
    //                     site_location: null,
    //                     site_description: null,
    //                     buildings: [
    //                         {
    //                             block: null,
    //                             flats: [
    //                                 {
    //                                     flat_name: null,
    //                                     flat_image: null,
    //                                     flat_type: null,
    //                                 },
    //                             ],
    //                         },
    //                     ],
    //                 }
    //             }))

    //             // // Clear file inputs
    //             // clearFileInput('adhaar');
    //             // clearFileInput('blankCheque');
    //             // clearFileInput('pan');
    //             // clearFileInput('source_of_fund');

    //             toast.success("Seller Added")
    //         }
    //     } catch (err) {
    //         toast.success(err.response.data.message)
    //     } finally {
    //         setLoading(false)
    //     }
    // }


    return (
        <div className="">
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
                            value={formData.site_name}
                            onChange={handleInputChange}
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
                            value={formData?.site_location}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="mb-4 md:flex ">
                    {/* Username  */}
                    <div className="mb-4 md:mr-2 md:mb-0">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 "
                            htmlFor="site_description"
                        >
                            Site Description
                        </label>
                        <input
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="site_description"
                            type="text"
                            placeholder="Site Description"
                            value={formData.site_description}
                            onChange={handleInputChange}
                        />
                    </div>
                    {/* Email  */}
                    <div className="md:ml-2">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 "
                            htmlFor="site_image"
                        >
                            Site Image
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="site_image"
                            type="file"
                            placeholder="Site Image"
                            onChange={(e) => setFormData((prev) => ({ ...prev, site_image: e.target.files[0] }))}
                        />
                    </div>
                </div>



                {formData.buildings.map((building, buildingIndex) => (
                    <div key={buildingIndex}>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Building Block
                        </label>
                        <input
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            placeholder='Building Block'
                            type="text"
                            name="block"
                            defaultValue={building.block}
                            onChange={(e) => handleBuildingInputChange(e)}
                        />

                        {building.flats.map((flat, flatIndex) => (
                            <div className='flex flex-col gap-4 mt-4' key={flatIndex}>
                                <label className="block text-sm font-medium text-gray-900 ">
                                    Flat Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    placeholder='Flat Name'
                                    name="flat_name"
                                    value={flat.flat_name}
                                    onChange={(e) => handleFlatInputChange(buildingIndex, flatIndex, e)}
                                />

                                <label className="block text-sm font-medium text-gray-900 ">
                                    Flat Image
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange(buildingIndex, flatIndex, e)}
                                />

                                <label className="block text-sm font-medium text-gray-900 ">
                                    Flat Type
                                </label>
                                {/* <input

                                    type="text"
                                    name="flat_type"
                                    value={flat.flat_type}
                                    onChange={(e) => handleFlatInputChange(buildingIndex, flatIndex, e)}
                                /> */}
                                <select
                                    className="w-full mb-4 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    name="flat_type"
                                    value={flat.flat_type}
                                    onChange={(e) => handleFlatInputChange(buildingIndex, flatIndex, e)}
                                >
                                    <option value="1 BHK">1 BHK</option>
                                    <option value="2 BHK">2 BHK</option>
                                    <option value="3 BHK">3 BHK</option>
                                    <option value="Pent House">Pent House</option>
                                </select>

                            </div>
                        ))}
                    </div>
                ))}



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






