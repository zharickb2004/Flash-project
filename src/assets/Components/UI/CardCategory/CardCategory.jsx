import React from 'react'
import { ImageCarousel } from '../ImageCarousel/ImageCarousel'
import { Tittle } from '../Tittle/Tittle'

export const CardCategory = () => {
  return (
    <>
    <div className="cardCategory">
    <ImageCarousel style="imageCategory" src="https://res.cloudinary.com/deoe4gcly/image/upload/v1678116095/111_dydgav.jpg"/>
    <Tittle text="Skin Care"/>
    </div>
    </>
  )
}
