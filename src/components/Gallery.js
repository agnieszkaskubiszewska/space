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
  {
    original: "gallery/nebula4.jpg",

  },  
  {
    original: "gallery/nebula5.jpg",

  },  
  {
    original: "gallery/nebula6.jpg",

  },  
  {
    original: "gallery/nebula7.jpg",

  },
  {
    original: "gallery/nebula8.jpg",

  },
  {
    original: "gallery/nebula9.jpg",

  },
];

const MyGallery = () => {
  return <ImageGallery items={images} />;
};

export default MyGallery;
