import React from "react";
import Card from "./Card";

const Gallery = ({ galleryData }) => {
  const data = galleryData.map((item, i) => {
    return <Card key={i} item={item} />;
  });

  return (
    <div className="relative">
      <div>
        <div className="sticky top-[2.625rem] float-right">Music</div>
        <div id="music">{data}</div>
      </div>
      <div>
        <div className="sticky top-[2.625rem] float-right">Film</div>
        <div id="film">{data}</div>
      </div>
      <div>
        <div className="sticky top-[2.625rem] float-right">Other</div>
        <div id="other">{data}</div>
      </div>
    </div>
  );
};

export default Gallery;
