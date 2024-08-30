import React from "react";

export const Categories = (params) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые"];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
