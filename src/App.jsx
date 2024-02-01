import { useState } from 'react'
import useCurrencyConverter from './hooks/useCurrencyConverter'

import './App.css'

function App() {
  const data = useCurrencyConverter('inr')
  console.log(data);
  return (
    <>
      <h1>
        Currency Converter data
      </h1>
    </>
  )
}

export default App
