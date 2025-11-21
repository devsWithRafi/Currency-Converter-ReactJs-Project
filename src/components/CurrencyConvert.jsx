import React, { useEffect, useState } from 'react';
import { AiOutlineSwap } from 'react-icons/ai';
import SelectCurrency from './SelectCurrency';
import '../index.css';

const CurrencyConvert = () => {
  const url = `https://open.er-api.com/v6/latest/USD`; // Free api url (No key needed).
  const [fromCurrency, setFromCurrency] = useState('USD'); // Default selected currency
  const [toCurrency, setToCurrency] = useState('BDT'); // Default selected currency
  const [amount, setAmount] = useState(0); // default amount
  const [convertAmount, setConvertAmount] = useState(0); // store the value of convarted price
  const [currencyName, setCurrencyName] = useState([]); // store the all currency option
  const [currencyData, setCurrencyData] = useState(null); // store the all currency data from the 'fetchData' function
  const [loading, setLoading] = useState(false); // for loading animation
  // formula (ammount * toRate) / fromRate <-- currency converting formula

  // Async function for fetch data
  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Oops Something went wrong!');

      const data = await res.json();
      setCurrencyName(Object.keys(data.rates));
      setCurrencyData(data.rates);
    } catch (error) {
      console.log(error);
    }
  };
  // Fetch data first time after Render
  useEffect(() => {
    fetchData(url);
  }, []);
  // Submit option
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currencyData) return;
    setLoading(true);
    setTimeout(() => {
      const converted =
        (currencyData[toCurrency] * amount) / currencyData[fromCurrency];
      setConvertAmount(converted.toFixed(2));
      setLoading(false);
    }, 300);
  };
  // Swap option
  const swapCurrency = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertAmount(amount);
    setAmount(convertAmount);
  };

  return (
    <div className="w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 w-[500px] px-10 py-10 flex flex-col gap-5 rounded-2xl shadow-md
        max-[566px]:w-[90%] max-[465px]:gap-0"
      >
        <h1 className="text-center text-[2rem] font-semibold max-[465px]:text-[1.5rem]">
          Currency Converter
        </h1>
        <div className="w-full flex flex-col gap-2 mt-5">
          <label className="text-[1.1rem] font-medium max-[465px]:text-[1rem]">
            Enter Your Ammount
          </label>
          <input
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            required
            step="0.01"
            type="number"
            placeholder="0.00"
            className="px-5 bg-transparent border border-gray-600 py-3.5 rounded-[10px] outline-0 text-[1.3rem] max-[465px]:py-3 max-[465px]:text-[1rem]"
          />
        </div>
        {/* Choose currency for convert */}

        <div className="flex max-[465px]:flex-col items-center justify-between mt-1.5 gap-4 max-[465px]:gap-0 max-[465px]:mt-5">
          <div className="w-full flex flex-col gap-2">
            <label className="text-[1.2rem] font-medium max-[465px]:text-[1rem]">From</label>
            <SelectCurrency
              currencyName={currencyName}
              Select={setFromCurrency}
              SelectedCountry={fromCurrency}
            />
          </div>
          <div
            className="flex items-center justify-center border border-gray-600 p-2.5 rounded-full text-[1.3rem] cursor-pointer hover:bg-gray-700 hover:border-gray-500 ease-in-out duration-300 max-[465px]:rotate-90 mt-10 max-[465px]:mt-2 max-[465px]:-mb-6"
            onClick={swapCurrency}
          >
            <AiOutlineSwap />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-[1.2rem] font-medium max-[465px]:text-[1rem]">To</label>
            <SelectCurrency
              currencyName={currencyName}
              Select={setToCurrency}
              SelectedCountry={toCurrency}
            />
          </div>
        </div>
        {/* Output */}
        <div className="flex flex-col items-center w-full justify-center gap-5 mt-10">
          <button
            type="submit"
            className="bg-white text-black font-semibold w-full
            rounded-[10px] py-2.5 cursor-pointer hover:bg-gray-200 ease-in-out duration-300"
          >
            {loading ? 'Loading...' : 'Convert'}
          </button>
          {/* show the convarted value */}
          <div className="w-full flex items-center justify-center border border-gray-600 h-20 text-[1.2rem] font-semibold rounded-[10px] max-[465px]:h-[60px] max-[465px]:text-[1.1rem]">
            {`${amount} ${fromCurrency} = ${convertAmount} ${toCurrency}`}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CurrencyConvert;
