import React from "react";

import logo from "./HRI_Company_logo.png";

import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const Header_Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" z-10 bg-white flex justify-between border-b-4  w-full h-auto fixed  top-0 ">
        <div className=" md:space-x-1  mx-4 md:mx-5 mb-2 flex  ">
          <div className="logo-container w-full flex mt-3 md:mt-2 md:space-x-2 text-sm sm:text-md md:text-xl lg:text-xl px-2">
            <div>
              <img
                src={logo}
                alt=""
                className="h-7 md:h-9 lg:h-10   p-[2px] rounded-full"
              />
            </div>
            <p className="font-semibold text-xs md:text-lg text-blue-700  mt-3 ">
              Foxbrains
            </p>
          </div>
        </div>
        <div className="flex space-x-4 justify-center">
          <div>
            <div className="dropdown relative">
              <button
                onClick={() => navigate("/Login")}
                className="  dropdown-toggle font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out flex items-center whitespace-nowrap "
                type="button"
                aria-expanded="false"
              >
                <div>
                  <div className="space-x-3">
                    <div className="space-x-2 flex justify-end mt-5 pr-10 w-full">
                      <div className="">
                        {" "}
                        <Button onClick={() => navigate("/Login")} type="">
                          {" "}
                          Logout
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header_Navbar;
