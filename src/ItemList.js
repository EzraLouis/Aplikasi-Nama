import React from 'react';

function ItemList({ items }) {
  return (
    <ul className="list-disc list-inside">
      {items.map((item, index) => (
        <li
          key={index}
          className={`p-2 ${index % 2 === 0 ? 'bg-blue-100' : 'bg-green-100'}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
