import { FC, useState } from 'react'
import { ICard } from '../../../types/types'
import { useNavigate } from 'react-router-dom'
import './card.scss'
import ButtonBasket from '../../UI/ButtonBasket/ButtonBasket'
import ChangeCard from '../../ChangeCard/ChangeCard'
import homePage from '../../../homePage'

interface CardProps {
  card: ICard
  posts: ICard[]
  setPosts: (a: any) => void
}

const Card: FC<CardProps> = ({ card, posts, setPosts }) => {

  

  const navigate = useNavigate()

  const [change, setChange] = useState(true)

  const removeCard = (id: number) => {
    let newArrayCards = posts.filter((card) => card.id !== id)
    setPosts(newArrayCards)

    localStorage.setItem('card', JSON.stringify(newArrayCards))
  }

  return (
    <div className="card">
      <ChangeCard
        card={card}
        change={change}
        setChange={setChange}
        setPosts={setPosts}
      />

      <div style={{ display: 'flex' }}>
        <button className="card__btnchange" onClick={() => setChange(false)}>
          Изменить
        </button>
        <button className="card__btnremove" onClick={() => removeCard(card.id)}>
          Удалить
        </button>
      </div>
      <img src={card.urlImg.includes('https://') ? card.urlImg : homePage + card.urlImg} alt="card" className="card__urlimg" />
      <p className="card__type">
        <img src={homePage + card.type} alt="type" />
        450 мл
      </p>
      <p
        className="card__title"
        data-testid="card-link"
        onClick={() => navigate(`/catalog/${card.barcode}`)}
      >
        <span style={{fontWeight : '700'}}>{card.brand}</span> {card.title}
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
        <ButtonBasket card={card} />
      </div>
    </div>
  )
}

export default Card
