import React, { useState } from "react";
import data from "./data";
import Categories from "./Categories";
import Menu from "./Menu";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [menuItem, setMenuItem] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItem(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItem(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItem={menuItem} />
      </section>
    </main>
  );
}

export default App;
