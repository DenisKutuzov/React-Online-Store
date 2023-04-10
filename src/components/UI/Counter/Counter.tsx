import { FC, useContext} from 'react'
import AppContext from '../../../context'
import { ICard } from '../../../types/types'

export interface CounterProps {
  card: ICard
 
}

const Counter: FC<CounterProps> = ({  card, }) => {
  const {setCardItemBasket, setPosts} = useContext(AppContext)


  const onPlus = (obj: ICard) => {
    const countcard = ++obj.counter

    setCardItemBasket((card : ICard[]) => {
      console.log(obj.id)
      return card.map((product) => {
        if (product.id === obj.id) {
          console.log(`${product.counter} + 1 это счетчик card`)
          return {
            ...product,
            counter: countcard,
          }
        }
        return product
      })
    })
    setPosts((card: ICard[]) => {
      return card.map((product) => {
        if (product.id === obj.id) {
          console.log(`${product.counter} + 1 это счетчик basket`)
          return {
            ...product,
            counter: countcard,
          }
        }
        return product
      })
    })
  }

  const onMin = (obj: ICard) => {
    const countcard = --obj.counter

    setCardItemBasket((card: any[]) => {
      return card.map((product) => {
        if (product.id === obj.id) {
          return {
            ...product,
            counter: countcard - 1 > 0 ? countcard : 1,
          }
        }
        return product
      })
    })
    setPosts((card: any[]) => {
      return card.map((product) => {
        if (product.id === obj.id) {
          return {
            ...product,
            counter: product.counter - 1 > 1 ? --product.counter : 1,
          }
        }
        return product
      })
    })
  }





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
