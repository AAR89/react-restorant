import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";

export const Home = () => {
  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sortType.sortProperty.replace("-", "");

    // {
    //   "id": 0,
    //   "imageUrl": "https://static.dominopizza.ru/images/8307-551-pepperoni-ranc-at-20-sm-600.png",
    //   "title": "Пепперони Ранч",
    //   "types": [
    //     0,
    //     1
    //   ],
    //   "sizes": [
    //     26,
    //     30,
    //     40
    //   ],
    //   "price": 429,
    //   "category": 4,
    //   "rating": 4
    // },
    // {
    //   "id": 1,
    //   "imageUrl": "https://static.dominopizza.ru/images/7302-839-4-syra-at-20-sm-600.png",
    //   "title": "4 сыра",
    //   "types": [
    //     0
    //   ],
    //   "sizes": [
    //     26,
    //     40
    //   ],
    //   "price": 679,
    //   "category": 2,
    //   "rating": 6
    // },
    // {
    //   "id": 2,
    //   "imageUrl": "https://static.dominopizza.ru/images/3836-569-ciken-bbq-at-20-sm-600.png",
    //   "title": "Цыпленок BBQ",
    //   "types": [
    //     0
    //   ],
    //   "sizes": [
    //     26,
    //     40
    //   ],
    //   "price": 499,
    //   "category": 3,
    //   "rating": 4
    // },
    // {
    //   "id": 3,
    //   "imageUrl": "https://static.dominopizza.ru/images/6617-495-karbonara-at-20-sm-600.png",
    //   "title": "Карбонара",
    //   "types": [
    //     1
    //   ],
    //   "sizes": [
    //     26,
    //     30,
    //     40
    //   ],
    //   "price": 569,
    //   "category": 1,
    //   "rating": 2
    // },
    // {
    //   "id": 4,
    //   "imageUrl": "https://static.dominopizza.ru/images/7455-259-alfredo-600.png",
    //   "title": "Альфредо",
    //   "types": [
    //     0,
    //     1
    //   ],
    //   "sizes": [
    //     26,
    //     30,
    //     40
    //   ],
    //   "price": 569,
    //   "category": 1,
    //   "rating": 8
    // },
    // {
    //   "id": 5,
    //   "imageUrl": "https://static.dominopizza.ru/images/3362-261-miasnaia-salsa-600.png",
    //   "title": "Мясная сальса",
    //   "types": [
    //     0
    //   ],
    //   "sizes": [
    //     30,
    //     40
    //   ],
    //   "price": 679,
    //   "category": 4,
    //   "rating": 2
    // },
    // {
    //   "id": 6,
    //   "imageUrl": "https://static.dominopizza.ru/images/8669-1321-picca-s-frikadelkami-i-gribnym-sousom-20-sm-600.png",
    //   "title": "Пицца с фрикадельками",
    //   "types": [
    //     0,
    //     1
    //   ],
    //   "sizes": [
    //     26,
    //     30,
    //     40
    //   ],
    //   "price": 429,
    //   "category": 1,
    //   "rating": 9
    // },
    // {
    //   "id": 7,
    //   "imageUrl": "https://static.dominopizza.ru/images/5760-509-margarita-at-20-sm-600.png",
    //   "title": "Маргарита",
    //   "types": [
    //     0,
    //     1
    //   ],
    //   "sizes": [
    //     26,
    //     30,
    //     40
    //   ],
    //   "price": 289,
    //   "category": 2,
    //   "rating": 10
    // },
    // {
    //   "id": 8,
    //   "imageUrl": "https://static.dominopizza.ru/images/6508-530-oxotnicia-at-20-sm-600.png",
    //   "title": "Охотничья",
    //   "types": [
    //     0,
    //     1
    //   ],
    //   "sizes": [
    //     26,
    //     30,
    //     40
    //   ],
    //   "price": 499,
    //   "category": 1,
    //   "rating": 10
    // },
    // {
    //   "id": 9,
    //   "imageUrl": "https://static.dominopizza.ru/images/1285-1516-picca-kapreze-at-28-sm-600.png",
    //   "title": "Пицца капрезе 🌱",
    //   "types": [
    //     0,
    //     1
    //   ],
    //   "sizes": [
    //     26,
    //     30,
    //     40
    //   ],
    //   "price": 859,
    //   "category": 2,
    //   "rating": 7
    // }

    fetch(
      `https://66d089fb181d059277def8f2.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items
    // .filter((obj) => {
    //   return obj.title.toLowerCase().includes(searchValue.toLowerCase());
    // })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories
            value={categoryId}
            onChangeCategory={(index) => {
              setCategoryId(index);
            }}
          />
          <Sort
            value={sortType}
            onChangeSort={(index) => {
              setSortType(index);
            }}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeletons : pizzas}</div>
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </div>
  );
};

export default Home;
