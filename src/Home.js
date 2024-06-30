import React, { useState } from 'react';
import './App.css';
import ItemList from './ItemList';

function Home() {
  const [items, setItems] = useState([
    'Universitas Dian Nuswantoro',
    'Ezra Louis Frasetyo',
    'A11.2021.13215',
    'Pemrograman Sisi Klien'
  ]);

  const [newItem, setNewItem] = useState('');

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  return (
    <div className="App bg-gray-700 min-h-screen flex flex-col justify-center items-center">
      <header className="App-header text-center p-4">
        <h1 className="font-semibold">
          Nama: Ezra Louis Frasetyo <br />
          NIM: A11.2021.13215
        </h1>
      </header>
      <main className="mt-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="bg-gray-200 p-4 rounded-lg">
          <ItemList items={items} />
          <div className="mt-4">
            <input
              type="text"
              className="p-2 w-full rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Tambahkan item baru"
              value={newItem}
              onChange={handleInputChange}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ml-2 focus:outline-none"
              onClick={handleAddItem}
            >
              Tambah
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
