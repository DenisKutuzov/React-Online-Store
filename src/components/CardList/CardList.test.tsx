import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter,} from 'react-router-dom'
import { ICard } from '../../types/types'
import CardList from './CardList'


const post2: ICard[] = []


const posts: ICard[] = [{
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
}, {
  id: 2,
  urlImg: '/img/ariel-gel.png',
  title: 'Крем-мыло DOVE Красота и уход',
  type: '/img/cardbox.svg',
  size: '90г',
  barcode: 460204909756867,
  manufacturer: 'Россия',
  brand: 'DOVE',
  description:
    'Шампунь для волос DOVE Nourishing Secrets «Густые и сильные» с лавандой и розмарином – питательное средство. Волосы выглядят более плотными, сильными и упругими уже после первого применения! Особенное питание DOVE в сочетании с экзотическими натуральными ингредиентами – это настоящий ритуал красоты, бережно отобранный для вас DOVE и доставленный на полочку вашей ванны с любовью и заботой. DOVE не проводит тесты на животных и имеет аккредитацию организации РЕТА.',
  price: 80,
  counter: 1,
  care: ['Уход за телом', 'Уход за руками'],
}]

describe('CardList', () => {
  test('CardList addtest', () => {
    render(
      <MemoryRouter initialEntries={['/catalog']}>
      <CardList posts={posts} setPosts={function (a: any): void {
                throw new Error('Function not implemented.')
            } }/>
      </MemoryRouter>
    )
    const textElement = screen.getByText('Проктер энд Гэмбл ООО')
    const linkElement = screen.getByText('4604049297548')
    expect(textElement).toBeInTheDocument()
    expect(linkElement).toBeInTheDocument()
  })

  test('CardList addtest2', () => {
    render(
      <MemoryRouter initialEntries={['/catalog']}>
      <CardList posts={posts} setPosts={function (a: any): void {
                throw new Error('Function not implemented.')
            } }/>
      </MemoryRouter>
    )
    const textElement = screen.getByText('Крем-мыло DOVE Красота и уход')
    const linkElement = screen.getByText('4604049297548')
    expect(textElement).toBeInTheDocument()
    expect(linkElement).toBeInTheDocument()
  })

  test('CardList empty', () => {
    render(
      <MemoryRouter initialEntries={['/catalog']}>
      <CardList posts={post2} setPosts={function (a: any): void {
                throw new Error('Function not implemented.')
            } }/>
      </MemoryRouter>
    )
    expect(screen.queryByText('Крем-мыло DOVE Красота и уход')).not.toBeInTheDocument()
    expect(screen.queryByText('4604049297548')).not.toBeInTheDocument()
  })
})
