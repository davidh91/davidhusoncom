import React, { useContext, useEffect, useRef } from "react";
import Card from "./Card";
import isVisible from "../utils/isVisible";
import { TriggerContext } from "..";
import { WorkContext } from "..";

const Gallery = ({ galleryData }) => {
  const musicElemRef = useRef();
  const filmElemRef = useRef();
  const otherElemRef = useRef();

  const [workItem, setWorkItem] = useContext(WorkContext);
  const [trigger] = useContext(TriggerContext);

  useEffect(() => {
    if (trigger > 0) {
      checkVisibilty();
    }
    console.log(trigger);
  });

  const checkVisibilty = () => {
    if (isVisible(musicElemRef.current)) {
      console.log("music visible");
      setWorkItem("music");
    } else if (isVisible(filmElemRef.current)) {
      console.log("film is visible");
      setWorkItem("film");
    } else if (isVisible(otherElemRef.current)) {
      console.log("other is visible");
      console.log(workItem);
      setWorkItem("other");
    }
  };

  const data = galleryData.map((item, i) => {
    return <Card key={i} item={item} />;
  });

  return (
    <div id="gallery-container" className="relative h-full">
      <div>
        <div
          ref={musicElemRef}
          className="sticky top-[2.625rem] lg:mr-12 2xl:mr-6 float-right"
        >
          Music
        </div>
        <div className="flex flex-col w-full items-center" id="music">
          {data}
        </div>
      </div>
      <div>
        <div
          ref={filmElemRef}
          className="sticky top-[2.625rem] lg:mr-8 xl:mr-0 float-right"
        >
          Film
        </div>
        <div id="film">{data}</div>
      </div>
      <div>
        <div
          ref={otherElemRef}
          className="sticky top-[2.625rem] lg:mr-8 xl:mr-0 float-right"
        >
          Other
        </div>
        <div id="other">{data}</div>
      </div>
    </div>
  );
};

export default Gallery;
