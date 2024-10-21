import React, { useCallback, useContext, useEffect, useRef } from "react";
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

  const checkVisibilty = useCallback(() => {
    if (isVisible(musicElemRef.current)) {
      console.log("music visible");
      setWorkItem("music");
    }
    if (isVisible(filmElemRef.current)) {
      console.log("film is visible");
      setWorkItem("film");
    }
    if (isVisible(otherElemRef.current)) {
      console.log("other is visible");
      setWorkItem("other");
    }
  }, [setWorkItem]);

  useEffect(() => {
    console.log("triggered and check visibilty", trigger);
    checkVisibilty();
  }, [checkVisibilty, trigger]);

  const data = galleryData.map((item, i) => {
    return <Card key={i} item={item} />;
  });

  return (
    <div id="gallery-container" className="relative h-full">
      <div>
        <div
          id="music-label"
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
          id="film-label"
          ref={filmElemRef}
          className="sticky top-[2.625rem] lg:mr-12 2xl:mr-6 float-right"
        >
          Film
        </div>
        <div className="flex flex-col w-full items-center" id="film">
          {data}
        </div>
      </div>
      <div>
        <div
          id="other-label"
          ref={otherElemRef}
          className="sticky top-[2.625rem] lg:mr-12 2xl:mr-6 float-right"
        >
          Other
        </div>
        <div className="flex flex-col w-full items-center" id="other">
          {data}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
