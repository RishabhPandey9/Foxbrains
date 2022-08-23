import React, { useEffect, useState } from "react";

import { selectHeader } from "../features/HeaderSlice";
import { useSelector } from "react-redux";

import {RiBuildingFill} from "react-icons/ri"

import { GoLocation } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import Cookies from "universal-cookie";
import { BsFillDiamondFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import comp from "../CompanyProfile/CompPng.png";
import {MdAddCircleOutline} from "react-icons/md"
import Header_Navbar from "../NavBar-Sidebar_CompanyList/Header_Navbar";
import {BsYoutube} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import { Button } from "antd";

const cookies = new Cookies();

const CompanyDetails = () => {
    const [data,setData] = useState([])
    const currentState = useSelector(selectHeader);

    const redirect = () => {
        axios
          .get(`company/client-detail/${cookies.get('compnyId')}`, {
            headers: {
              Authorization: "Token " + cookies.get("token"),
            },
          })
          .then((res) => {
            console.log("Company Redirect: ", res.data);
            setData(res.data)
            console.log('res.data[1].login_details.redirect_url', res.data[1].login_details.user.token)
            
            // myFunction(res.data[1].redirect_url)
            
    
            
          })
    
          .catch((err) => {
            console.log("error: ", err);
          });
      };
      useEffect(() =>{
        redirect();
      },[])
      const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
  return (
    <>
    <Header_Navbar />
     <div
         
         className="pt-5 pb-20  bg-gray-100 px-4 mt-[68px]  md:px-10   w-full h-auto"
       >
         <div
           className={
             !currentState?.show
               ? " lg:ml-72 ease-in duration-300 "
               : " ease-in  duration-300  ml-0 "
           }
         >
  
                <div  className="bg-white px-8 md:px-12 pb-20 pt-8 w-full rounded-lg h-auto">
                <div className="md:flex  justify-between">
                  <div className=" md:flex justify-center">
                  <div className="flex justify-center ">
                <div className="w-20 ">
                  <img
                    className="w-20 h-20 mt-2   border-2 border-gray-600 rounded-full "
                    src={data[0]?.logo? data[0]?.logo : comp}
                    alt=""
                  />
                </div>
              </div>
                    <div className="flex justify-center">
                      <div className="font-semibold mt-2  md:mt-4 md:ml-4 text-lg md:text-2xl">
                        {data[0]?.business_name}
                        <div className="text-gray-500 text-base">{data[0]?.tagline}</div>
                      </div>
                    
                    </div>
                  </div>
                  <div className="flex justify-center mt-5">
                    <div className="">
                     
                 
                     
                      <Button
                      size="large"
                        onClick={() => {  openInNewTab(`${data[1].redirect_url}?token=${data[1].login_details.user.token}`) }}
                        type="primary"
                        style={{borderRadius: "5px"}}
                        // className="bg-blue-500 px-6 py-2 font-semibold text-white rounded-md  "
                      >
                        Connect
                      </Button>
                
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className="text-center md:text-left md:flex mt-5 md:mt-0 text-sm font-semibold ml-2 md:ml-24">
                    <div className="grid md:grid-cols-2 gap-x-20 gap-y-5">
                    <div className="grid gap-y-2">
                      <div className="text-gray-400 ">Office Email</div>
                      <div>{    data[0]?.ofc_email}</div>
                    </div>
                    <div className="grid gap-y-2">
                      <div className="text-gray-400 ">HR Office contact</div>
                      <div>{    data[0]?.ofc_phone}</div>
                    </div>
                        
                    <div className="grid gap-y-2">
                      <div className="text-gray-400 ">WhatsApp Number</div>
                      <div>{    data[0]?.ofc_whatsapp}</div>
                    </div>
                  
                    </div>
                
                </div>
                <div className="md:ml-24 mt-5 font-semibold text-sm text-center md:text-left ">
                  <div className="text-gray-400 ">Company Description</div>
                  <div className=" mt-3">
                   {    data[0]?.about_us}
                  </div>
                </div>
                <div className="md:ml-24 mt-5 font-semibold text-sm text-center md:text-left">
                  <div className="text-gray-400 ">Company Social media</div>
                  <div
                  className="grid md:grid-cols-2 gap-5 mt-5"
                  >
                    {/* {    ofc_fb?<div className="flex border-2 p-2 rounded-lg pl-4">
                      <FcGoogle className="text-xl mr-2" />
                      {    compUrl}
                    </div>:""} */}
                    {    data[0]?.ofc_fb ?<div className="flex border-2 p-2 rounded-lg pl-4">
                      <BsFacebook className="text-xl mr-2 text-blue-600" />
                      {    data[0]?.ofc_fb}
                    </div>:""}
                    {    data[0]?.ofc_linkedin?<div className="flex border-2 p-2 rounded-lg pl-4">
                      {" "}
                      <BsLinkedin className="text-xl mr-2 text-blue-600" />{" "}
                      {     data[0]?.ofc_linkedin}
                    </div>:""}
                    {    data[0]?.ofc_instagram?<div className="flex border-2 p-2 rounded-lg pl-4">
                      {" "}
                      <AiFillInstagram className="text-xl  mr-2 text-red-400" />{" "}
                      {     data[0]?.ofc_instagram}
                    </div>:""}
                    {    data[0]?.ofc_instagram?<div className="flex border-2 p-2 rounded-lg pl-4">
                      {" "}
                      <BsYoutube className="text-xl mr-2 text-red-600" />{" "}
                      {     data[0]?.ofc_instagram}
                    </div>:""}
                  </div>
                </div>
         
              </div>
           
      
          
         </div>
         
       </div>
  
   
        
    
  </>
  )
}

export default CompanyDetails