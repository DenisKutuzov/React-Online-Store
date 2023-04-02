import React, { FC } from 'react'
import { ICard } from '../../../types/types'
import './search.scss'

interface SeacrhCard {
  value: string
  onChangeSearch: (e: any) => void
  posts: ICard[]
}

const Search: FC<SeacrhCard> = ({ value, onChangeSearch, posts }) => {
  return (
    <div className="search">
      <p className="search__title">Производитель</p>
      <div className="search__div">
        <input
          className="search__input"
          value={value}
          onChange={onChangeSearch}
          type="text"
          placeholder="Поиск..."
        />
        <button className="search__btn">
          <img src="/img/search.svg" alt="" />
        </button>
      </div>
      {/* {posts.map((card) => {
        return (
          <div>
            <input type="checkbox"  value={card.manufacturer.toLowerCase()} onChange={onChangeBox} />
            <label>{card.manufacturer}</label>
          </div>
        )
      })} */}
      {/* <div>
        <input type="checkbox" value="Grifon" />
        <label >Subscribe to newsletter?</label>
      </div> */}
    </div>
  )
}

export default Search
