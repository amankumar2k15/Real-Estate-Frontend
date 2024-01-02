import { Suspense } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { getToken } from "./helper/tokenHelper";
import { SyncLoader } from "react-spinners";


function App() {
  const { pathname } = useLocation()
  const token = getToken()
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (!token) return navigate("/auth/sign-up")
  // }, [])
  // useEffect(()=>{
  // alert("hey")
  // },[])
  return (

    <Routes>
    <Route path="/dashboard/*" element={<Dashboard />} />
    <Route path="/auth/*" element={<Auth />} />
    <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
  </Routes>
  )
}

export default App;
