import React from "react";

export default function Stats({ items }) {
  const totalPrice = items.reduce(
    (total, item) => total + Number(item.amount),
    0
  );

  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your shopping list 🛒</em>{" "}
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ready!"
          : `🛒 You have ${numItems} items on your list, and you already found
          ${numPacked} (${percentage}%)`}{" "}
        (Predicted total: <strong>${totalPrice}</strong>)
      </em>
    </footer>
  );
}
