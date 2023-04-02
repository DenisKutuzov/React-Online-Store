import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ButtonBasket from '../../components/UI/ButtonBasket/ButtonBasket'
import Counter from '../../components/UI/Counter/Counter'
import cards from '../../JSON/json'
import './cardPages.scss'

const CardPages = () => {
  // const [basketButton, setBasketButton] = useState(false)

  const [description, setDescription] = useState(false)

  const params = useParams()
  // console.log(params)

  // находим карточку по штрихкоду
  const searchTerm = params.baracode
  const card = cards.filter((card) => card.barcode.toString() === searchTerm)
  // console.log(card)

  return (
    <>
      {card.map((card, indx) => (
        <div className="cardpages" key={indx}>
          <img src={card.urlImg} alt="" className="cardpages__img" />
          <div className="cardpages__right">
            <p className="cardpages__availability">В наличие</p>
            <p className="cardpages__title">
              <span style={{ fontWeight: '800' }}>{card.brand}</span>
              {card.title}
            </p>
            <p className="card__type">
              <img src={card.type} style={{ opacity: '0.2' }} alt="" />
              450 мл
            </p>
            <div className="cardpages__group">
              <p className="cardpages__price">{card?.price} ₸</p>
           
           <Counter card={card} />
              <ButtonBasket card={card} />
              {/* <button className="cardpages__basket">
          В корзину <img src="/img/basket-white.svg" alt="basket" />
        </button> */}
            </div>
            <div className="pricelist">
              <button className="pricelist__share">
                <img src="/img/share.svg" alt="share" />
              </button>
              <div className="pricelist__block">
                <p className="pricelist__text">
                  При покупке от <b>10 000 ₸</b> бесплатная доставка по
                  Кокчетаву и области
                </p>
              </div>
              <button className="pricelist__btn">
                Прайс-лист <img src="/img/priceList.svg" alt="priceList" />
              </button>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                marginBottom: '30px',
              }}
            >
              <p className="cardpages__text">
                Производитель: <b>{card?.manufacturer}</b>
              </p>
              <p className="cardpages__text">
                Бренд: <b>{card?.brand}</b>
              </p>
              <p className="cardpages__text">
                Артикул: <b>460404</b>
              </p>
              <p className="cardpages__text">
                Штрихкод:: <b>{card?.barcode}</b>
              </p>
              <p className="cardpages__text">
                Размеры коробки(Д*Ш*В): <b>10х10х10</b>
              </p>
              <p className="cardpages__text">
                Вес коробки: <b>1020 г</b>
              </p>
            </div>
            <div className="description">
              <button
                className="description__btn"
                onClick={() => setDescription(!description)}
              >
                Описание
                <img
                  src="/img/checkbox-img.svg"
                  alt=""
                  className="checkbox__img"
                />
              </button>
              {description && (
                <div className="description__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam interdum ut justo, vestibulum sagittis iaculis iaculis.
                  Quis mattis vulputate feugiat massa vestibulum duis. Faucibus
                  consectetur aliquet sed pellentesque consequat consectetur
                  congue mauris venenatis. Nunc elit, dignissim sed nulla
                  ullamcorper enim, malesuada.
                </div>
              )}
              <div className="description__br"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CardPages