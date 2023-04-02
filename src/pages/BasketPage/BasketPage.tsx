import { count } from 'console'
import { FC, useContext, useState } from 'react'
import Counter from '../../components/UI/Counter/Counter'
import MyModal from '../../components/UI/MyModal/MyModal'
import AppContext from '../../context'
import { ICard } from '../../types/types'
import './basketPage.scss'

const BasketPage: FC = () => {
  const { cardItemBasket, setCardItemBasket, onRemoveCardBasket, counter, setCounter, allPrice , setAllPrice} =
    useContext(AppContext)



    // const [counter, setCounter] = useState(1)

    // const increase = (id: any) => {
    //   console.log(id)

    // }

    

  const [modalBasket, setModalBasket] = useState(false)


  setAllPrice(  cardItemBasket.reduce((s, i) => s = s + (i.counter * i.price) , 0))

  const checkout = () => {
    setModalBasket(!modalBasket)
    setCardItemBasket([])
  }
console.log(4)
  return (
    <div className="basketpage">
      <h2>Корзина</h2>
      {modalBasket && <MyModal />}
      {cardItemBasket.length > 0 ? (
        <>
          {cardItemBasket.map((card) => (
            <div className="card-basket" key={card.barcode}>
              <img src={card.urlImg} alt="" className="card-basket__img" />
              <div className="card-basket__group">
                <div>
                  <img src={card.type} alt="" />
                  <p>{card.size}</p>
                </div>
                <p className="card-basket__title">{card.title}</p>
                <p className="card-basket__text">
                 {card.description}
                </p>
              </div>
              <div className="card-basket__block">
                <div className="card-basket__br" />
                <Counter card={card}    />
                <div className="card-basket__br" />
                <p className="cardpages__price">{card.price * card.counter } ₸</p>
                <div className="card-basket__br" />
                <button onClick={() => onRemoveCardBasket(card)}>
                  <img src="/img/basket-basket.svg" alt="basket" />
                </button>
              </div>
            </div>
          ))}
          <div className="order">
            <button className="order__btn" onClick={checkout}>
              Оформить заказ
            </button>
            <span className="order__price">{allPrice} ₸</span>
          </div>
        </>
      ) : (
        <div
          style={{
            margin: '100px 0',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <h4>Корзина пустая</h4>
        </div>
      )}
    </div>
  )
}

export default BasketPage
