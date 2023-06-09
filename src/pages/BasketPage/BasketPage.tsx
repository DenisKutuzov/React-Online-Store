import { FC, useContext, useState } from 'react'
import Counter from '../../components/UI/Counter/Counter'
import MyModal from '../../components/UI/MyModal/MyModal'
import AppContext from '../../context'
import './basketPage.scss'
import homePage from '../../homePage'

const BasketPage: FC = () => {
  const { cardItemBasket, setCardItemBasket, onRemoveCardBasket, allPrice } =
    useContext(AppContext)

  console.log(cardItemBasket)
  const [modalBasket, setModalBasket] = useState(false)

  const checkout = () => {
    setModalBasket(!modalBasket)
    if (modalBasket === false) {
      setCardItemBasket([])
    }
  }
  console.log(4)
  return (
    <div className="basketpage" data-testid="basket-page">
      <h2>Корзина</h2>
      {modalBasket && <MyModal />}
      {cardItemBasket.length > 0 ? (
        <>
          {cardItemBasket.map((card) => (
            <div className="card-basket" key={card.id}>
              <div className='block__img' >
                <img
                  src={
                    card.urlImg.includes('https://')
                      ? card.urlImg
                      : homePage + card.urlImg
                  }
                  alt=""
                  className="card-basket__img"
                />
              </div>
              <div className="card-basket__group">
                <div style={{ display: 'flex' }}>
                  <img src={homePage + card.type} alt="" />
                  <p>{card.size}</p>
                </div>
                <p className="card-basket__title">{card.title}</p>
                <p className="card-basket__text">{card.description}</p>
              </div>
              <div className="card-basket__block">
                <div className="card-basket__br" />
                <Counter card={card} />
                <div className="card-basket__br" />
                <p className="cardpages__price">
                  {Number(card.price * card.counter).toFixed(2)} ₸
                </p>
                <div className="card-basket__br" />
                <button onClick={() => onRemoveCardBasket(card)}>
                  <img src={homePage + '/img/basket-basket.svg'} alt="basket" />
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
