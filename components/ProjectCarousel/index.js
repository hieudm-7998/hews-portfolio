"use client";

import ImageCarousel from "@/components/ImageCarousel";

const ProjectCarousel = ({ company, color }) => {
  const Coinfo = [
    {
      src: "/projects/coinfo/1.png",
    },
    {
      src: "/projects/coinfo/2.png",
    },
    {
      src: "/projects/coinfo/3.png",
    },
    {
      src: "/projects/coinfo/4.png",
    },
    {
      src: "/projects/coinfo/5.png",
    },
  ];

  const Corsair = [
    {
      src: "/projects/corsair/1.png",
    },
    {
      src: "/projects/corsair/2.png",
    },
    {
      src: "/projects/corsair/3.png",
    },
    {
      src: "/projects/corsair/4.png",
    },
    {
      src: "/projects/corsair/5.png",
    },
  ];

  const Smartbox = [
    {
      src: "/projects/smartbox/1.png",
    },
    {
      src: "/projects/smartbox/2.png",
    },
    {
      src: "/projects/smartbox/3.png",
    },
    {
      src: "/projects/smartbox/4.png",
    },
    {
      src: "/projects/smartbox/5.png",
    },
  ];

  const changeCompany = (company) => {
    switch (company) {
      case "Coinfo":
        return Coinfo;
        break;
      case "Corsair":
        return Corsair;
        break;
      case "Smartbox":
        return Smartbox;
        break;
      default:
        return Coinfo;
        break;
    }
  };

  return (
    <ImageCarousel
      images={changeCompany(company)}
      company={company}
      color={color}
    />
  );
};

export default ProjectCarousel;
