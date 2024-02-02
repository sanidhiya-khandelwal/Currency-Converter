import { useState } from 'react'
import useCurrencyConverter from './hooks/useCurrencyConverter'

import './App.css'
import InputBox from './components/InputBox';

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);


  const currencyInfo = useCurrencyConverter(from);
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1550565118-3a14e8d0386f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvbGxhcnxlbnwwfHwwfHx8MA%3D%3D')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={amt => setAmount(amt)}
                currencyOptions={options}
                selectCurrency={from}
                onCurrencyChange={cur => setFrom(cur)}
                amountDisabled={false}
                currencyDisabled={false}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                onAmountChange={e => setConvertedAmount(e)}
                currencyOptions={options}
                selectCurrency={to}
                onCurrencyChange={cur => setTo(cur)}
                amountDisabled={false}
                currencyDisabled={false}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert from {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
