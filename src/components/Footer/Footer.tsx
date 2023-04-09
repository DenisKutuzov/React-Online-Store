import homePage from '../../homePage'
import './footer.scss'

const Footer = () => {
  return (
    <div
      style={{
        background: '#3f4e65',
        boxShadow: ' 0px 15px 70px -11px rgba(43, 28, 1, 0.04)',
      }}
    >
      <div className="wrapper footer ">
        <div className="footer__left">
          <div >
           
            <div style={{display : 'flex', justifyContent : 'space-between'}} >
            <img
              src={homePage + '/img/sultanlogo.svg'}
              alt=""
              className="footer__img mobile-activ"
            />
               <img
              src={homePage + '/img/sultan-footer-mobil.svg'}
              alt=""
              className="footer__img footer__mobil-activ"
            />
              <button className="footer__pricebtn footer__mobil-activ">
                Прайс-лист
                <img src={homePage + "/img/price-btn.svg"} alt="price" />
              </button>
            </div>
          </div>
          <p className="footer__title">
            Компания «Султан» — снабжаем розничные магазины товарами "под ключ"
            в Кокчетаве и Акмолинской области
          </p>
          <span className="footer__text">Подпишись на скидки и акции</span>
          <div className="input-group">
            <input
              type="text"
              placeholder="Введите ваш E-mail"
              className="input-group__input"
            />
            <button className="input-group__btn">
              <img
                src={homePage + '/img/footer-input-btn.svg'}
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="footer__category-mobil">
          <div className="footer__center">
            <p className="footer__category">Меню сайта:</p>
            <ul className="footer__links">
              <li className="footer__item">О компании</li>
              <li className="footer__item">Доставка и оплата</li>
              <li className="footer__item">Возврат</li>
              <li className="footer__item">Контакты</li>
            </ul>
          </div>
          <div className="footer__center">
            <p className="footer__category">Категории:</p>
            <ul className="footer__links">
              <li className="footer__item">Бытовая химия</li>
              <li className="footer__item">Косметика и гигиена</li>
              <li className="footer__item">Товары для дома</li>
              <li className="footer__item">Товары для детей и мам</li>
            </ul>
          </div>
        </div>
        <div className="footer__center">
          <p className="footer__category mobile-activ">Скачать прайс-лист:</p>
          <div className="footer__links">
            <button className="footer__pricebtn mobile-activ">
              Прайс-лист
              <img src={homePage + "/img/price-btn.svg"} alt="price" />
            </button>
            <span className="footer__item">Связь в мессенджерах:</span>
            <div className="footer__seti">
              <img
                src={homePage + '/img/whatsup.svg'}
                alt="watsup"
                style={{ marginRight: '10px' }}
              />
              <img
                src={homePage + '/img/telegram.svg'}
                alt="telegram"
              />
            </div>
          </div>
        </div>
        <div className="footer__center-last">
          <p className="footer__category">Контакты:</p>
          <div className="footer__right">
            <span className="footer__category">+7 (777) 490-00-91</span>
            <span>время работы: 9:00-20:00</span>
            <span>время работы: 9:00-20:00</span>
            <span>Заказать звонок</span>
            <div className="footer__cards">
              <img
                src={homePage + '/img/visa.svg'}
                alt="visa"
                style={{ marginRight: '5px' }}
              />
              <img
                src={homePage + '/img/mastercard.svg'}
                alt="mastercard"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
