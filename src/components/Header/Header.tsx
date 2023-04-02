import React, { FC, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../../context'
import './header.scss'

const Header: FC = () => {
  const { cardItemBasket, allPrice, setAllPrice } = useContext(AppContext)

  // console.log(onAddCardBasket)

  const navigate = useNavigate()
  setAllPrice(cardItemBasket.reduce((s, i) => (s = s + i.counter * i.price), 0))
  return (
    <header className="header">
      <div className="burger">
        <button className="burger__btn">
          <img src={process.env.PUBLIC_URL + '/img/burger-open.svg'} alt="" />
        </button>
      </div>
      <div className="header__top">
        <div className="header__adress">
          <img src={process.env.PUBLIC_URL + '/img/adress.svg'} alt="" />
          <div>
            <p className="adress__title">г. Кокчетав, ул. Ж. Ташенова 129Б</p>
            <p className="adress__text">(Рынок Восточный)</p>
          </div>
        </div>
        <div className="header__adress header__adress-last ">
          <img src={process.env.PUBLIC_URL + '/img/email.svg'} alt="" />
          <div>
            <p className="adress__title">opt.sultan@mail.ru </p>
            <p className="adress__text">На связи в любое время</p>
          </div>
        </div>
        <ul className="header__ul">
          <li className="header__li">
            <a className="header__link" href="#!">
              О компании
            </a>
          </li>
          <li className="header__li">
            <a className="header__link" href="#!">
              Доставка и оплата
            </a>
          </li>
          <li className="header__li">
            <a className="header__link" href="#!">
              Возврат
            </a>
          </li>
          <li className="header__li header__li-last">
            <a className="header__link" href="#!">
              Контакты
            </a>
          </li>
        </ul>
      </div>
      <div className="header__down">
        <img
          src={process.env.PUBLIC_URL + '/img/sultan-logo-header.svg'}
          alt="sultan"
        />
        <button className="header__catalog">
          Каталог
          <img src={process.env.PUBLIC_URL + '/img/catalog-btn.svg'} alt="" />
        </button>
        <form className="header__search">
          <input className="header__input" type="text" placeholder="Поиск..." />
          <button className="header__input-btn" type="submit">
            <img src={process.env.PUBLIC_URL + 'img/search.svg'} alt="" />
          </button>
        </form>
        <div className="header__call">
          <p className="header__number">+7 (777) 490-00-91</p>
          <p className="header__time">время работы: 9:00-20:00</p>
          <a className="header__" href="#!">
            Заказать звонок
          </a>
          <img src={process.env.PUBLIC_URL + 'img/Group101.svg'} alt="" />
        </div>
        <button className="header__price">
          Прайс-лист <img src="img/price-btn.svg" alt="" />
        </button>
        <div className="header__basket">
          <button onClick={() => navigate('/catalog/basket')}>
            <img src={process.env.PUBLIC_URL + '/img/basket.svg'} alt="" />
            <div className="header__counter">{cardItemBasket.length}</div>
          </button>
          <div>
            <p>Корзина</p>
            <span>{allPrice} ₸</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
