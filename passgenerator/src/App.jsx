import { useCallback, useEffect,useRef } from "react";
import { useState } from "react"


function App() {
   const [length,setLength]=useState(8);
   const[numAllowed,setNum]=useState(false);
   const[charAllowed,setChar]=useState(false);
   const[Password,setPassword]=useState("121kndfnbf");
   //useRef hook
   const passwordRef=useRef(null);

const passwordgenerator=useCallback(()=>{
let pass="";
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
if(numAllowed) str+="0123456789";
if(charAllowed) str+="!@#$%^&*";

for(let i=1; i<=length; i++){
  let char=Math.floor(Math.random()*str.length+1);
  pass+=str.charAt(char);
}

setPassword(pass);

},[length,numAllowed,charAllowed,setPassword])



useEffect(()=>{
passwordgenerator();
},[length,numAllowed,charAllowed,passwordgenerator])



const copyPass=useCallback((e)=>{
window.navigator.clipboard.writeText(Password);
passwordRef.current?.select();
alert("text copied!");
},[Password])
  return (
    <>
    <div className="h-screen w-full flex flex-col gap-4 justify-center items-center bg-gray-500">
      <h1 className="text-3xl font-semibold text-white bg-blue-800 px-8 py-4 rounded-lg">Password Generator</h1>
      <div className="flex ">
           <input type="text" className="px-4 py-2 text-xl rounded-l-2xl" ref={passwordRef} readOnly value={Password} />
           <button className="bg-blue-800 text-white px-4 py-2 text-xl rounded-r-2xl cursor-pointer" onClick={copyPass}>Copy!</button>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <label htmlFor="numbers" className="text-white">Numbers</label>
          <input type="checkbox"  onClick={()=>{setNum((prev)=>!prev)}} />
          <label htmlFor="numbers" className="text-white" >Special Characters</label>
          <input type="checkbox"  onClick={()=>{setChar((prev)=>!prev)}}  />  
          <input type="range" id="volume" name="volume" min={8} max={16} value={length}  onChange={(e)=>{setLength(e.target.value)}}/>
          <h3 className="text-white " >Length:{length}</h3>
        </div>

    </div>
    </>
  )
}

export default App
