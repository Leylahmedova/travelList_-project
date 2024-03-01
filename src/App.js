import { useState } from "react";
import "./App.css";
import { Logo } from "./Components/Logo";
import { Forms } from "./Components/Forms";
import { PackingList } from "./Components/PackingList";
import { Footer } from "./Components/Footer";

function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }
  function handleRemoveItem(id) {
    return setItems((items) => items.filter((item) => item.id !== id));
  }
  function handlePackedItem(id) {
    return setItems((items) =>
      items.map((item) => item.id == id ? { ...item, packing: !item.packing } : item
      )
    );
  }
  function handleClearList(){
    const check=window.confirm("Are you sure clear all list?")
    if (check) setItems([])
  }
  return (
    <div>
      <Logo />
      <Forms onAddItem={handleAddItem}/>
      <PackingList
        items={items}
        onRemoveItem={handleRemoveItem}
        onPackedItem={handlePackedItem}
        onClearList={handleClearList}
      />
      <Footer items={items}/>
    </div>
  );
}

export default App;
