import React, { useEffect, useRef, useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      unitPrice,
      amount: (Number(unitPrice) * quantity).toFixed(2),
      packed: false,
      id: Date.now(),
    };
    //console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setUnitPrice("");
    setQuantity(1);
  }

  const inputEl = useRef(null);

  useEffect(function () {
    inputEl.current.focus();
  }, []);

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What groceries do you need?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        ref={inputEl}
      />
      <input
        className="amount"
        type="number"
        step="0.01"
        placeholder="Amount..."
        value={unitPrice}
        onChange={(e) => setUnitPrice(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
