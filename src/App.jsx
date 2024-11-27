// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('');
  const [itemsList, setItemsList] = useState([]);

  const handleInputChange = (e) => {
    setItem(e.target.value);
  };

  const handleAddItem = () => {
    if (item.trim()) {
      setItemsList([...itemsList, item]);
      setItem('');
    }
  };

  const handleRemoveItem = (index) => {
    const newItemsList = itemsList.filter((_, i) => i !== index);
    setItemsList(newItemsList);
  };

  return (
    <div className="app">
      <h1>Lista de Compras</h1>
      <div className="input-container">
        <input
          type="text"
          value={item}
          onChange={handleInputChange}
          placeholder="Adicione um item"
        />
        <button onClick={handleAddItem}>Adicionar</button>
      </div>
      <ul className="items-list">
        {itemsList.map((item, index) => (
          <li key={index} className="item">
            <span>{item}</span>
            <button onClick={() => handleRemoveItem(index)} className="remove-btn">
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
