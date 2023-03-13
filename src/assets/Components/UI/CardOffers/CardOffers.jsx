import React from "react";
import { OffersDescription } from "../OffersDescription/OffersDescription";
import { OffersImage } from "../OffersImage/OffersImage";
import { OffersNewPrice } from "../OffersNewPrice/OffersNewPrice";
import { OffersPrice } from "../OffersPrice/OffersPrice";

export const CardOffers = () => {
  return (
    <div className="offers">
      <OffersImage
        style="imageOffers"
        src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677851897/a_orzn6x.jpg"
      />
      <div className="description">
        <OffersDescription
          style="textDescription"
          text="Rodillo masajeador de Jade y cuarzo rosa, juego de raspador Gouache, piedra de cristal Natural."
        />
        <div className="prices">
        <OffersPrice style="price" text="$15.000" />
        <OffersNewPrice style="newPrice" text="$10.000" />
        </div>
      </div>
    </div>
  );
};
