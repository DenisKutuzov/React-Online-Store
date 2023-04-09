import { FC } from 'react'
import { ICard } from '../../../types/types'
import './search.scss'
import homePage from '../../../homePage'

interface SeacrhCard {
  value: string
  onChangeSearch: (e: any) => void
  posts: ICard[]
}

const Search: FC<SeacrhCard> = ({ value, onChangeSearch, }) => {
  return (
    <div className="search">
      <p className="search__title">Производитель</p>
      <div className="search__div">
        <input
        data-testid="input"
          className="search__input"
          value={value.toLowerCase()}
          onChange={onChangeSearch}
          type="text"
          placeholder="Поиск..."
        />
        <button className="search__btn" disabled style={{cursor : 'auto'}}>
          <img src={homePage + "/img/search.svg"} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Search
