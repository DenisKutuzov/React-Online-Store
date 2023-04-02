import React, { FC, useContext, useState } from 'react'
import AppContext from '../../../context'
import { ICard } from '../../../types/types'

export interface ButtonBasketProps {
  card: ICard
}

const ButtonBasket: FC<ButtonBasketProps> = ({ card }) => {
  // console.log(22)

  const { cardItemBasket, onAddCardBasket } = useContext(AppContext)

  let basketBtn = false
  if (cardItemBasket.find((item) => item.barcode === card.barcode)) {
    // console.log(4234324)
    basketBtn = true
  }

  const [basketButton, setBasketButton] = useState(basketBtn)

  // console.log(cardItemBasket)

  if (cardItemBasket.find((item) => item.barcode === card.barcode)) {
    // console.log(4234324)
  }

  return (
    <button
      className={
        basketButton ? 'card__button card__button-close' : 'card__button'
      }
      onClick={() => {
        setBasketButton(!basketButton)
        onAddCardBasket(card)
      }}
    >
      {basketButton ? (
        <>Добавлено</>
      ) : (
        <>
          В КОРЗИНУ <img src="/img/basket-white.svg" alt="" />
        </>
      )}
    </button>
  )
}

export default ButtonBasket
