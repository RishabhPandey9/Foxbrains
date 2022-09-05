import LogImg from "./LoginImg.png";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  async function Login(e) {
    const payload = users.find(
      (user) => user.email == email && user.password == password
    );
    if (email === "") {
      toast.error(" Email field is requred!", {
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
    } else {
      if (payload) {
        dispatch({
          type: "LOGIN",
          payload,
        });
        toast.success("Login successfully..", {
          position: "top-center",
        });
        navigate("/users");
      } else {
        toast.error("Plz check your credentials..", {
          position: "top-center",
        });
      }
    }
  }
  toast.configure();
  const [values, setValues] = React.useState({
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

  return (
    <>
      <div className="">
        <div className="mx-8 h-auto  md:mx-20 mt-10 md:mt-12 lg:mt-16 ">
          <div className=" md:flex">
            <div className="hidden md:flex md:flex-col  w-1/2">
              <div className="flex md:mt-16 lg:mt-2">
                <div className="md:text-lg lg:text-2xl xl:text-3xl lg:mt-1 font-semibold ">
                  Welcome to
                </div>
                <div className="ml-1  md:text-xl lg:text-3xl xl:text-4xl font-semibold text-blue-700">
                  Foxbrains
                </div>
              </div>

              <div className=" mt-10 xl:mt-0 xl:pl-10 xl:pt-10 xl:pr-10  2xl:p-20">
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
                  Login
                </div>
                <div className="xl:mt-6">
                  <TextField
                    className="w-full "
                    label="Enter Email ID/ Phone Number"
                    id="outlined-size-small"
                    onChange={(e) => setEmail(e.target.value)}
                    size="small"
                  />
                </div>

                <div className="">
                  <FormControl variant="outlined" className="w-full">
                    <InputLabel
                      htmlFor="outlined-adornment-password"
                      className=""
                    >
                      <div className="mt-[-5px]">Enter Your Password</div>
                    </InputLabel>
                    <OutlinedInput
                      label="Current Password"
                      className="w-full"
                      type={values.showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      size="small"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            type={values.showPassword ? "text" : "password"}
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            size="small"
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
                <div className="grid justify-end"></div>
                <div className="mt-2 xl:mt-6">
                  <Button
                    onClick={Login}
                    className="w-full"
                    variant="contained"
                  >
                    Login
                  </Button>
                </div>
                <div>
                  <Link to="/">
                    <button className="border-2 hover:bg-slate-500 ease-in duration-200 hover:text-white py-2 w-full border-slate-300 rounded-lg text-sm text-slate-500">
                      Not a Member? Sign Up
                    </button>
                  </Link>
                </div>

                <div className="flex justify-center font-semibold text-xs xl:text-sm text-center">
                  <div>The&nbsp;</div>
                  <div className="text-blue-700">terms of use&nbsp;</div>
                  <div>and&nbsp;</div>
                  <div className="text-blue-700 ">our Policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
