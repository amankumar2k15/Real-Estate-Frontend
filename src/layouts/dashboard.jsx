import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import { Sidenav, DashboardNavbar, Configurator, Footer, } from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import { setSearch } from "@/store/slice/headerSlice";
import { useDispatch } from "react-redux";
import { Suspense, useEffect } from "react";
import { setUserName, setUserRole } from "@/store/slice/userSlice";
import { fetchUserWhoAmI } from "@/services/api.service";
import { SyncLoader } from "react-spinners";
import { getToken } from "@/helper/tokenHelper";

export function Dashboard() {
  const navigate = useNavigate()
  const [controller, dispatch] = useMaterialTailwindController();
  const dispatchh = useDispatch()
  const { pathname } = useLocation()
  const { sidenavType } = controller;

  const getUser = async () => {
    try {
      await fetchUserWhoAmI().then((res) => {
        dispatchh(setUserRole(res?.data?.results?.role))
        dispatchh(setUserName(res?.data?.results?.fullName))
      }).catch((err) => {
        console.log(err);
      })
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!getToken()) navigate("/auth/sign-in")
  })

  useEffect(() => {
    getUser();
  }, [])

  useEffect(() => {
    dispatchh(setSearch(""))
  }, [pathname]);

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>

        <Suspense
          fallback={
            <>
              <div
                className="flex items-center justify-center w-full"
                style={{ height: "80vh" }}
              >
                <SyncLoader size={14} color="#3b3b3b" />
              </div>
            </>
          }
        >
          <Routes>
            {routes.map(
              ({ layout, pages }) =>
                layout === "dashboard" &&
                pages.map(({ path, element }) => (
                  <Route exact path={path} element={element} />
                ))
            )}
          </Routes>

        </Suspense>


        <div className="text-blue-gray-600">
          <Footer />
        </div>

      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
