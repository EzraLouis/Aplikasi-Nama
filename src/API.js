import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, setUsers } from './actions';

function API() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newUser, setNewUser] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (newUser) {
      dispatch(addUser(newUser)); // Menambahkan pengguna baru ke dalam state global menggunakan Redux
      setName('');
      setEmail('');
    }
  }, [newUser, dispatch]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch(setUsers(data)); // Mengatur data pengguna dari API ke dalam state global menggunakan Redux
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setNewUser(data); // Setelah sukses menambahkan, newUser diisi dengan data pengguna baru
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="bg-gray-700 min-h-screen flex flex-col justify-center items-center text-white">
      <div className="mt-4 mb-8">
        <h2>Tambah Pengguna Baru:</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Masukkan nama"
            style={{ color: 'black' }} // Mengatur warna teks menjadi hitam
            required
          />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Masukkan email"
            style={{ color: 'black' }} // Mengatur warna teks menjadi hitam
            required
          />
          <button type="submit">Tambah Pengguna</button>
        </form>
        {newUser && (
          <p>Pengguna baru ditambahkan: {newUser.name} - {newUser.email}</p>
        )}
      </div>
      <div>
        <h2>Data Pengguna ({users.length}):</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default API;
