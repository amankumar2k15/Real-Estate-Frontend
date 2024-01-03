import { useState } from "react";
import { setIndividualOpen } from "@/store/slice/siteSlice";
import { Card, CardBody, CardHeader, Avatar, Typography, } from "@material-tailwind/react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

function IndividualSite({ data }) {
    console.log("sma", data)
    const [inputFields, setInputFields] = useState([{ text: '', file: null }]);
    const { pathname } = useLocation()
    console.log("data inside individual component ", data)
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch()

    const openModal = (img) => {
        setSelectedImage(img);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    const handleIndividualOpen = () => {
        pathname === "/dashboard/site" && dispatch(setIndividualOpen(false))
    };

    //input and file type add or delete
    const handleTextChange = (index, value) => {
        const newInputFields = [...inputFields];
        newInputFields[index].text = value;
        setInputFields(newInputFields);
    };

    const handleFileChange = (index, file) => {
        const newInputFields = [...inputFields];
        newInputFields[index].file = file;
        setInputFields(newInputFields);
    };

    const handleAddInput = () => {
        setInputFields([...inputFields, { text: '', file: null }]);
    };

    const handleDeleteInput = (index) => {
        const newInputFields = [...inputFields];
        newInputFields.splice(index, 1);
        setInputFields(newInputFields);
    };


    const listingData = [
        { key: "site name", value: data?.fullName },
        { key: "site description", value: data?.email },
        { key: "site_location", value: data?.state },
        { key: "city", value: data?.city },
        { key: "pin code", value: data?.pincode },
        { key: "phone", value: data?.phone },
        { key: "location", value: data?.location },
        { key: "site id", value: data?.siteId },
        { key: "address", value: data?.address },
    ]

    const imgData = [
        { title: "adhaar", img: data?.adhaar },
        { title: "blank Cheque", img: data?.blankCheque },
    ]
    console.log(imgData)

    return (
        <>
            <div className="flex justify-end px-4 cursor-pointer" onClick={handleIndividualOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 hover:text-black/70">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            <Card className="mx-1 mb-6 lg:mx-4 border border-blue-gray-100">
                <CardBody className="p-4">

                    <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-2">
                        <Card color="transparent" shadow={false}>
                            <CardHeader
                                floated={false}
                                color="gray"
                                className="mx-0 mt-0 mb-4 h-64 sm:h-64 xl:h-40"
                            >
                                <img
                                    src={data?.adhaar}
                                    alt={data?.adhaar}
                                    className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody className="py-0 px-1">
                                <Typography variant="h5" color="blue-gray" className="mt-1 mb-2 text-xl md:text-md md:whitespace-nowrap capitalize" >
                                    Site Images
                                </Typography>
                            </CardBody>
                        </Card>
                    </div>


                    <div className='flex flex-col gap-2'>
                        {inputFields.map((input, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    placeholder="Enter text"
                                    value={input.text}
                                    onChange={(e) => handleTextChange(index, e.target.value)}
                                />
                                <input className='outline-none'
                                    type="file"
                                    onChange={(e) => handleFileChange(index, e.target.files[0])}
                                />
                                <button className='py-2 px-4 rounded-lg hover:bg-red-400 bg-red-600 text-white' onClick={() => handleDeleteInput(index)}>Delete</button>
                            </div>
                        ))}
                        <button className='py-2 px-4 rounded-lg w-20 hover:bg-green-400 bg-green-600 text-white' onClick={handleAddInput}>Add</button>
                    </div>


                    <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
                        <div className="flex items-center gap-6">
                            <Avatar
                                src="/img/bruce-mars.jpeg"
                                alt="bruce-mars"
                                size="xl"
                                variant="rounded"
                                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
                            />
                            <div>
                                <Typography variant="h5" color="blue-gray" className="mb-1 capitalize">
                                    {data?.fullName}
                                </Typography>
                                <Typography
                                    variant="small"
                                    className="font-normal text-blue-gray-600 capitalize"
                                >
                                    {data?.role}
                                </Typography>
                            </div>
                        </div>

                    </div>

                    <div className=" mb-12 flex flex-col gap-4 sm:px-4 ">

                        {/* Profile info  */}
                        <CardHeader
                            color="transparent"
                            shadow={false}
                            floated={false}
                            className="mx-0 mt-0 flex items-center justify-between gap-1"
                        >
                            <Typography variant="h6" color="blue-gray">
                                Site Information
                            </Typography>
                        </CardHeader>

                        <CardBody className="p-0">
                            {/* <Typography
                                variant="small"
                                className="font-normal text-blue-gray-500"
                            >
                                Hi, I'm {data.fullName}, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality
                            </Typography> */}

                            <ul className="grid grid-cols-1 sm:grid-cols-2 mt-12 gap-4 p-0 ">

                                {listingData.map((item, index) => {
                                    return (
                                        <li key={index} className="flex items-center gap-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-semibold capitalize whitespace-nowrap"
                                            >
                                                {`${item.key} :`}
                                            </Typography>
                                            <Typography
                                                variant="small"
                                                className="font-normal capitalize text-blue-gray-500"
                                            >
                                                {item.value}
                                            </Typography>
                                        </li>
                                    )
                                })}
                            </ul>
                        </CardBody>
                    </div>

                    <div className="sm:px-4 pb-4 grid">
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            Banking KYC
                        </Typography>
                        <Typography
                            variant="small"
                            className="font-normal text-blue-gray-500"
                        >
                            Important Docs
                        </Typography>
                        <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
                            {imgData.map((item) => (
                                <Card key={item.title} color="transparent" shadow={false} onClick={() => openModal(item.img)}>
                                    <CardHeader
                                        floated={false}
                                        color="gray"
                                        className="mx-0 mt-0 mb-4 h-32 sm:h-64 xl:h-40"
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="h-full w-full object-cover"
                                        />
                                    </CardHeader>
                                    <CardBody className="py-0 px-1">
                                        <Typography variant="h5" color="blue-gray" className="mt-1 mb-2 text-xl md:text-md md:whitespace-nowrap capitalize" >
                                            {item.title}
                                        </Typography>
                                    </CardBody>
                                </Card>
                            )
                            )}
                        </div>

                        <Modal
                            isOpen={isModalOpen}
                            onRequestClose={closeModal}
                            contentLabel="Image Modal"
                            style={{
                                overlay: {
                                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                                    zIndex: 1000,
                                },
                                content: {
                                    top: "50%",
                                    left: "50%",
                                    right: "auto",
                                    bottom: "auto",
                                    marginRight: "-50%",
                                    transform: "translate(-50%, -50%)",
                                    backgroundColor: "transparent",
                                    border: "none",
                                    boxShadow: "none",
                                },
                            }}
                        >
                            <div className="text-white">
                                <img src={selectedImage} alt="Selected" className="w-[500px] h-auto" />
                            </div>
                            <button onClick={closeModal} className="text-white hover:text-red-500 mt-4 cursor-pointer">
                                Close
                            </button>
                        </Modal>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}

export default IndividualSite;

