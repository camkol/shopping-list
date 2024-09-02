import { useState } from "react";

export default function Item({ item, onDeleteItem, onToggleItem, onEditItem }) {
  // State to manage edit mode and the temporary value of the item description
  const [isEditing, setIsEditing] = useState(false);
  const [editDescription, setEditDescription] = useState(item.description);
  const [editQuantity, setEditQuantity] = useState(item.quantity);
  const [editUnitPrice, setEditUnitPrice] = useState(item.unitPrice);

  const calculatedAmount = editQuantity * editUnitPrice;

  // Handle the input changes for editing the item
  const handleEditChange = (event) => {
    const { name, value } = event.target;
    if (name === "description") setEditDescription(value);
    else if (name === "quantity") setEditQuantity(value);
    else if (name === "unitPrice") setEditUnitPrice(value);
  };

  // Toggle edit mode and save changes if exiting edit mode
  const handleEditToggle = () => {
    if (isEditing) {
      onEditItem(item.id, {
        description: editDescription,
        quantity: editQuantity,
        unitPrice: editUnitPrice,
        amount: calculatedAmount,
      });
    }
    setIsEditing(!isEditing);
  };

  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      {isEditing ? (
        <span>
          <input
            type="text"
            name="quantity"
            value={editQuantity}
            onChange={handleEditChange}
            style={{ width: "50" }}
          />
          <input
            type="text"
            name="description"
            value={editDescription}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="unitPrice"
            value={editUnitPrice}
            onChange={handleEditChange}
            style={{ width: "50" }}
          />
        </span>
      ) : (
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description} - {item.amount}
        </span>
      )}

      <button onClick={handleEditToggle}>{isEditing ? "💾" : "📝"}</button>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
