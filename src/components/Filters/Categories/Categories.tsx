import { FC } from 'react'
import './categories.scss'

export interface CategoriesProps {
  onClick: (e: any) => void
  style?: true
}

const Categories: FC<CategoriesProps> = ({onClick, style }) => {
  let categoriesList: string[] = [`Уход за телом`, 'Уход за руками']

  return (
    <div className={style ? 'categoriesColum' : 'categories'}>
      {categoriesList.map((card, indx) => {
        return (
          <button
            key={indx}
            style={style ?  {textTransform:'uppercase'} : undefined}
            className={style ? 'categoriesColum' : 'categories__item'}
            onClick={onClick}
            value={card}
          >
           {card}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
