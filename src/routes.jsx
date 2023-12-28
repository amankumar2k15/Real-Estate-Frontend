import { HomeIcon, UserCircleIcon, TableCellsIcon, InformationCircleIcon, ServerStackIcon, RectangleStackIcon } from "@heroicons/react/24/solid";
import { Home, Profile, Trustee, Notifications, Seller, Buyer } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};


export const routes = [
  {
    layout: "dashboard",
    pages: [
      { icon: <HomeIcon {...icon} />, name: "dashboard", path: "/home", element: <Home />, },
      { icon: <UserCircleIcon {...icon} />, name: "buyer", path: "/buyer", element: <Buyer />, },
      { icon: <UserCircleIcon {...icon} />, name: "seller", path: "/seller", element: <Seller />, },
      { icon: <TableCellsIcon {...icon} />, name: "trustee", path: "/trustee", element: <Trustee />, },
      { icon: <UserCircleIcon {...icon} />, name: "profile", path: "/profile", element: <Profile />, },
      { icon: <InformationCircleIcon {...icon} />, name: "notifications", path: "/notifications", element: <Notifications />, },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      { icon: <ServerStackIcon {...icon} />, name: "sign in", path: "/sign-in", element: <SignIn />, },
      { icon: <RectangleStackIcon {...icon} />, name: "sign up", path: "/sign-up", element: <SignUp />, },
    ],
  },
];

export default routes;
