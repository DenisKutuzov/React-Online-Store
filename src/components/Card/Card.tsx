import React, { FC } from 'react'
import { ICard } from '../../types/types'
import { useNavigate } from 'react-router-dom'
import './card.scss'
import ButtonBasket from '../UI/ButtonBasket/ButtonBasket'

interface CardProps {
  card: ICard
  posts : ICard[]
  setPosts : (a : any) => void
}

const Card: FC<CardProps> = ({ card, posts, setPosts }) => {
  // const [basketButton, setBasketButton] = useState(false)

  // const { onAddCardBasket } = useContext(AppContext)

  const navigate = useNavigate()

  const removeCard = (id : number) => {

   let newArrayCards =  posts.filter((card) => card.id !== id)
    setPosts(newArrayCards)
    // setPosts((prev: any) => [...prev, newCard])
    // console.log(newCard)
    localStorage.setItem('card', JSON.stringify(newArrayCards))
  }

  // console.log(navigate)
  return (
    <div className="card">
      <button className='card__btnremove' onClick={() => removeCard(card.id)}>Удалить</button>
      <img src={card.urlImg} alt="" className="card__urlimg" />
      <p className="card__type">
        <img src={card.type} alt="" />
        450 мл
      </p>
      <p
        className="card__title"
        onClick={() => navigate(`/catalog/${card.barcode}`)}
      >
        <span></span> {card.title}
      </p>
      <p className="card__barcode">
        Штрихкод: <b>{card.barcode}</b>
      </p>
      <p className="card__manufacturer">
        Производитель: <b>{card.manufacturer}</b>
      </p>
      <p className="card__brand">
        Бренд: <b>{card.brand}</b>
      </p>
      <div className="card__bottom">
        <p className="card__price">{card.price + ' ₸'}</p>
        <ButtonBasket card={card}/>
       
      </div>
    </div>
  )
}

export default Card