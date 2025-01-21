import React, { useEffect, useState } from 'react'

function Github() {

    const [data,setData]=useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(()=>{
        fetch('https://api.github.com/users/NikhilSharmaSa')
        .then((res)=>res.json())
        .then((data)=>setData(data));
     


       
         },[])

         useEffect(() => {
            // Simulate a delay for image loading
            const timeout = setTimeout(() => {
              setIsLoading(false);  // Image loading finished
            }, 2000);  // 2 seconds delay (you can adjust this time)
        
            // Clean up the timeout if component is unmounted
            return () => clearTimeout(timeout);
          }, []);
        
          // Event handler for when the image is fully loaded
          const handleImageLoad = () => {
            setImageLoaded(true);
          };
    
    console.log(data);
    return (
        <>
      

        <div className='flex justify-around px-16 w-full items-center  py-6'    >
        <div class="flex justify-center items-center h-screen"  style={{ display: isLoading ? 'flex' : 'none' }} >

<div class="border-4 border-t-4 border-gray-300 border-solid w-16 h-16 rounded-full animate-spin border-t-blue-500"></div>
</div>
            <div className='flex justify-center items-center flex-col h-full gap-10' style={{ display: isLoading ? 'none' : 'flex' }} onLoad={handleImageLoad}>
                <h1 className='text-2xl'>Profile Information</h1>
                <div>
                <h1><span className='font-semibold'>UserName:</span> {data.login}</h1>
            <h1><span className='font-semibold'>Followers:</span> {data.followers}</h1>
            <h1><span className='font-semibold'>Following:</span> {data.following}</h1>
            <h1><span className='font-semibold'>Total Repos:</span> {data.public_repos}</h1>

                </div>
         
            </div>
   
        <div className='flex justify-center items-center' style={{ display: isLoading ? 'none' : 'flex' }}>

        <img src={data.avatar_url} alt=""  className='rounded-full '/>
        </div>
        </div>
        </>
    )
}

export default Github
