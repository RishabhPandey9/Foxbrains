import React from 'react'
import { useState } from 'react';
import HashLoader from 'react-spinners/HashLoader';


const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };

const Spinner = ({loading1}) => {
   
    const [color, setColor] = useState('#2563EB');
    const [loading,setLoading] = useState(true)
  return (
    <>
    {
        loading ?   <div className='flex items-center h-[80vh] justify-center'>
        <div>
        <HashLoader
    color={color}
    loading={loading1 || loading}
    cssOverride={override}
    size={100}
  />
        </div>
    </div> : null
    }
 
     
    </>
  
  )
}

export default Spinner