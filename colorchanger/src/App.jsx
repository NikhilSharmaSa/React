import { useState } from "react"
function App() {

  const [color,setColor]=useState("green-700");


  return (
    <>
    <div className={`h-screen w-full flex flex-col justify-end items-center py-6 bg-${color}`} >
    <div className="px-10 w-full h-20">

      <div className="bg-slate-400 h-full rounded-3xl shadow-2xl px-3 py-2 flex gap-5 justify-center items-center ">
<button className="bg-green-700 text-white px-5 py-3 rounded-3xl  text-2xl " onClick={()=>setColor("green-700")}>Green</button>
<button className="bg-red-600 text-white px-5 py-3 rounded-3xl  text-2xl " onClick={()=>setColor("red-600")}>Red</button>
<button className="bg-blue-900 text-white px-5 py-3 rounded-3xl  text-2xl " onClick={()=>setColor("blue-900")}>Blue</button>
<button className="bg-white text-black px-5 py-3 rounded-3xl  text-2xl " onClick={()=>setColor("white")}>White</button>
<button className="bg-black text-white px-5 py-3 rounded-3xl  text-2xl " onClick={()=>setColor("black")}>Black</button>
<button className="bg-orange-600 text-white px-5 py-3 rounded-3xl  text-2xl " onClick={()=>setColor("orange-600")}>Orange</button>
<button className="bg-green-400 text-black px-5 py-3 rounded-3xl  text-2xl " onClick={()=>setColor("green-400")}>Parrot</button>




      </div>
    </div>
    </div>
    </>
  )
}

export default App
