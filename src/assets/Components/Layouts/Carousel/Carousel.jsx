import React from "react";
import { ImageCarousel } from "../../UI/ImageCarousel/ImageCarousel";
import "./carousel.css";

export const Carousel = () => {
  return (
    <>
      <div className="containerCarousel">
        <div className="firstCarousel">
          <ImageCarousel
            src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677770328/pp_ekmszg.png"
            style="images"
          />
        </div>
        <div className="secondCarousel">
          <ImageCarousel
            src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677770267/prin_xzjoad.png"
            style="images1"
          />
          <br/>
          <ImageCarousel
            src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677770326/p_jrmhdd.png"
            style="images1"
          />
        </div>
      </div>
    </>
  );
};
