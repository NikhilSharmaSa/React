
function InputBox({ label,amount,onAmountChange,onCurrencyChange,currencyOptions=[],selectCurrency="usd"}) {


    return (
   
        <div className={`bg-white p-3 rounded-lg text-sm flex w-full`}>
            <div className="w-1/2">
                <label className="text-black/80 font-semibold mb-2 inline-block">
{label}
                </label>
                <input
                    id=""
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                   
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(e.target.value)}

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/80 font-semibold mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-sm px-2 py-2 bg-gray-600 text-white text-base cursor-pointer outline-none"
                    value={selectCurrency}
                  onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    >


{
currencyOptions.map((curr)=>(
    
      <option key={curr} value={curr}>{curr}</option>
    
))
}
                </select>
            </div>
        </div>


    );
}


export default InputBox;
