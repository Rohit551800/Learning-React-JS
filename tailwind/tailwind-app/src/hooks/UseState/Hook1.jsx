import React from 'react'
import { useState } from 'react';
import Button from '../../components/Button'

const Hook1 = () => {
    let [count , setCount] = useState(0);

    const inc = ()=>{
        setCount(count + 1)
    }
    const dec = ()=>{
        setCount(count - 1)
    }

  return (
    <div className='h-screen flex flex-col items-center justify-center bg-gray-700'>
        <p className='text-3xl font-bold'>Count : {count}</p>

        <div className="flex gap-10 my-10">
            <Button onClick= {inc}
              btn={'Inc+'} 
              className="bg-green-500 text-white hover:bg-green-600"
            />

            <Button 
            onClick={dec}
              btn={'Dec-'} 
              className="bg-red-500 text-white hover:bg-red-600"
            />
        </div>
    </div>
  )
}

export default Hook1