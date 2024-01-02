import { Card, CardBody, CardHeader, CardFooter, Avatar, Typography, Tabs, TabsHeader, Tab, Switch, Tooltip, Button, } from "@material-tailwind/react";
// import { HomeIcon, ChatBubbleLeftEllipsisIcon, Cog6ToothIcon, PencilIcon, } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";
// import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { projectsData } from "@/data";
import IndividualProfile from "@/components/individualProfile";
import Pagination from "@/components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import { setHeaderDetails } from "@/store/slice/headerSlice";
import RegisterSite from "@/components/RegisteSite";
import { fetchBuyerService } from "@/services/api.service";

export function Site() {

    const { pathname } = useLocation();
    const dispatch = useDispatch()
    // const { tableData } = useSelector((state) => state.dashboard);
    const { isIndividualOpen } = useSelector((state) => state.buyer);
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

    const fetchBuyer = () => {
        fetchBuyerService().then((res) => {
            // console.log(res);
            dispatch(setTableData(res?.data.result))
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchBuyer()
    }, [])


    const siteItem = [
        { site_name: null },
        { site_location: null },
        {
            buildings: [
                {
                    block: null,
                    flats: [
                        {
                            flat_name: null,
                            flat_type: null
                        }
                    ]
                },

            ],
        }
    ]


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
                                        {projectsData.map(
                                            ({ img, title, description, tag, route, members }) => (
                                                <Card key={title} color="transparent" shadow={false}>
                                                    <CardHeader
                                                        floated={false}
                                                        color="gray"
                                                        className="mx-0 mt-0 mb-4 h-64 xl:h-40"
                                                    >
                                                        <img
                                                            src={img}
                                                            alt={title}
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </CardHeader>
                                                    <CardBody className="py-0 px-1">
                                                        <Typography
                                                            variant="small"
                                                            className="font-normal text-blue-gray-500"
                                                        >
                                                            {tag}
                                                        </Typography>
                                                        <Typography
                                                            variant="h5"
                                                            color="blue-gray"
                                                            className="mt-1 mb-2"
                                                        >
                                                            {title}
                                                        </Typography>
                                                        <Typography
                                                            variant="small"
                                                            className="font-normal text-blue-gray-500"
                                                        >
                                                            {description}
                                                        </Typography>
                                                    </CardBody>
                                                    <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                                                        <Link to={route}>
                                                            <Button variant="outlined" size="sm">
                                                                view Site
                                                            </Button>
                                                        </Link>
                                                    </CardFooter>
                                                </Card>
                                            )
                                        )}
                                    </div>
                                </div>


                            </CardBody>
                        </Card>
                        <div className="flex items-start">
                            <Pagination />
                        </div>
                    </>

                    :

                    <IndividualProfile data={isIndividual.data} />

            }


            {/* //Form ================================================================================> */}
            {true && (
                <>
                    <div className="p-4 xl:ml-80">
                        <Modal title="Add Site" closeForm={closeForm} isFormVisible={isFormVisible} >
                            <RegisterSite fetchBuyer={fetchBuyer} closeForm={closeForm} />
                        </Modal>
                    </div>
                </>
            )}
            {/* //Form ================================================================================> */}



        </div>
    )
}

export default Site;
