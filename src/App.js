import "./App.css";

import "./scss/app.scss";

import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import Skeleton from "./components/PizzaBlock/Skeleton";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://66d089fb181d059277def8f2.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Skeleton />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
