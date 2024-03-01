import { useState } from "react";

export function PackingList({ items, onRemoveItem, onPackedItem, onClearList }) {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems;

  if (sortBy == 'input') sortedItems = items;
  if (sortBy == 'description') {
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy == 'packed') {
    sortedItems = items.slice().sort((a, b) => +a.packing - +b.packing);
  }
  return (
    <div className="main">
      <ul>
        {sortedItems.map((list) => {
          return (
            <li key={list.id}>
              <input type="checkbox" onChange={() => onPackedItem(list.id)} />
              <span
                style={list.packing ? { textDecoration: "line-through" } : null}
              >
                {list.quantity} {list.description}
              </span>
              <span onClick={() => onRemoveItem(list.id)}>❌</span>
            </li>
          );
        })}
      </ul>
      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input" key="">Sort by input order</option>
          <option value="description" key="">Sort by description</option>
          <option value="packed" key="">Sort by Packed Status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
