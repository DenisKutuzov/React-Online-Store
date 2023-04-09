

import { Link,  } from 'react-router-dom'
import Crumb from './Crumb/Crumb'
import homePage from '../../../homePage'

const BreadCrumbs = () => {


  return (
    <div className='wrapper '>
        <div className='crumb__item'>
      <Link style={{border : 'none'}} to="/" className="crumb__link" data-testid="main-link">
        Главная
      </Link>
      
      <Crumb to="/">Каталог</Crumb>
      <Crumb to="/catalog">Каталог</Crumb>
      <Crumb to="/basket">Корзина</Crumb>
      <Crumb to="/catalog/:baracode">Товар</Crumb>
      </div>
        <Link className='crumb__mobil-prev' to='/catalog'>
            <img src={homePage + '/img/mobil-prev-BreadCrumbs.svg'} alt="back" />
        </Link>
    </div>
  )
}

export default BreadCrumbs
