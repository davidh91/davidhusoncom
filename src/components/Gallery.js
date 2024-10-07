import React from "react";
import Card from "./Card";

const Gallery = ({ galleryData }) => {
  const data = galleryData.map((item, i) => {
    return <Card key={i} item={item} />;
  });

  return <div>{data}</div>;
};

export default Gallery;
