import '../index.css'

const SelectCurrency = ({ currencyName, Select, SelectedCountry }) => {
  return (
    <div className="flex border border-gray-600 p-2 rounded-[10px] gap-3 w-full">
      <div className="bg-gray-500 flex items-center justify-center min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] rounded-full overflow-hidden">
        <img
          src={`https://flagsapi.com/${SelectedCountry.slice(0,2)}/flat/64.png`}
          alt={`${SelectedCountry}-flag`}
          className="w-full h-full scale-[1.7]"
        />
      </div>
      <select
        onChange={(e) => Select(e.target.value)}
        value={SelectedCountry}
        className="w-full bg-transparent outline-0 border-0 text-[1.3rem] cursor-pointer"
      >
        {currencyName.map((currency, index) => (
          <option key={index} value={currency} className="bg-black">
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCurrency;
