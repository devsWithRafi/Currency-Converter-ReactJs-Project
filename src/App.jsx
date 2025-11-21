import './index.css'
import CurrencyConvert from './components/CurrencyConvert';

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-5 items-center justify-center bg-gray-900 text-white">
      <CurrencyConvert />
    </div>
  );
};

export default App;
