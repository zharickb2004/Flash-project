import React from 'react'
import { CardOffers } from '../../UI/CardOffers/CardOffers'
import { Tittle } from '../../UI/Tittle/Tittle'

import './offers.css'

export const Offers = () => {
  return (
    <>
        <div className="boxOffers">
            <div className="tittleOffers">
                <Tittle style="offersTittle" text="OFERTAS TOP"/>
                    <div className="circle">
                      <div className="circle-b"></div>
                    </div>
                <span className='paylog'>
                  <div className="paylog1">
                  </div>
                </span>
            </div>
            <div className="offersContainer">
                <CardOffers />
                <CardOffers />
                <CardOffers />
                <CardOffers />
                <CardOffers />
            </div>
        </div>
    </>
  )
}


