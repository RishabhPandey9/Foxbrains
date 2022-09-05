import LogImg from "../Login/LoginImg.png";
import { useState } from "react";

import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  async function SignUp(e) {
    e.preventDefault();
    if (name === "") {
      toast.error(" name field is requred!", {
        position: "top-center",
      });
    } else if (users.find((user) => user.email == email)) {
      toast.error("email already exist", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (!email.includes(".com")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password !== confirmPassword) {
      toast.error("password didnt matched", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      dispatch({
        type: "REGISTER",
        payload: {
          id: new Date().getTime(),
          email,
          password,
        },
      });
      navigate("/Login");
      toast.success("SignUp successfully..", {
        position: "top-center",
      });
    }
  }
  toast.configure();
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword2 = () => {
    setValues({
      ...values,
      showPassword2: !values.showPassword2,
    });
  };

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <ToastContainer />
      <div className="mx-8 h-auto  md:mx-20 mt-10 md:mt-12 lg:mt-16 ">
        <div className=" md:flex">
          <div className="hidden md:flex md:flex-col w-1/2">
            <div className="flex md:mt-16 lg:mt-2">
              <div className="md:text-lg lg:text-2xl xl:text-3xl lg:mt-1 font-semibold ">
                Welcome to
              </div>
              <div className="ml-1  md:text-xl lg:text-3xl xl:text-4xl font-semibold text-blue-700">
                Foxbrains
              </div>
            </div>

            <div className=" mt-10 xl:mt-0 xl:pl-10 xl:pt-10 xl:pr-10 2xl:p-20">
              <img
                className="w-full md:h-60 lg:h-80 xl:h-96  "
                src={LogImg}
                alt=""
              />
            </div>
            <div className="grid justify-end">
              <div className="mt-2 text-xs lg:text-base text-slate-500">
                Powered by Foxbrains
              </div>
            </div>
          </div>
          <div className="border-2 w-full py-5 px-5 md:w-1/2  rounded-lg border-blue-600 md:ml-20">
            <div className="grid grid-cols-1 gap-y-4">
              <div className="font-bold text-lg lg:text-2xl xl:text-3xl">
                Sign Up
              </div>
              <div className="xl:mt-6">
                <TextField
                  className="w-full "
                  label="Enter Full Name"
                  id="outlined-size-small"
                  size="small"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <TextField
                  className="w-full "
                  label="Enter Email ID/ Phone Number"
                  id="outlined-size-small"
                  onChange={(e) => setEmail(e.target.value)}
                  size="small"
                />
              </div>
              <div>
                <FormControl variant="outlined" className="m-2 sm:mr-5 w-full">
                  <InputLabel
                    className="mt-[-5px]"
                    htmlFor="outlined-adornment-password"
                  >
                    Create Password
                  </InputLabel>
                  <OutlinedInput
                    label="Create Password"
                    className="w-full"
                    type={values.showPassword ? "text" : "password"}
                    size="small"
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          type={values.showPassword ? "text" : "password"}
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    required
                  />
                </FormControl>
              </div>
              <div>
                <FormControl variant="outlined" className="m-2 w-full">
                  <InputLabel
                    className="mt-[-5px]"
                    htmlFor="outlined-adornment-password"
                  >
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    label="Confirm Password"
                    id="new_password"
                    className="w-full"
                    size="small"
                    type={values.showPassword2 ? "text" : "password"}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          type={values.showPassword ? "text" : "password"}
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword2}
                          onMouseDown={handleMouseDownPassword2}
                          edge="end"
                        >
                          {values.showPassword2 ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    required
                  />
                </FormControl>
              </div>
              <div className="mt-2 xl:mt-6">
                <Button onClick={SignUp} className="w-full" variant="contained">
                  Sign Up
                </Button>
              </div>
              <Link to="/Login">
                <div>
                  <button className="border-2 py-2 w-full hover:bg-slate-500 ease-in duration-200 hover:text-white border-slate-300 rounded-lg text-sm text-slate-500">
                    Already have an account? Login
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
