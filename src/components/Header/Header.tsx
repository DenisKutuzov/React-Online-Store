import { FC, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../../context'
import './header.scss'
import homePage from '../../homePage'

const Header: FC = () => {
  const { cardItemBasket, allPrice, setAllPrice } = useContext(AppContext)

  const [burger, setBurger] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setAllPrice(
      cardItemBasket.reduce((s, i) => (s = s + i.counter * i.price), 0)
    )
  }, [cardItemBasket, setAllPrice])
  //
  return (
    <header className="header ">
      {/* БУРГЕР */}
      <div className="burger wrapper">
        <div className="burger__top">
          <button className="burger__btn" onClick={() => setBurger(!burger)}>
            <img
              src={homePage + '/img/burger-open.svg'}
              alt="burger"
            />
          </button>
          <img
            className="butger__sultanlog"
            src={homePage + '/img/sultan-header-logo-mini.svg'}
            alt="sultan"
          />
          <div className="header__basket">
            <button onClick={() => navigate('/basket')}>
              <img
                src={homePage + '/img/basket.svg'}
                alt="basket"
              />
              <div className="header__counter">{cardItemBasket.length}</div>
            </button>
          </div>
        </div>
        <div className="burger__down">
          <button className="bugrer__catalog" onClick={() => navigate('/catalog')}>
            <img
              src={homePage + '/img/catalog-btn.svg'}
              alt="catalog"
            />
            Каталог
          </button>
          <div className="burger__br"></div>
          <form className="burger__search">
            <button className="burger__input">
              Поиск
              {/* <img src={process.env.PUBLIC_URL + 'img/search.svg'} alt="" /> */}
            </button>
          </form>
        </div>

        {burger && (
          <>
            <div className="burger__listtop">
              <div className="burger__adress">
                <img src={homePage + '/img/adress.svg'} alt="" />
                <div>
                  <p className="burger__title">
                    г. Кокчетав, ул. Ж. Ташенова 129Б
                  </p>
                  <p className="burger__text">(Рынок Восточный)</p>
                </div>
              </div>
              <div className="burger__adress burger__adress-last ">
                <img src={homePage + '/img/email.svg'} alt="" />
                <div>
                  <p className="burger__title">opt.sultan@mail.ru </p>
                  <p className="burger__text">На связи в любое время</p>
                </div>
              </div>
              <div className="header__adress">
                <img
                  src={homePage + '/img/logo-telefon.svg'}
                  alt=""
                />
                <p className="burger__title">
                  Отдел продаж
                  <br />
                  <span className="burger__text">+7 (777) 490-00-91 </span>
                </p>
              </div>
            </div>
            <div className="burger__listdown">
              <p className="listdown-menu">Меню сайта:</p>
              <p className="listdown-menu__link">О компании</p>
              <p className="listdown-menu__link">Доставка и оплата</p>
              <p className="listdown-menu__link">Возврат</p>
              <p className="listdown-menu__link">Контакты</p>
              <button className="header__price">
                Прайс-лист <img src={homePage + "/img/price-btn.svg"} alt="pryceList" />
              </button>
            </div>
          </>
        )}
      </div>
      {/* БУРГЕР */}

      <div className="header__top wrapper">
        <div className="header__adress">
          <img src={homePage + '/img/adress.svg'} alt="" />
          <div>
            <span className="adress__title">г. Кокчетав, ул. Ж. Ташенова 129Б</span>
            <p className="adress__text">(Рынок Восточный)</p>
          </div>
        </div>
        <div className="header__adress header__adress-last ">
          <img src={homePage + '/img/email.svg'} alt="" />
          <div>
            <span className="adress__title">opt.sultan@mail.ru </span>
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
      <div>
        <div className="header__down ">
          <div className="header__down-conttainer wrapper">
            <img
              src={homePage + '/img/sultan-logo-header.svg'}
              alt="sultan"
            />
            <button className="header__catalog">
              Каталог
              <img
                src={homePage + '/img/catalog-btn.svg'}
                alt=""
              />
            </button>
            <form className="header__search">
              <input
                className="header__input"
                type="text"
                placeholder="Поиск..."
              />
              <button className="header__input-btn" type="submit">
                <img src={homePage + '/img/search.svg'} alt="" />
              </button>
            </form>
            <div className="header__call">
              <div>
                <p className="header__number">+7 (777) 490-00-91</p>
                <p className="header__time">время работы: 9:00-20:00</p>
                <p className="header__zakazcall">Заказать звонок</p>
              </div>
              <div className="header__imgwoman">
                <img src={homePage + '/img/Group101.svg'} alt="" />
              </div>
            </div>
            <button className="header__price">
              Прайс-лист <img src="img/price-btn.svg" alt="" />
            </button>
            <div className="header__basket">
              <button  data-testid="basket-link" onClick={() => navigate('/basket')}>
                <img src={homePage + '/img/basket.svg'} alt="" />
                <div className="header__counter">{cardItemBasket.length}</div>
              </button>
              <div>
                <p>Корзина</p>
                <span>{allPrice} ₸</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
