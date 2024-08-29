import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="284" rx="9" ry="9" width="270" height="21" />
    <circle cx="133" cy="133" r="133" />
    <rect x="118" y="425" rx="29" ry="29" width="152" height="45" />
    <rect x="0" y="321" rx="20" ry="20" width="280" height="88" />
    <rect x="0" y="435" rx="15" ry="15" width="95" height="30" />
  </ContentLoader>
);

export default Skeleton;
