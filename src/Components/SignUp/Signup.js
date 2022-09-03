import LogImg from "../Login/LoginImg.png";
import { useState } from "react";

import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Cookies from "universal-cookie";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const cookies = new Cookies();
const Signup = () => {
  const [password, setPassword] = useState("");
  const [is_company,setIs_company] = useState(1)
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tnc, setTnc] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function SignUp(e) {
    e.preventDefault();
    let data = { email, password, is_company };
    if (tnc === true && password === confirmPassword) {
      axios
        .post("auth/user/register", data)
        .then((resp) => {
          console.log(resp);
          navigate("/VerifySignup");
          cookies.set("cokieToken", resp.data.token);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
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
  // console.warn(tnc)

  return (
    <>
      <div className="mx-8 h-auto  md:mx-20 mt-10 md:mt-12 lg:mt-16 ">
        <div className=" md:flex">
          <div className="hidden md:flex md:flex-col w-1/2">
            <div className="flex md:mt-16 lg:mt-2">
              <div className="md:text-lg lg:text-2xl xl:text-3xl lg:mt-1 font-semibold ">
                Welcome to
              </div>
              <div className="ml-1  md:text-xl lg:text-3xl xl:text-4xl font-semibold text-blue-700">
                HRI Mybizmo
              </div>
            </div>
            <div className="text-slate-400 md:text-sm lg:text-lg">
              Plan your next recruitment here
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
                Powered by HRI @MyBizmo
              </div>
            </div>
          </div>
          <div className="border-2 w-full py-5 px-5 md:w-1/2  rounded-lg border-blue-600 md:ml-20">
            <div className="grid grid-cols-1 gap-y-4">
              <div className="font-bold text-lg lg:text-2xl xl:text-3xl">
                Sign Up as Recruiter
              </div>
              <div className="xl:mt-6">
                <TextField
                  className="w-full "
                  label="Enter Full Name"
                  id="outlined-size-small"
                  size="small"
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
              <Link to="/">
                <div>
                  <button className="border-2 py-2 w-full hover:bg-slate-500 ease-in duration-200 hover:text-white border-slate-300 rounded-lg text-sm text-slate-500">
                    Already have an account? Login
                  </button>
                </div>
              </Link>

              <p className="inline-flex justify-center font-semibold text-xs xl:text-sm text-center">
                <span>
                  <input
                    type="checkbox"
                    onChange={(e) => setTnc(e.target.checked)}
                  />
                </span>
                <div className="ml-2">
                  By signing you agree to the <b className="text-blue-600">terms of use</b>  and  <b className="text-blue-600">our Policy</b>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
