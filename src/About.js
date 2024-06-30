import React from 'react';

function About() {
  return (
    <div className="bg-gray-700 min-h-screen flex flex-col justify-center items-center">
      <header className="text-center p-4">
        <h1 className="font-semibold">
          Tentang Aplikasi
        </h1>
      </header>
      <main className="mt-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <p className="text-gray-700">
          Aplikasi ini dibuat oleh Ezra Louis Frasetyo, dengan NIM: A11.2021.13215.
        </p>
      </main>
    </div>
  );
}

export default About;
