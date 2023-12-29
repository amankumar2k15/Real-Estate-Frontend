import { HomeIcon, UserCircleIcon, TableCellsIcon, InformationCircleIcon, ServerStackIcon, RectangleStackIcon } from "@heroicons/react/24/solid";
import { Home, Profile, Trustee, Notifications, Seller, Buyer } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
// import { useSelector } from "react-redux";

const icon = {
  className: "w-5 h-5 text-inherit",
};




export const routes = [
  {
    layout: "dashboard",
    
    pages: [
      { icon: <HomeIcon {...icon} />, name: "dashboard", path: "/home", element: <Home />, role : "all" },
      { icon: <UserCircleIcon {...icon} />, name: "buyer", path: "/buyer", element: <Buyer />,role : "buyer"  },
      { icon: <UserCircleIcon {...icon} />, name: "seller", path: "/seller", element: <Seller />,role : "super-admin"},
      { icon: <TableCellsIcon {...icon} />, name: "trustee", path: "/trustee", element: <Trustee />,role : "super-admin" },
      { icon: <UserCircleIcon {...icon} />, name: "profile", path: "/profile", element: <Profile />,role : "all"},
      { icon: <InformationCircleIcon {...icon} />, name: "notifications", path: "/notifications", element: <Notifications />,role : "all" },
    ],
  },
];

export default routes;
