import { FC, useContext} from 'react'
import AppContext from '../../../context'
import { ICard } from '../../../types/types'

export interface CounterProps {
  card: ICard
 
}

const Counter: FC<CounterProps> = ({  card, }) => {
  const { onPlus, onMin} = useContext(AppContext)


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
