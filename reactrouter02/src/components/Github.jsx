import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
 const data =useLoaderData();
    // const [data,setData]=useState({});
    // const [isLoading, setIsLoading] = useState(true);
    // const [imageLoaded, setImageLoaded] = useState(false);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/NikhilSharmaSa')
    //     .then((res)=>res.json())
    //     .then((data)=>setData(data));
     


       
    //      },[])

        //  useEffect(() => {
        //     // Simulate a delay for image loading
        //     const timeout = setTimeout(() => {
        //       setIsLoading(false);  // Image loading finished
        //     }, 2000);  // 2 seconds delay (you can adjust this time)
        
        //     // Clean up the timeout if component is unmounted
        //     return () => clearTimeout(timeout);
        //   }, []);
        
        //   // Event handler for when the image is fully loaded
        //   const handleImageLoad = () => {
        //     setImageLoaded(true);
        //   };
    
    console.log(data);
    return (
        <>
      

        <div className='flex justify-around px-16 w-full items-center py-6'>
      
            <div className='flex justify-center items-center flex-col h-full gap-10' >
                <h1 className='text-2xl'>Profile Information</h1>
                <div>
                <h1><span className='font-semibold'>UserName:</span> {data?.login}</h1>
            <h1><span className='font-semibold'>Followers:</span> {data?.followers}</h1>
            <h1><span className='font-semibold'>Following:</span> {data?.following}</h1>
            <h1><span className='font-semibold'>Total Repos:</span> {data?.public_repos}</h1>

                </div>
         
            </div>
   
        <div className='flex justify-center items-center' >

        <img src={data?.avatar_url} alt=""  className='rounded-full '/>
        </div>
        </div>
        </>
    )
}

export default Github;


export const  GithubInfoLoader= async () => {
    const response=await fetch('https://api.github.com/users/NikhilSharmaSa');

    return response.json();
}