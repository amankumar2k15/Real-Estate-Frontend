import PropTypes from "prop-types";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Avatar, Button, IconButton, Typography, } from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";
import { clearStorage, getData, removeToken } from "@/helper/tokenHelper";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { resetBuyer, setIndividualOpen as setBuyerIndividual } from "@/store/slice/buyerSlice";
import { setIndividualOpen as setSellerIndividual } from "@/store/slice/sellerSlice";
import { setIndividualOpen as setSiteIndividual } from "@/store/slice/siteSlice";
import { resetUser } from "@/store/slice/userSlice";

export function Sidenav({ brandImg, brandName, routes }) {
  const { pathname } = useLocation()
  const dispatchh = useDispatch()
  const navigate = useNavigate()
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const { role } = useSelector((state) => state.user)
  console.log(role)

  const sidenavTypes = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };


  const handleIndividualOpen = () => {
    pathname === "/dashboard/buyer" ? dispatchh(setBuyerIndividual(false))
      :
      pathname === "/dashboard/seller" ? dispatchh(setSellerIndividual(false))
        :
        pathname === "/dashboard/site" && dispatchh(setSiteIndividual(false))

  };

  const handleLogOut = () => {
    dispatchh(resetUser)
    dispatchh(resetBuyer)
    navigate("/sign-in")
    removeToken()
    clearStorage()
    toast.error("Logged out successfully")
  }

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${openSidenav ? "translate-x-0" : "-translate-x-80"
        } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
    >
      <div
        className={`relative`}
      >

        <Link to="/" className="py-6 px-8 text-center">

          <Typography
            variant="h6"
            color={sidenavType === "dark" ? "white" : "blue-gray"}
          >
            {/* <img src={getData('profile')} height="40px" width="40px" /> */}
            {brandName}
          </Typography>
        </Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
        </IconButton>
      </div>
      <div className="m-4">
        {routes?.filter((item) => item.role === role).map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color={sidenavType === "dark" ? "white" : "blue-gray"}
                  className="font-black uppercase opacity-75"
                >
                  {"title"}
                </Typography>
              </li>
            )}
            {pages.filter((item) => item.role === role).map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button onClick={handleIndividualOpen}
                      variant={isActive ? "gradient" : "text"}
                      color={
                        isActive
                          ? sidenavColor
                          : sidenavType === "dark"
                            ? "white"
                            : "blue-gray"
                      }
                      className="flex items-center gap-4 px-4 capitalize"
                      fullWidth
                    >
                      {icon}
                      <Typography
                        color="inherit"
                        className="font-medium capitalize"
                      >
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="mx-3.5 mt-4 mb-2">
        <Button
          variant={"text"}
          color={"red"}
          className="flex items-center gap-4 px-4 capitalize"
          fullWidth
          onClick={handleLogOut}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clipRule="evenodd" />
          </svg>

          <Typography
            color="inherit"
            className="font-medium capitalize"
          >
            Log out
          </Typography>
        </Button>
      </div>
    </aside>
  );
}

Sidenav.defaultProps = {
  // brandImg: getData("profile"),
  brandName: "Bharat Escrow",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
