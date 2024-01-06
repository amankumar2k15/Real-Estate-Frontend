import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardFooter, Avatar, Typography, Tabs, TabsHeader, Tab, Switch, Tooltip, Button, } from "@material-tailwind/react";
// import { HomeIcon, ChatBubbleLeftEllipsisIcon, Cog6ToothIcon, PencilIcon, } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";
// import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { projectsData } from "@/data";
import Pagination from "@/components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setIndividualOpen } from "@/store/slice/siteSlice";
import { setHeaderDetails } from "@/store/slice/headerSlice";
import { setTableData } from "@/store/slice/dashboardSlice";
import Modal from "@/components/Modal";
import RegisterSite from "@/components/RegisterSite";
import { fetchSiteService } from "@/services/api.service";
import IndividualSite from "@/components/individualSite";
import NoData from "@/components/NoData";

export function Site() {
    const { pathname } = useLocation();
    const dispatch = useDispatch()
    const { tableData } = useSelector((state) => state.dashboard);
    const { isIndividualOpen } = useSelector((state) => state.site);
    const { search } = useSelector((state) => state.header)
    const [isIndividual, setIndividualData] = useState({ isOpen: false, userId: null })
    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        dispatch(setHeaderDetails(pathname))
    }, [])

    const showForm = () => {
        setIsFormVisible(true);
    };

    const closeForm = () => {
        setIsFormVisible(false);
    };

    const fetchSite = () => {
        fetchSiteService().then((res) => {
            dispatch(setTableData(res?.data.result))
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchSite()
    }, [])

    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
            {
                !isIndividualOpen ?
                    <>
                        <div className="flex w-full justify-end pb-0">
                            <Button
                                variant={true ? "text" : "text"}
                                onClick={showForm}
                                color="blue-grey"
                                className="text-blueGray-500 outline  border border-black border-blueGray-500 hover:text-white   text-black  font-bold uppercase text-xs px-4 py-2 rounded  focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-black "

                            >
                                Add Site
                            </Button>
                        </div>
                        <Card className="mx-3 mt-8 mb-6 lg:mx-4 border border-blue-gray-100">
                            <CardBody className="p-4">

                                <div className="px-4 pb-4">
                                    <Typography variant="h6" color="blue-gray" className="mb-2">
                                        Sites
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        className="font-normal text-blue-gray-500"
                                    >
                                        Architects design sites
                                    </Typography>
                                    <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
                                        {tableData?.filter((item) => item?.site_name?.toLowerCase().includes(search.toLowerCase()))
                                            .map((site, index) => (
                                                <Card key={index} color="transparent" shadow={false}>
                                                    <CardHeader
                                                        floated={false}
                                                        color="gray"
                                                        className="mx-0 mt-0 mb-4 h-64 xl:h-40"
                                                    >
                                                        <img
                                                            src={site.site_image}
                                                            alt={site.site_name}
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </CardHeader>
                                                    <CardBody className="py-0 px-1">
                                                        <Typography
                                                            variant="small"
                                                            className="font-normal text-blue-gray-500"
                                                        >
                                                            {`Site ${index + 1}`}
                                                        </Typography>
                                                        <Typography
                                                            variant="h5"
                                                            color="blue-gray"
                                                            className="mt-1 mb-2"
                                                        >
                                                            {site.site_name}
                                                        </Typography>
                                                        <Typography
                                                            variant="small"
                                                            className="font-normal text-blue-gray-500"
                                                        >
                                                            {site.site_description.length > 25 ? `${site.site_description.slice(0, 25)}...` : site.site_description}

                                                        </Typography>
                                                    </CardBody>
                                                    <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                                                        <Button variant="outlined" size="sm"
                                                            onClick={(e) => { dispatch(setIndividualOpen(true)), setIndividualData({ isOpen: true, data: site }) }}
                                                        >
                                                            view Site
                                                        </Button>
                                                    </CardFooter>
                                                </Card>
                                            )
                                            )}
                                    </div>


                                </div>
                                {tableData?.filter((item) => item?.site_name?.toLowerCase().includes(search.toLowerCase())).length === 0 && <td colSpan={12}><NoData /></td>}

                            </CardBody>
                        </Card>
                        <div className="flex items-start">
                            <Pagination />
                        </div>
                    </>

                    :

                    <IndividualSite data={isIndividual.data} />

            }


            {/* //Form ================================================================================> */}
            {true && (
                <>
                    <div className="p-4 xl:ml-80">
                        <Modal title="Add Site" closeForm={closeForm} isFormVisible={isFormVisible} >
                            <RegisterSite fetchSite={fetchSite} closeForm={closeForm} />
                        </Modal>
                    </div>
                </>
            )}
            {/* //Form ================================================================================> */}



        </div>
    )
}

export default Site;
