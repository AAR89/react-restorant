import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="25" y="275" rx="10" ry="10" width="230" height="21" />
    <circle cx="140" cy="135" r="120" />
    <rect x="130" y="420" rx="20" ry="20" width="150" height="43" />
    <rect x="5" y="320" rx="10" ry="10" width="270" height="76" />
    <rect x="5" y="425" rx="10" ry="10" width="90" height="30" />
  </ContentLoader>
);

export default Skeleton;
