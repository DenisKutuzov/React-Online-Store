import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import BasketPage from './pages/BasketPage/BasketPage'
import CardPages from './pages/CardPages/CardPages'
import CatalogPage from './pages/CatalogPages/CatalogPage'
import AppContext from './context'
import { ICard } from './types/types'
import Footer from './components/Footer/Footer'
import cards from './JSON/json'
import BreadCrumbs from './components/UI/BreadCrumbs/BreadCrumbs'

function App() {
  let newCards = cards

  if (localStorage.getItem('card')) {
    newCards = [...JSON.parse(localStorage.getItem('card') || '[]')]
  }

  if (newCards.length === 0) {
    newCards = cards
  }

  const [change, setChange] = useState(true)

  const [posts, setPosts] = useState(newCards)

  const [cardItemBasket, setCardItemBasket] = useState<ICard[]>([])

  const [allPrice, setAllPrice] = useState<number>(0)

  const [counter, setCounter] = useState(1)


  // Удаляет из корзины
  const onRemoveCardBasket = (obj: ICard) => {
    setCardItemBasket((prev) => prev.filter((item) => item.id !== obj.id))
  }

  // Добавляет в корзину
  
  const onAddCardBasket = (obj: any) => {
    if (cardItemBasket.find((item) => item.id === obj.id)) {
      onRemoveCardBasket(obj)
    } else {
      setCardItemBasket((prev) => [...prev, obj])
    }
  }

  // Считает сумму корзины
  useEffect(() => {
    setAllPrice(
      Number(
        cardItemBasket
          .reduce((s, i) => (s = s + i.counter * i.price), 0)
          .toFixed(2)
      )
    )
  }, [cardItemBasket, setAllPrice])

  return (
    <AppContext.Provider
      value={{
        cardItemBasket,
        setCardItemBasket,
        onAddCardBasket,
        onRemoveCardBasket,
        counter,
        setCounter,
        allPrice,
        setAllPrice,
        posts,
        setPosts,
        change,
        setChange,
      }}
    >
      <Header />
      <BreadCrumbs />

      <div className="wrapper">
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:baracode" element={<CardPages />} />
          <Route path="/basket" element={<BasketPage />} />
        </Routes>
      </div>
      <Footer />
    </AppContext.Provider>
  )
}

export default App
