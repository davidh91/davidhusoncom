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
      setWorkItem("music");
    }
    if (isVisible(filmElemRef.current)) {
      setWorkItem("film");
    }
    if (isVisible(otherElemRef.current)) {
      setWorkItem("other");
    }
  }, [setWorkItem]);

  useEffect(() => {
    checkVisibilty();
  }, [checkVisibilty, trigger]);

  const musicItems = galleryData
    .filter((item) => item.type === "music")
    .map((item, i) => {
      return <Card key={i} item={item} />;
    });

  const filmItems = galleryData
    .filter((item) => item.type === "film")
    .map((item, i) => {
      return <Card key={i} item={item} />;
    });

  const otherItems = galleryData
    .filter((item) => item.type === "other")
    .map((item, i) => {
      return <Card key={i} item={item} />;
    });

  return (
    <div id="gallery-container" className="relative h-full">
      <div>
        <div
          id="music-label"
          ref={musicElemRef}
          className="opacity-0 lg:opacity-100 sticky top-[2.625rem] w-fit left-1/2 translate-x-[18vw] xl:translate-x-[14vw]  2xl:translate-x-[12vw]"
        >
          Music
        </div>
        <div className="flex flex-col w-full items-center" id="music">
          {musicItems}
        </div>
      </div>
      <div>
        <div
          id="film-label"
          ref={filmElemRef}
          className="opacity-0 lg:opacity-100 sticky top-[2.625rem] w-fit left-1/2 translate-x-[18vw] xl:translate-x-[14vw]  2xl:translate-x-[12vw]"
        >
          Film
        </div>
        <div className="flex flex-col w-full items-center" id="film">
          {filmItems}
        </div>
      </div>
      <div>
        <div
          id="other-label"
          ref={otherElemRef}
          className="opacity-0 lg:opacity-100 sticky top-[2.625rem] w-fit left-1/2 translate-x-[18vw] xl:translate-x-[14vw]  2xl:translate-x-[12vw]"
        >
          Other
        </div>
        <div className="flex flex-col w-full items-center" id="other">
          {otherItems}
          <div className="p-0 md:p-12 md:px-24 mb-44 lg:mb-64 flex flex-col gap-2 justify-center snap-start">
            <div className="w-full mx-auto pb-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
