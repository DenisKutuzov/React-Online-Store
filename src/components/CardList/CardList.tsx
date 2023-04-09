import React, { FC } from 'react'
import { ICard } from '../../types/types'
import Card from './Card/Card'
import './cardList.scss'

interface CardListProps {
  posts: ICard[]
  setPosts: (a: any) => void
}

const CardList: FC<CardListProps> = ({ posts, setPosts }) => {
  // console.log(posts)
  return (
    <div className="cardlist">
      {posts.map((card) => {
        // console.log(card)
        return (
          <Card key={card.id} card={card} posts={posts} setPosts={setPosts} />
        )
      })}
    </div>
  )
}

export default CardList
