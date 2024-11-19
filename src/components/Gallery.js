import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/images/photo1.jpg",
    thumbnail: "/images/thumb1.jpg",
  },
  {
    original: "/images/photo2.jpg",
    thumbnail: "/images/thumb2.jpg",
  },
  {
    original: "/images/photo3.jpg",
    thumbnail: "/images/thumb3.jpg",
  },
];

const MyGallery = () => {
  return <ImageGallery items={images} />;
};

export default MyGallery;
