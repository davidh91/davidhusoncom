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
  }, [trigger]);

  const checkVisibilty = () => {
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
  };

  const data = galleryData.map((item, i) => {
    return <Card key={i} item={item} />;
  });

  return (
    <div id="gallery-container" className="relative">
      <div>
        <div ref={musicElemRef} className="sticky top-[2.625rem] float-right">
          Music
        </div>
        <div id="music">{data}</div>
      </div>
      <div>
        <div ref={filmElemRef} className="sticky top-[2.625rem] float-right">
          Film
        </div>
        <div id="film">{data}</div>
      </div>
      <div>
        <div ref={otherElemRef} className="sticky top-[2.625rem] float-right">
          Other
        </div>
        <div id="other">{data}</div>
      </div>
    </div>
  );
};

export default Gallery;
