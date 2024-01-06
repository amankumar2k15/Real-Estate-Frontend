import { useState } from "react";
import { setIndividualOpen } from "@/store/slice/siteSlice";
import { Card, CardBody, CardHeader, Avatar, Typography, } from "@material-tailwind/react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

function IndividualSite({ data }) {
    const { pathname } = useLocation()
    const dispatch = useDispatch()


    const handleIndividualOpen = () => {
        pathname === "/dashboard/site" && dispatch(setIndividualOpen(false))
    };

    const listingData = [
        { key: "site name", value: data?.site_name },
        { key: "site_location", value: data?.site_location },
    ]

    return (
        <>
            <div className="flex justify-end px-4 cursor-pointer" onClick={handleIndividualOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 hover:text-black/70">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            <Card className="mx-1 mb-6 lg:mx-4 border border-blue-gray-100">
                <CardBody className="p-4">

                    <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-1 xl:grid-cols-1">
                        <Card color="transparent" shadow={false}>
                            <CardBody className="py-0 px-1 ">
                                <Typography variant="h5" color="blue-gray" className="mt-1 w-1/4 mb-2 text-xl md:text-md md:whitespace-nowrap capitalize" >
                                    Site Image
                                </Typography>
                                <CardHeader
                                    floated={false}
                                    color="gray"
                                    className="mx-0 mt-0 w-full lg:w-[70%] mb-4 h-3/4"
                                // className="mx-0 mt-0 w-full mb-4 h-64 sm:h-64 xl:h-64"
                                >
                                    <img
                                        src={data?.site_image}
                                        alt={data?.site_image}
                                        className="h-full w-full object-fit"
                                    />
                                </CardHeader>
                            </CardBody>
                        </Card>
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
                            <Typography
                                variant="small"
                                className="font-normal text-blue-gray-500"
                            >
                                {data?.site_description}
                            </Typography>

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

                </CardBody>
            </Card>
        </>
    );
}

export default IndividualSite;

