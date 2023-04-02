import React, { FC, useContext, useState } from 'react'
import AppContext from '../../../context'
import { ICard } from '../../../types/types'

export interface CounterProps {
  card: ICard
  // counter: any
  // setCounter: (a: any) => void
  // id : number
  // increase : (id : number) => void
}

const Counter: FC<CounterProps> = ({  card, }) => {
  const { cardItemBasket, onRemoveCardBasket,  increase , setAllPrice, allPrice, onPlus, onMin} = useContext(AppContext)
// console.log(card)
  // let counterCard = 1
  // let basketBtn = false

  // const [counter, setCounter] = useState(1)


  // const onPlus = () => {
  //   console.log(counter)
  //   console.log(card)
  //   // if (cardItemBasket.find((item) => item.barcode !== card.barcode)) {
  //   //   setCounter(1)
  //   //   console.log(32313)
  //   // }
    
  //   setCounter(counter + 1)
  //   // setAllPrice()
  // }

  // const onMin = () => {
  //   if (counter === 1) {
  //     onRemoveCardBasket(card)
  //   } else {
  //     setCounter(counter - 1)
  //   }
  // }

  // const countExamination = () => {
  //   if (cardItemBasket.find((item) => item.barcode !== card.barcode)) {
  //     // setCounter(counter + 2)
  //     return 2
  //   }
  // }

  return (
    <div
      style={{
        display: 'flex',
        gap: '19px',
        alignItems: 'center',
      }}
    >
      <button className="cardpages__btn" onClick={() =>  onMin(card)}>
        -
      </button>
      <p>{card.counter}</p>
      <button className="cardpages__btn" onClick={() => onPlus(card)}>
        +
      </button>
      {/* <p className="cardpages__price">{card.price * counter } ₸</p> */}
    </div>
  )
}

export default Counter
