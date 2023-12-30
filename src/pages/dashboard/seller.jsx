import { Card, CardHeader, CardBody, Typography, Avatar, Chip, Tooltip, Progress, IconButton, Button, } from "@material-tailwind/react";
import { EllipsisVerticalIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import { setHeaderDetails } from "@/store/slice/headerSlice";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellerService } from "@/services/api.service";
import { setTableData } from "@/store/slice/dashboardSlice";
import NoData from "@/components/NoData";
import IndividualProfile from "@/components/IndividualProfile";
import { setIndividualOpen } from "@/store/slice/sellerSlice";
import RegisterSeller from "@/components/RegisterSeller";
import Pagination from "@/components/pagination";

export function Seller() {
  const { pathname } = useLocation();
  const dispatch = useDispatch()
  const { tableData } = useSelector((state) => state.dashboard);
  const { isIndividualOpen } = useSelector((state) => state.seller);
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


  const fetchSeller = () => {
    fetchSellerService().then((res) => {
      // console.log(res);
      dispatch(setTableData(res?.data.result))
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    fetchSeller()
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
                Add Seller
              </Button>
            </div>
            <Card>

              <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                  <thead>
                    <tr>
                      {["Name", "email", "phone", "company name", "location", "state", "city", "Approved", "action",].map((el) => (
                        <th
                          key={el}
                          className="border-b border-blue-gray-50 py-3 px-5 text-left"
                        >
                          <Typography
                            variant="small"
                            className="text-[11px] font-bold uppercase text-blue-gray-400"
                          >
                            {el}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>

                    {tableData?.filter((item) => item?.fullName?.toLowerCase().includes(search.toLowerCase()))
                      .map((seller, key) => {
                        const className = `py-3 px-5 ${key === authorsTableData.length - 1
                          ? ""
                          : "border-b border-blue-gray-50"
                          }`;

                        return (
                          <tr key={seller.fullName}>
                            <td className={className}
                              onClick={(e) => { dispatch(setIndividualOpen(true)), setIndividualData({ isOpen: true, data: seller }) }}>
                              <Typography className="text-xs capitalize font-semibold cursor-pointer hover:text-blue-gray-800 hover:underline text-blue-gray-600">
                                {seller.fullName}
                              </Typography>
                            </td>


                            <td className={className}>
                              <Typography className="text-xs font-semibold text-blue-gray-600">
                                {seller.email}
                              </Typography>
                            </td>
                            <td className={className}>
                              <Typography className="text-xs font-semibold text-blue-gray-600">
                                {seller.phone}
                              </Typography>
                            </td>
                            <td className={className}>
                              <Typography className="text-xs font-semibold text-blue-gray-600">
                                {seller.companyName}
                              </Typography>
                            </td>
                            <td className={className}>
                              <Typography className="text-xs font-semibold text-blue-gray-600">
                                {seller.location}
                              </Typography>
                            </td>
                            <td className={className}>
                              <Typography className="text-xs font-semibold text-blue-gray-600">
                                {seller.state}
                              </Typography>
                            </td>
                            <td className={className}>
                              <Typography className="text-xs font-semibold text-blue-gray-600">
                                {seller.city}
                              </Typography>
                            </td>
                            <td className={className}>
                              <Typography className="text-xs font-semibold text-blue-gray-600">
                                {seller.isApproved ? "Yes" : "No"}
                              </Typography>
                            </td>
                            <td className={`py-3 px-5 ${key === authorsTableData.length - 1
                              ? ""
                              : " border-b border-blue-gray-50  "
                              }`}>
                              <Typography
                                as="a"
                                href="#"
                                className="text-xs hover:text-green-200 px-2 font-semibold text-green-600"
                              >
                                Edit
                              </Typography>
                              <Typography
                                as="a"
                                href="#"
                                className="text-xs hover:text-red-200 px-2 font-semibold text-red-600"
                              >
                                Delete
                              </Typography>
                            </td>
                          </tr>
                        );
                      }
                      )}

                    {tableData?.filter((item) => item?.fullName?.toLowerCase().includes(search.toLowerCase())).length === 0 && <td colSpan={12}><NoData /></td>}
                  </tbody>
                </table>
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
            <Modal title="Add Seller" closeForm={closeForm} isFormVisible={isFormVisible} >
              <RegisterSeller fetchSeller={fetchSeller} closeForm={closeForm} />
            </Modal>
          </div>
        </>
      )}
      {/* //Form ================================================================================> */}



    </div>
  );
}

export default Seller;
