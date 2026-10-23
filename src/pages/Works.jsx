import React from "react";
import Gallery from "../components/Gallery";
import solea_cover from "../assets/images/solea_cover.jpg";
import bendit_cover from "../assets/images/letmebend_cover.jpg";
import elviento_cover from "../assets/images/comoelviento_cover.jpg";
import changes_cover from "../assets/images/changes_cover.jpg";
import alamillo_cover from "../assets/images/alamillo_cover.jpg";
import oasis_cover from "../assets/images/oasis_cover.jpg";
import comovideo_cover from "../assets/images/comovideo_cover.jpg";
import osa_cover from "../assets/images/osa_cover.jpg";
import sunrise_cover from "../assets/images/sunrise_cover.jpg";
import AnimatedLayout from "../layouts/AnimatedLayout";

const Works = () => {
  const galleryData = [
    {
      title: "Let me bend it for you (2023)",
      text: "EP with genre-bending Spanish guitar music",
      image: bendit_cover,
      type: "music",
      link: "https://open.spotify.com/album/3Vs1DcVKH9kGMKktfuqY7E?si=jxss9nVPR26jc8NNRb6Msw",
    },
    {
      title: "Como el Viento (2022)",
      text: "Flamenco drill project feat. Antonio Moreno Glazkov",
      image: elviento_cover,
      type: "music",
      link: "https://open.spotify.com/album/6lgLW1Kg42WEnpBcBcxrDe?si=BTNf9QIhSD2C4sWni8XA_w",
    },
    {
      title: "Changes (2024)",
      text: "Single",
      image: changes_cover,
      type: "music",
      link: "https://open.spotify.com/track/4ScGL3cbRM1pE5tYLmhPpQ?si=b25b461579dc4c36",
    },
    {
      title: "Alamillo (2024)",
      text: "Single",
      image: alamillo_cover,
      type: "music",
      link: "https://open.spotify.com/track/47nSmzwm5M3KOkF5i9zeKd?si=8ad65e56c9044994",
    },
    {
      title: "Solea (2023)",
      text: "A short flamenco fusion film",
      image: solea_cover,
      type: "film",
      link: "https://www.youtube.com/watch?v=3eD7IRN5XXw&feature=youtu.be",
    },
    {
      title: "Oasis (2024)",
      text: "He who sows hurry reaps indigestion",
      image: oasis_cover,
      type: "film",
      link: "https://www.youtube.com/watch?v=16q4Ev89xrE",
    },
    {
      title: "Como el Viento (2024)",
      text: "Music Video",
      image: comovideo_cover,
      type: "film",
      link: "https://www.youtube.com/watch?v=y1ehP3_Q6Hg",
    },
    {
      title: "Open Stage Amsterdam (2019 - present)",
      text: "A seasonal event celebrating all performance arts",
      image: osa_cover,
      type: "other",
      link: "https://openstage.amsterdam",
    },
    {
      title: "Sunrise Cinema (2024)",
      text: "Wake up with indie shorts",
      image: sunrise_cover,
      type: "other",
      link: "https://www.instagram.com/soleafilm/p/C9FVkJMtXS3/?img_index=2",
    },
  ];

  return (
    <AnimatedLayout>
      <Gallery galleryData={galleryData} />
    </AnimatedLayout>
  );
};

export default Works;
