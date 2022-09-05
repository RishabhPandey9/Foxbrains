/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header_Navbar from "../../Components/NavBar-Sidebar_CompanyList/Header_Navbar";
import  Spinner from '../../Components/Spinner/Spinner'

const Users = () => {
  const navigate = useNavigate();

  const [data,setData] = useState([])


  const [loading,setLoading] = useState(true)



  
  async function getData() {
    await axios
        .get('users')
        .then((resp) => {
            setData(resp.data);
            setLoading(false)
            console.log('resp', resp.data)

        })
        .catch((err) => {
            console.log(err);
        });
}
useEffect(() => {
getData()
},[])

  return (
    <>
      <Header_Navbar />
      <div>
        <div className="pt-1 pb-20  bg-gray-100 mt-[68px]  w-full h-full">
          <div
            
          >
           <div className='pt-4 bg-gray-100 px-4 md:px-10   w-full h-screen'>
        <div >
        <div className='overflow-auto  rounded-lg shadow  mb-20'>
        {data.length ? (
        <table className="w-full ">
          <thead className="bg-slate-200 border-b-2 border-gray-200">
            <tr className='text-blue-700 '>
              <th className="w-20 p-3 pl-10 text-lg font-semibold tracking-wide text-center">
                Name
              </th>
              <th className="w-24 p-3 text-lg font-semibold tracking-wide text-center">
                Company Name
              </th>
              <th className="w-10 p-3 text-lg font-semibold tracking-wide text-center">
                Email
              </th>
              <th className="w-24 p-3 text-lg font-semibold tracking-wide text-center">
                Website
              </th>
              <th className="w-24 p-3 text-lg font-semibold tracking-wide text-center">
                Details
              </th>
            </tr>
          </thead>
          
       
            <tbody className="divide-y divide-gray-100 text-center">
            {data.map((user) => {
              
              return (
                <tr
                  
                  key={user.id}
                  onClick={() => navigate(`/users/${user.id}`)}
                  className="bg-white cursor-pointer hover:bg-slate-100"
                  
                >
                  <td  className="p-3  pl-10 text-base text-gray-700 whitespace-nowrap">
                    {user.name}
                    
                    
                  </td>
                  <td className="p-3  MessageLine text-base text-gray-700 whitespace-nowrap">
                    
                    <div className='  text-base'>{user.company.name}</div>
                  
                  </td>
                  <td  className="p-3 text-base text-gray-700 whitespace-nowrap">
                  {user.email}
                  </td>
                  <td className="p-3  text-base text-gray-700 whitespace-nowrap">
                   {user.website}
                  </td>
                  <td className="p-3   text-base text-gray-700 whitespace-nowrap">
                  <div  
                 className='bg-slate-100  py-2 rounded-lg text-blue-600 hover:bg-slate-300 hover:text-blue-700 '> View Message </div>
                  
                  </td>
                </tr>
                
              )
            })}
            </tbody>
            </table>
            ) : (
              <div className='flex justify-center w-full'>
                {loading?<div className='flex justify-center w-full'><Spinner/></div>:
                   <div className='flex justify-center w-full'><img src={''} alt="noData" /></div> }
            
                </div>
              
          )}
          
       
     
        </div>
            </div>
        </div>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
