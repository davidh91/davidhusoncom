import React from "react";
import Gallery from "../components/Gallery";
import solea_cover from "../assets/images/solea_cover.jpg";
import bendit_cover from "../assets/images/letmebend_cover.jpg";
import elviento_cover from "../assets/images/comoelviento_cover.jpg";
import AnimatedLayout from "../layouts/AnimatedLayout";
const Works = () => {
  const galleryData = [
    {
      title: "Solea (2023)",
      text: "A short flamenco fusion film",
      image: solea_cover,
      media: "film",
      link: "https://www.youtube.com/watch?v=3eD7IRN5XXw&feature=youtu.be",
    },
    {
      title: "Let me bend it for you (2023)",
      text: "EP with genre-bending Spanish guitar music",
      image: bendit_cover,
      media: "music",
      link: "https://open.spotify.com/album/3Vs1DcVKH9kGMKktfuqY7E?si=jxss9nVPR26jc8NNRb6Msw",
    },
    {
      title: "Como el Viento (2022)",
      text: "Flamenco drill project feat. Antonio Moreno Glazkov",
      image: elviento_cover,
      media: "music",
      link: "https://open.spotify.com/album/6lgLW1Kg42WEnpBcBcxrDe?si=BTNf9QIhSD2C4sWni8XA_w",
    },
    {
      title: "Como el Viento (2022)",
      text: "Flamenco drill project feat. Antonio Moreno Glazkov",
      image: elviento_cover,
      media: "music",
      link: "https://open.spotify.com/album/6lgLW1Kg42WEnpBcBcxrDe?si=BTNf9QIhSD2C4sWni8XA_w",
    },
    {
      title: "Como el Viento (2022)",
      text: "Flamenco drill project feat. Antonio Moreno Glazkov",
      image: elviento_cover,
      media: "music",
      link: "https://open.spotify.com/album/6lgLW1Kg42WEnpBcBcxrDe?si=BTNf9QIhSD2C4sWni8XA_w",
    },
  ];

  return (
    <AnimatedLayout>
      <Gallery galleryData={galleryData} />
    </AnimatedLayout>
  );
};

export default Works;
