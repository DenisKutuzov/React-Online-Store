import React, { FC, useContext } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import AppContext from '../../../../context'

import "./crumb.scss"

export interface CrumbProps {
  to: string
  children: any
}

const Crumb: FC<CrumbProps> = (props ) => {

const {posts} = useContext(AppContext)


 
  const { children, to, } = props
    const resolved = useResolvedPath(to)

    const match = useMatch({path: resolved.pathname, })
 

const number = Number(match?.pathname.slice(9))


const card = posts.filter((card) => card.barcode === number)
console.log(match?.pathname)
  return (
    <div>

        {match?.pathname === '/' || match?.pathname === '/catalog'  ? ( <Link to={'/catalog'} className="crumb__link crumb__link-activ">
            Каталог
        </Link>) : <></> }

        {match?.pathname === '/basket'  ? ( <Link to={to} className="crumb__link navbar__link-activ">
            Корзина
        </Link>) : <></> }
        {Number(match?.pathname.slice(9)) as number  ? (
          <><Link to={'/catalog'} className="crumb__link">
          Каталог
        </Link><Link className="crumb__link crumb__link-activ" to={''}>
            {card[0].title}
          </Link></>) : <></> }
    </div>
  )
}

export default Crumb
