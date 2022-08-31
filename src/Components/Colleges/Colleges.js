/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";



import axios from "axios";
import { selectHeader } from "../features/HeaderSlice";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import Header_Navbar from "../NavBar-Sidebar_CompanyList/Header_Navbar";
import { Button, Input } from "antd";
import { BsSearch } from "react-icons/bs";
import { TiLocationOutline } from "react-icons/ti";

const cookies = new Cookies();

const Colleges = () => {
  const navigate = useNavigate();
  const currentState = useSelector(selectHeader);
  const [data,setData] = useState([])
  const [input, setInput] = useState("");
  const [output2, setOutput2] = useState([]);
  const [id,setId] = useState()

 
  
  async function getData() {
    await axios
        .get('company/client-list', {
            headers: {
                Authorization: "Token " + cookies.get("token"),
            },
        })
        .then((resp) => {
            setData(resp.data);

        })
        .catch((err) => {
            console.log(err);
        });
}
useEffect(() => {
getData()
},[,input])

  return (
    <>
      <Header_Navbar />
      <div>
        <div className="pt-1 pb-20  bg-gray-100 mt-[68px]  w-full h-full">
          <div
            className={
              !currentState?.show
                ? " lg:ml-72 ease-in duration-300 "
                : " ease-in  duration-300  ml-0 "
            }
          >
            <div className="bg-white p-2 pt-4 ">
              <div className="">
              <Input
                placeholder="Enter Company Name"
                size="large"
                suffix={<BsSearch className="site-form-item-icon" />}
                onChange={(e) => setInput(e.target.value)}
              />
              </div>
            
            </div>
            <div className="px-4"> 
           
              {
        
              data.map((item) =>{
                return(
                  item?.business_name?.toLowerCase().includes(input?.toLowerCase()) &&(
                    <div key={item.id} className=" overflow-auto px-10  bg-white rounded-md mt-4 h-16">
                    <div  className="flex w-full  justify-between gap-x-4  md:gap-x-10  ">
                    <div className="flex justify-center items-center h-16">
                      <div className="">
                        <img
                          src={item.logo}
                          className="w-10 h-10 rounded-full"
                          title="image_"
                        />
                      </div>
                    </div>
                    <div className="flex  items-center h-16 ">
                      <div>
                        <div>
                          <span className="font-semibold text-[17px] ">
                            {item.business_name}
                          </span>{" "}
                        
                        </div>{" "}
                        <div className="truncate flex">
                          <span>
                            <TiLocationOutline className="mt-1 mr-1" />{" "}
                          </span>{" "}
                          <span className="w-60 truncate">
                            asd asd sdasda asdasd asdasd asdasd asdasd
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center h-16">
                      <div>
                        <Button
                          onClick={() => { cookies.set('compnyId',item.id); navigate("/CompanyDetails") }}
                          type="primary"
                          style={{borderRadius: "5px"}}
                          // className="bg-blue-500 px-6 py-2 font-semibold text-white rounded-md  "
                        >
                          Details
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-center items-center h-16 font font-semibold text-[16px] ">
                      asd
                    </div>
                    <div className="flex justify-center items-center h-16 font font-semibold text-[16px] ">
                      asd
                    </div>
                  </div>
                  </div>
                  )
                   
                  )
                
                
              })}
           
        
            </div>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default Colleges;
