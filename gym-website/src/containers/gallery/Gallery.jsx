import React from 'react';
import ImageGallery from "react-image-gallery";
import Gallery1 from"../../assets/image-gallery/gettyimages-1183038884-612x612.jpg";
import Gallery2 from"../../assets/image-gallery/istockphoto-1322158059-612x612.jpg";
import Gallery3 from "../../assets/image-gallery/photo-1534438327276-14e5300c3a48.jpg";
import './gallery.css';
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery() {
  const images = [
    {
      original: Gallery1,
    },
    {
      original: Gallery2,
    },
    {
      original: Gallery3,
    }
  ];

  return (
    <div className="Gallery-Container">
      <div className="Gallery-Text">
        <h2>View our Gym</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum velit quam, tincidunt non metus non, sodales volutpat lorem. Morbi ac viverra mauris. Mauris pretium eu neque eget elementum. Aenean sit.</p>
      </div>
      <ImageGallery
        items={images}
        showPlayButton={true}
        showFullscreenButton={true}
        slideInterval={1000}
        slideOnThumbnailOver={true}
        showIndex={true}
        onPlay={() => {
          alert("slideshow is now playing!");
        }}
      />
    </div>
  );
}



