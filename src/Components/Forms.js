import { useState } from "react";

export function Forms({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) {
      alert("plase enter description...");
      return;
    }
    const newItem = { description, quantity, id: Date.now(), packing: false };
    onAddItem(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="forms" onSubmit={handleSubmit}>
      <span>What do you need for your trip?</span>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter.."
        value={description}
        onChange={(e) => setDescription(e.target.value)} />
      <button>Add</button>
    </form>
  );
}
