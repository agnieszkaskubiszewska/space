import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "gallery/nebula1.jpg",

  },
  {
    original: "gallery/nebula2.jpg",

  },
  {
    original: "gallery/nebula3.jpg",

  },
];

const MyGallery = () => {
  return <ImageGallery items={images} />;
};

export default MyGallery;
