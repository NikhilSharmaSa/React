import React, { useEffect, useState } from 'react'

function Github() {

    const [data,setData]=useState({});
    useEffect(()=>{
   fetch('https://api.github.com/users/NikhilSharmaSa')
   .then((res)=>res.json())
   .then((data)=>setData(data));

    },[])
    console.log(data);
    return (
        <>
        <div className='flex justify-around px-16 w-full items-center  py-6'>
            <div className='flex justify-center items-center flex-col h-full gap-10'>
                <h1 className='text-2xl'>Profile Information</h1>
                <div>
                <h1><span className='font-semibold'>UserName:</span> {data.login}</h1>
            <h1><span className='font-semibold'>Followers:</span> {data.followers}</h1>
            <h1><span className='font-semibold'>Following:</span> {data.following}</h1>
            <h1><span className='font-semibold'>Total Repos:</span> {data.public_repos}</h1>

                </div>
         
            </div>
   
        <div className='flex justify-center items-center'>

        <img src={data.avatar_url} alt=""  className='rounded-full '/>
        </div>
        </div>
        </>
    )
}

export default Github
