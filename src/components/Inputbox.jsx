import React, { useId } from 'react'

const Inputbox = ({
    label,
    amount,
    onamountchange,
    oncurrencychange,
    currencyoptions=[],
    selectedcurrency="usd",
    amountdisabled=false,
    currencydisabled=false,
    className=""

}) => {
    const id=useId();
  return (
      <div className={`container w-[90%] h-full bg-white  rounded-lg flex justify-between ${className}`}>
        <div className="box1 flex flex-col">
        <label htmlFor={id} className='font-bold cursor-pointer'>
            {label}
        </label>
        <input type="number" className='font-bold cursor-pointer' id={id} placeholder='amount' value={Number(amount).toString()} disabled={amountdisabled} onChange={(e)=>onamountchange && onamountchange(Number(e.target.value))}  />
        </div>
        <div className="box2 flex flex-col cursor-pointer">
        <label className='font-bold cursor-pointer'>Currency Type</label>
        <select className='font-bold bg-white cursor-pointer ' value={selectedcurrency} disabled={currencydisabled} onChange={(e)=>{oncurrencychange && oncurrencychange(e.target.value)}} >
         {
          currencyoptions.map((currency)=>(
            <option  key={currency} value={currency}>{currency}</option>
          ))
         }
    </select>
    </div>
      </div>
  )
}

export default Inputbox
