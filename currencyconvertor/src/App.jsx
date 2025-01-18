import useCurrencyInfo from "./hooks/useCurrencyinfo.js";
import  InputBox  from "./components/InputBox.jsx";
import { useState } from "react";
function App() {

const[from,setfrom]=useState("usd");
const[to,setTo]=useState("inr");
const[amount,setAmount]=useState(0);
const[convertedamount,setconvertedAmount]=useState(0);
  const data=useCurrencyInfo(from);
  const options=Object.keys(data);
  console.log(options);

  function swap(){
    setfrom(to);
    setTo(from);
    setAmount(convertedamount);
    setconvertedAmount(amount);
  }


  function convert(){
setconvertedAmount(amount*data[to]);
  }
  return (
    <>
    <div className="flex justify-center items-center h-screen w-full bg-gray-400">
     <div className="flex justify-center flex-col items-center relative bg-white bg-opacity-30 backdrop-blur-lg p-6 shadow-xl   rounded-lg py-8 px-4">
     <InputBox label="From"  selectCurrency={from} currencyOptions={options} onAmountChange={(amnt)=>setAmount(amnt)} onCurrencyChange={(curr)=>setfrom(curr)} amount={amount} />
     <button className="bg-blue-800 text-white px-6 py-2 rounded-md my-[-10px] relative" onClick={swap}>SWAP</button>
     <InputBox disabled label="To"  selectCurrency={to} amount={convertedamount} onAmountChange="" onCurrencyChange={(curr)=>setTo(curr)} currencyOptions={options}/>

     <div>
<button className="px-8 py-4 bg-blue-800 text-white text-2xl mt-4 rounded-2xl" onClick={convert}>Convert  {from.toUpperCase()} to {to.toUpperCase()} </button>
     </div>
     
     
     </div>
     </div>
    </>
  )
}

export default App
