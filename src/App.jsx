import React from 'react'
import { useState } from 'react'
import { Inputbox } from './components/index.js'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount,setamount] = useState(0)
  const [from,setfrom] = useState("usd")
  const[to,setTo]=useState("inr") 
  const[convertedamount,setconvertedamount]=useState(0)
  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)
const convert=()=>{
  setconvertedamount(amount*(currencyInfo[to]))
}
const swap=()=>{
  setfrom(to);
  setTo(from);
}
  return (
    <div className='w-full h-screen ' style={{backgroundImage: `url(https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}>
      <form onSubmit={(e)=>{
        e.preventDefault()
        convert()
        }} className='w-full h-full flex justify-center items-center flex-col'>
    <div className="box h-1/2 w-1/2 rounded-xl flex flex-col gap-4 justify-center items-center" style={{backgroundImage:`url(https://nordicapis.com/wp-content/uploads/10-APIs-For-Currency-Exchange-Rates.jpg)`}}>
    <div className="b1 w-full flex justify-center"> 
    <Inputbox label="from" amount={amount} currencyoptions={options} onamountchange={setamount} selectedcurrency={from} oncurrencychange={setfrom}/>
    </div>
    <button onClick={swap} className='bg-blue-700 font-bold text-xl rounded-lg p-2'>
      SWAP
    </button>
    <div className="b2 w-full flex justify-center "> 
    <Inputbox label="to" amount={convertedamount} amountdisabled currencyoptions={options} selectedcurrency={to} oncurrencychange={setTo}/>
    </div>
    </div>
    <button type="submit" className=' w-1/2 h-14 text-3xl rounded-lg font-bold bg-black text-white '> Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
    </form>
       </div>
  )
}
export default App
