import React, { FC, useContext, useState } from 'react'
import AppContext from '../../../context'
import { ICard } from '../../../types/types'
import './buttonBasket.scss'

export interface ButtonBasketProps {
  card: ICard
}

const ButtonBasket: FC<ButtonBasketProps> = ({ card }) => {
  

  const { cardItemBasket, onAddCardBasket } = useContext(AppContext)

  let basketBtn = false
  if (cardItemBasket.find((item) => item.barcode === card.barcode)) {
  
    basketBtn = true
  }

  const [basketButton, setBasketButton] = useState(basketBtn)



  if (cardItemBasket.find((item) => item.barcode === card.barcode)) {

  }

  return (
    <button
      className={
        basketButton ? 'button button-close' : 'button'
      }
      onClick={() => {
        setBasketButton(!basketButton)
        onAddCardBasket(card)
      }}
    >
      {basketButton ? (
        <>Убрать из корзины</>
      ) : (
        <>
          В КОРЗИНУ <img src={process.env.PUBLIC_URL + "img/basket-white.svg"} alt="" />
        </>
      )}
    </button>
  )
}

export default ButtonBasket
