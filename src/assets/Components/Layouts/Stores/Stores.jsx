import React from 'react'
import { ImageStores } from '../../UI/ImageStores/ImageStores'
import { Tittle } from '../../UI/Tittle/Tittle'
import './stores.css'

export const Stores = () => {
  return (
    <>
  <div className="containerBox">
    <div className="containerTittle">
    <Tittle text="Tiendas Oficiales"/>
    </div>
    <div className="containerStores">
    <ImageStores style="storesImage" src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677774590/logo_ngc0yh.png"/>
    <ImageStores style="storesImage" src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677849076/1_iavpbg.png"/>
    <ImageStores style="storesImage" src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677849128/2_vwj33h.png"/>
    <ImageStores style="storesImage" src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677849461/3_grsdkc.jpg"/>
    <ImageStores style="storesImage" src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677849697/7_gwafs0.png"/>
    <ImageStores style="storesImage" src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677849609/5_ekdcj4.jpg"/>
    <ImageStores style="storesImage" src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677849507/4_mowr3w.png"/>

    </div>
    </div>
    </>
  )
}


