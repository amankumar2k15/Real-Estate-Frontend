import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { useEffect } from "react";
import { getToken } from "./helper/tokenHelper";


function App() {
  const {pathname} = useLocation()
  const token = getToken()
  const navigate = useNavigate()
  
useEffect(()=>{
if(!token) return navigate("/auth/sign-up")
},[])
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
    </Routes>
  );
}

export default App;
