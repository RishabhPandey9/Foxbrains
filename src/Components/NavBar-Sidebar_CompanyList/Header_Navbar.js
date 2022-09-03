import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import {BsFillDiamondFill} from "react-icons/bs"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import logo from "./HRI_Company_logo.png";
import profile from "./profile.png";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowBackIos } from "react-icons/md";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import {IoPersonSharp} from 'react-icons/io5'
import {AiFillMessage} from 'react-icons/ai'
import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiDashboardFill, RiProfileFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { RiProfileLine } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { BiNotepad } from "react-icons/bi";
import { AiTwotoneSetting } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { hiding, selectHeader, showing } from "../features/HeaderSlice";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {GoBell} from 'react-icons/go'
import {IoIosMail} from 'react-icons/io'
import {BsDot} from 'react-icons/bs'
import {FaGraduationCap, FaIdCard} from 'react-icons/fa'
import {AiFillSetting} from 'react-icons/ai'
import {MdLiveHelp} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'
import {BsCalendar2Event} from 'react-icons/bs'

const cookies = new Cookies();

const Header_Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data,setData] = useState([])
  const [slide,setSlide] = useState([])
  const currentState = useSelector(selectHeader);
  async function getData() {
    await axios
      .get("hri_company/broadcast-list", {
        headers: {
          Authorization: "Token " + cookies.get("cokieToken"),
        },
      })
      .then((resp) => {
        console.log(resp.data,"<===data");
        console.log(resp.data.length,"<===length");
        setData(resp.data.length)
        setSlide(resp.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  const [nav, setNav] = useState(true);
  const [active,setActive] = useState("Posted Jobs")

  const visible = () => {
    setNav(!nav);

    dispatch(
      showing({
        show: true,
      })
    );

    if (currentState?.show === true) {
      dispatch(hiding());
    }
  };
  let activeStyle = {
    backgroundColor: "rgb(241,245,249)",
    color: "#1B77AA",
    borderRadius: "5px",
  };

  useEffect(() => {}, [nav,active]);
  return (
    <>
      <div  className=" z-10 bg-white flex justify-between border-b-4  w-full h-auto fixed  top-0 ">
        <div className=" md:space-x-1  mx-4 md:mx-5 mb-2 flex  ">
          <div className="header_nav_icon_div my-4 cursor-pointer ">
            {nav ? (
              <MdOutlineClose
                onClick={visible}
                className="ease-in duration-300 text-2xl overflow-auto font-extralight header_nav_icon"
              />
            ) : (
              <HiOutlineMenu
                onClick={visible}
                className="ease-in   overflow-auto duration-300 header_nav_icon text-2xl font-extralight"
              />
            )}
          </div>

          <div className="logo-container w-full flex mt-3 md:mt-2 md:space-x-2 text-sm sm:text-md md:text-xl lg:text-xl px-2">
            <div>
              <img
                src={logo}
                alt=""
                className="h-7 md:h-9 lg:h-10   p-[2px] rounded-full"
              />
            </div>
            <p className="font-semibold text-xs md:text-lg text-blue-700  mt-3 ">
              HR Intelligent Company
            </p>
          </div>
        </div>
        <div className="flex space-x-4 justify-center">
  <div>

    <div className="dropdown relative">

      <button
       onClick={() => navigate("/CompanyProfile")}
        className="  dropdown-toggle font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out flex items-center whitespace-nowrap "
        type="button"
        aria-expanded="false"
      >
        <div>
        <div className="space-x-3">
          <div className="space-x-2 flex justify-end mt-3  w-full">
            <div className="">
              {" "}
              <Avatar
                src={cookies.get("companyProfile")}
                className=" mr-4 md:mr-0 border-2 border-slate-500"
              />
            </div>
            <div className="hidden md:flex">
              <div>
                {" "}
                <div className="text-xs font-semibold   md:text-base lg:text-lg w-full mt-2 mr-6">
                  {cookies.get("companyName")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </button>
    </div>
  </div>
</div>
      </div>
      <nav
        className={
          nav
            ? "text-gray-600 z-10 mt-2 overflow-y-auto w-72 bg-white fixed sidebar_parent_div  pl-5 pr-5 pt-2  border-r-4  h-full  ease-in duration-300 "
            : " z-10 w-72 text-gray-600 bg-white overflow-y-auto fixed  h-full  transform -translate-x-full space-y-4 ease-in duration-300"
        }
      >
        <div className="flex  flex-col h-[85vh] justify-between sidebar_options_div hover:rounded text-sm text-gray-600 space-y-1 mx-3 ">
       <div className="space-y-2">
       <div>
          </div>
        
          <div
                        onClick={() => navigate("/CompanyProfile")}
                        className={`hover:bg-neutral-100 rounded cursor-pointer flex text-gray-600 items-centercursor-pointer hover:text-sky-700 p-2 font-semibold 
                            ${window.location.pathname === "/CompanyProfile" ? "bg-neutral-100 text-sky-700" : ""}`}
                    >
                        <p className="m-1 flex">
                            <RiProfileFill className="mr-4 text-lg"/>
                            Company Profile
                        </p>
                    </div>
                    <div
                        onClick={() => navigate("/Colleges")}
                        className={`hover:bg-neutral-100 rounded flex cursor-pointer text-gray-600 items-centercursor-pointer hover:text-sky-700 p-2 font-semibold 
                            ${window.location.pathname === "/Colleges" ? "bg-neutral-100 text-sky-700" : ""}`}
                    >
                        <p className="m-1 flex">
                            <FaGraduationCap className="mr-4 text-lg"/>
                            Colleges
                        </p>
                    </div>
          
       </div>
<div className="flex items-end ">
  

          <NavLink to="/" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            <div
               className="single_option_div   w-[220px] p-3 text-gray-600 cursor-pointer font-semibold flex space-x-2 hover:bg-slate-100 hover:rounded hover:text-red-400"
            >
              <BiLogOut className="text-xl option_icon" />
              <div className="option_title">
                <div className="single_option_anchor hover:text-red-400 ">
                  Logout
                </div>
              </div>
            </div>
          </NavLink>
     
</div>   
        </div>
      </nav>
    </>
  );
};

export default Header_Navbar;
