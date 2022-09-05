import React, {useEffect, useState} from "react";


import axios from "axios";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link, useNavigate, useParams} from "react-router-dom";


import { Button } from "antd";
import Header_Navbar from "../../Components/NavBar-Sidebar_CompanyList/Header_Navbar";


const UserDetails = () => {
    const navigate = useNavigate();

    const [data, setData] = useState([])
  

    const params = useParams();

    async function getData() {
        await axios
            .get(`/users/${params.userId}`)
            .then((resp) => {
                setData(resp.data);
              
                console.log('resp', resp.data)
    
            })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
    
        getData()
    
    },[])
    toast.configure();
    return (
        <>
              <ToastContainer/>
            <Header_Navbar/>
            <div

                className="pt-5 bg-gray-100 px-4 mt-[68px] md:px-10 w-full h-screen overflow-auto"
            >
                <div
                   
                >
                    
                    <div className="bg-white px-8 md:px-12 pb-20 pt-8 w-full rounded-lg h-auto">
                    <div className="flex justify-end"><Button onClick={() => navigate('/users')} type="primary">Back</Button></div>
                    <div className=" grid grid-cols-2">
                    <div className="md:ml-24 mt-5 font-semibold text-sm   md:text-left ">
                            <div className="text-gray-400 ">Name</div>
                            <div className=" mt-3">
                                {data.name}
                            </div>
                        </div>
                        <div className="md:ml-24 mt-5 font-semibold text-sm   md:text-left ">
                            <div className="text-gray-400 ">User Name</div>
                            <div className=" mt-3">
                                {data.username}
                            </div>
                        </div>
                        <div className="md:ml-24 mt-5 font-semibold text-sm   md:text-left ">
                            <div className="text-gray-400 ">Email</div>
                            <div className=" mt-3">
                                {data.email}
                            </div>
                        </div>
                        <div className="md:ml-24 mt-5 font-semibold text-sm   md:text-left ">
                            <div className="text-gray-400 ">Phone Num.</div>
                            <div className=" mt-3">
                                {data.phone}
                            </div>
                        </div>
                        <div className="md:ml-24 mt-5 font-semibold text-sm   md:text-left ">
                            <div className="text-gray-400 ">Website</div>
                            <div className=" mt-3">
                                {data.website}
                            </div>
                        </div>
                    </div>
                          
                     
                       
                       
                       

                    </div>
                

                </div>

            </div>


        </>
    )
}

export default UserDetails