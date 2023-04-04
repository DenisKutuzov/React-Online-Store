import React from 'react'

import { Link, useNavigate, useParams } from 'react-router-dom'
import Crumb from './Crumb/Crumb'

const BreadCrumbs = () => {


  return (
    <div className='wrapper '>
        <div className='crumb__item'>
      <Link style={{border : 'none'}} to="/" className="crumb__link">
        Главная
      </Link>
      
      <Crumb to="/">Каталог</Crumb>
      <Crumb to="/catalog">Каталог</Crumb>
      <Crumb to="/basket">Корзина</Crumb>
      <Crumb to="/catalog/:baracode">Товар</Crumb>
      </div>
        <Link className='crumb__mobil-prev' to='/catalog'>
            <img src={process.env.PUBLIC_URL + 'img/mobil-prev-BreadCrumbs.svg'} alt="back" />
        </Link>
    </div>
  )
}

export default BreadCrumbs
