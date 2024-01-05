import { HomeIcon, UserCircleIcon, TableCellsIcon, InformationCircleIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { lazy } from "react";
import Site from "./pages/dashboard/site";
// import { Home, Profile, Trustee, Notifications, Seller, Buyer } from "@/pages/dashboard";
const Home = lazy(() => import("@/pages/dashboard/home"));
const Profile = lazy(() => import("@/pages/dashboard/profile"));
const Trustee = lazy(() => import("@/pages/dashboard/trustee"));
const Notifications = lazy(() => import("@/pages/dashboard/notifications"));
const Buyer = lazy(() => import("@/pages/dashboard/buyer"));
const Seller = lazy(() => import("@/pages/dashboard/seller"));


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    role: "seller",
    pages: [
      { icon: <HomeIcon {...icon} />, name: "dashboard", path: "/home", element: <Home />, role: "seller" },
      { icon: <UserCircleIcon {...icon} />, name: "buyer", path: "/buyer", element: <Buyer />, role: "seller" },
      { icon: <TableCellsIcon {...icon} />, name: "trustee", path: "/trustee", element: <Trustee />, role: "seller" },
      { icon: <UserCircleIcon {...icon} />, name: "profile", path: "/profile", element: <Profile />, role: "seller" },
      { icon: <MapPinIcon {...icon} />, name: "Site", path: "/site", element: <Site />, role: "seller" },
      { icon: <InformationCircleIcon {...icon} />, name: "notifications", path: "/notifications", element: <Notifications />, role: "seller" },
    ],
  },
  {
    layout: "dashboard",
    role: "buyer",
    pages: [
      { icon: <HomeIcon {...icon} />, name: "dashboard", path: "/home", element: <Home />, role: "buyer" },
      // { icon: <TableCellsIcon {...icon} />, name: "trustee", path: "/trustee", element: <Trustee />,role : "seller" },
      { icon: <UserCircleIcon {...icon} />, name: "profile", path: "/profile", element: <Profile />, role: "buyer" },
      { icon: <InformationCircleIcon {...icon} />, name: "notifications", path: "/notifications", element: <Notifications />, role: "buyer" },
    ],
  },
  {
    layout: "dashboard",
    role: "super-admin",
    pages: [
      { icon: <HomeIcon {...icon} />, name: "dashboard", path: "/home", element: <Home />, role: "super-admin" },
      { icon: <UserCircleIcon {...icon} />, name: "seller", path: "/seller", element: <Seller />, role: "super-admin" },
      { icon: <TableCellsIcon {...icon} />, name: "trustee", path: "/trustee", element: <Trustee />, role: "super-admin" },
      { icon: <UserCircleIcon {...icon} />, name: "profile", path: "/profile", element: <Profile />, role: "super-admin" },
      { icon: <InformationCircleIcon {...icon} />, name: "notifications", path: "/notifications", element: <Notifications />, role: "super-admin" },
    ],
  },
];

export default routes;
