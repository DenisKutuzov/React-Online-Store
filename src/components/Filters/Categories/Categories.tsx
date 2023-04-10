import { FC } from 'react'
import './categories.scss'

export interface CategoriesProps {
  onClick: (e: any) => void
  styleCategory?: boolean
}

const Categories: FC<CategoriesProps> = ({onClick, styleCategory }) => {
  let categoriesList: string[] = [`Уход за телом`, 'Уход за руками']

  return (
    <div className={styleCategory ? 'categoriesColum' : 'categories'}>
      {categoriesList.map((card, indx) => {
        return (
          <button
            key={indx}
            className={styleCategory ? 'categoriesColum__item' : 'categories__item'}
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
