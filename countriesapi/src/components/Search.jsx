import { useState } from "react";
import {useEffect } from "react";




function Card({name,flag,population,region,capital}){
    return(
        <>
        <div className="flex flex-col border-solid bg-white shadow-2xl rounded-sm">
        <img className="w-full h-64" src={flag} alt="" />
        <div className=" flex flex-col px-8 py-8  gap-6 ">
        <h2 className=" text-xl">{name}</h2>
        <div>

            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
        
        </div>
        </div>
        </div>
        </>
    )
}
function Search(){

    const [Searchval,setSearchval]=useState("");
    const[fvalue,setfvalue]=useState("all");
    const[newData,setNewData]=useState([]);
let index=0;
    //filter 

    async function getData() {
        const response= await fetch("src/assets/data.json");
        const data=await response.json()
        if(fvalue==="all"){
           setNewData(data.filter(data => (data.name.toLowerCase()).includes(Searchval.toLowerCase())))
        }else{
            const nData=data.filter(data => (data.region.toLowerCase())==fvalue.toLowerCase());
            setNewData(nData.filter(data => (data.name.toLowerCase()).includes(Searchval.toLowerCase())))
        }
        

       
        
    }

    
    useEffect(()=>{
getData();

    },[Searchval,fvalue])
return (

<>
<div className="flex flex-col gap-6" >
<div className="flex px-10 justify-between items-center">
<input type="text" placeholder="Search For a Country.." value={Searchval} onChange={(e)=>{setSearchval(e.target.value)}} className=" text-black shadow-2xl bg-slate-50 border-solid border-2 font-semibold  text-center w-96 h-10 "/>
<select name="" id=""  className="text-black shadow-2xl  bg-slate-50 border-solid border-2 font-semibold  text-center w-96 h-10"  onChange={(e)=>{setfvalue(e.target.value)}}value={fvalue}>
    <option value="all">Filter by Region</option>
    <option value="asia">Asia</option>
    <option value="Americas">America</option>
    <option value="africa">Africa</option>
    <option value="europe">Europe</option>
    <option value="oceania">Oceania</option>
</select>
</div>
<div className="grid grid-cols-4 grid-rows-4  gap-8 justify-center items-center px-8 ">

 {newData.map((data) => (

     <Card name={data.name} flag={data.flag} capital={data.capital} key={index++} population={data.population} region={data.region}/>
     ))}


</div>
</div>
</>


)
}



export default Search;