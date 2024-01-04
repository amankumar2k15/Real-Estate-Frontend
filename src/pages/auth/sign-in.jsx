import { setToken } from "@/helper/tokenHelper";
import { LoginService } from "@/services/api.service";
import { setUserRole } from "@/store/slice/userSlice";
import { Card, Input, Checkbox, Button, Typography, } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export function SignIn() {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({ email: "", password: "" })
  const navigate = useNavigate()
  // const googleAuth = () => {
  //   window.open(
  //     `http://localhost:4400/api/v1/auth/google/callback`,
  //     "_self"
  //   );
  // };



  const handleSubmit = (e) => {
    console.log(formData)
    e.preventDefault();
    // if (!formData.email && !formData.password) return toast.error("Please fill the required fields")
    LoginService(formData).then((res) => {
      navigate("/dashboard/home")
      setToken(res.data.results.token)
      dispatch(setUserRole(res?.data?.results?.role))
      console.log(res)
      toast.success(res.data.message)
    }).catch((err) => console.log(err.response.data.message))
  }

  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        {/* <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Sign In</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your email and password to Sign In.</Typography>
        </div> */}
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your password
            </Typography>
            <Input
              size="lg"
              placeholder="****************"
              onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button className="mt-6" fullWidth onClick={handleSubmit}>
            Sign In
          </Button>


          {/* <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Not registered?
            <Link to="/auth/sign-up" className="text-gray-900 ml-1">Create account</Link>
          </Typography> */}
        </form>

      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>

    </section>
  );
}

export default SignIn;
