import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'
import { ICard } from '../../../types/types'
import Card from '../../CardList/Card/Card'

const card1: ICard = {
  id: 1,
  urlImg: '/img/aos-crystal.png',
  title: 'Прокладки ежедневные DISCREET Multiform',
  type: '/img/cardbox.svg',
  size: '15X28.8 г',
  barcode: 4604049297548,
  manufacturer: 'Проктер энд Гэмбл ООО',
  brand: 'DISCREET',
  description:
    'Ежедневные прокладки DISCREET Multiform Air без отдушек подарят вам ощущение свежести и красоты.',
  price: 90,
  counter: 1,
  care: ['Уход за телом'],
}

describe('ButtonBasket', () => {
  test('ButtonBasket color', () => {
    render(
      <MemoryRouter>
        <Card
          card={card1}
          posts={[]}
          setPosts={function (a: any): void {
            throw new Error('Function not implemented.')
          }}
        />
      </MemoryRouter>
    )
    const buttonBtn = screen.getByTestId('addBasket-btn')
    fireEvent.click(buttonBtn)
    const textElement = screen.getByText('Убрать из корзины')
    expect(textElement).toBeInTheDocument()
  })
})
