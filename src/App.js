import React, { useEffect, useState } from "react";
import Stats from "./Stats";
import Form from "./Form";
import Logo from "./Logo";
import ShoppingList from "./ShoppingList";

export default function App() {
  // const [items, setItems] = useState([]);
  const [items, setItems] = useState(function () {
    const storedValue = localStorage.getItem("items");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );

    if (confirmed) setItems([]);
  }

  const handleEditItem = (id, updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  useEffect(() => {
    if (items !== null) {
      localStorage.setItem("items", JSON.stringify(items));
    }
  }, [items]);

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <ShoppingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
        onEditItem={handleEditItem}
      />
      <Stats items={items} />
    </div>
  );
}
