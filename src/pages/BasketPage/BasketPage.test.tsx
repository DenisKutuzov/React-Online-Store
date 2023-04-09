import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import BasketPage from './BasketPage'

// const card1: ICard = {
//     id: 1,
//     urlImg: '/img/aos-crystal.png',
//     title: 'Прокладки ежедневные DISCREET Multiform',
//     type: '/img/cardbox.svg',
//     size: '15X28.8 г',
//     barcode: 4604049297548,
//     manufacturer: 'Проктер энд Гэмбл ООО',
//     brand: 'DISCREET',
//     description:
//       'Ежедневные прокладки DISCREET Multiform Air без отдушек подарят вам ощущение свежести и красоты.',
//     price: 90,
//     counter: 1,
//     care: ['Уход за телом'],
//   }

describe('Basket', () => {
  test('Basket empty', () => {
    render(
      <MemoryRouter initialEntries={['/basket']}>
        <Routes>
          {/* <Route path="/" element={<CatalogPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:baracode" element={<CardPages />} /> */}
          <Route path="/basket" element={<BasketPage />} />
        </Routes>
      </MemoryRouter>
    )
    // const buttonBtn = screen.getByTestId('addBasket-btn')
    // fireEvent.click(buttonBtn)
    const textElement = screen.getByText('Корзина пустая')
    expect(textElement).toBeInTheDocument()
  })
})
