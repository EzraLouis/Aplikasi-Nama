import React, { useState } from 'react';

function Kalkulator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAddition = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtraction = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiplication = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivision = () => {
    if (num2 !== '0') {
      setResult(parseFloat(num1) / parseFloat(num2));
    } else {
      setResult('Cannot divide by zero');
    }
  };

  return (
    <div className="bg-gray-700 min-h-screen flex flex-col justify-center items-center">
      <header className="App-header text-center p-4">
        <h1 className="font-semibold">Kalkulator</h1>
      </header>
      <main className="mt-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <input
            type="number"
            className="p-2 w-full rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Masukkan angka pertama"
            value={num1}
            onChange={handleNum1Change}
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            className="p-2 w-full rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Masukkan angka kedua"
            value={num2}
            onChange={handleNum2Change}
          />
        </div>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none"
            onClick={handleAddition}
          >
            Tambah
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none"
            onClick={handleSubtraction}
          >
            Kurang
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none"
            onClick={handleMultiplication}
          >
            Kali
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none"
            onClick={handleDivision}
          >
            Bagi
          </button>
        </div>
        {result !== null && (
          <div className="mt-4 p-4 bg-gray-200 rounded-lg">
            Hasil: {result}
          </div>
        )}
      </main>
    </div>
  );
}

export default Kalkulator;
