import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  HashRouter,
  Link,
  Route,
  Routes,
} from 'react-router-dom'
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
    // console.log(JSON.parse(localStorage.getItem('card') || '[]'))
    newCards = [...JSON.parse(localStorage.getItem('card') || '[]')]
  }

  if (newCards.length === 0) {
    newCards = cards
  }

  const [titleParams, setTitleParams] = useState()

  const [posts, setPosts] = useState(newCards)

  const [cardItemBasket, setCardItemBasket] = useState<ICard[]>([])

  const [allPrice, setAllPrice] = useState(0)

  const [counter, setCounter] = useState(1)

  const onPlus = (obj: ICard) => {
    const countcard = ++obj.counter

    setCardItemBasket((card) => {
      console.log(obj.id)
      return card.map((product) => {
        if (product.id === obj.id) {
          console.log(`${product.counter} + 1 это счетчик card`)
          return {
            ...product,
            counter: countcard,
          }
        }
        return product
      })
    })
    setPosts((card) => {
      return card.map((product) => {
        if (product.id === obj.id) {
          console.log(`${product.counter} + 1 это счетчик basket`)
          return {
            ...product,
            counter: countcard,
          }
        }
        return product
      })
    })
  }

  const onMin = (obj: ICard) => {
    const countcard = --obj.counter

    setCardItemBasket((card) => {
      return card.map((product) => {
        if (product.id === obj.id) {
          return {
            ...product,
            counter: countcard - 1 > 0 ? countcard : 1,
          }
        }
        return product
      })
    })
    setPosts((card) => {
      return card.map((product) => {
        if (product.id === obj.id) {
          return {
            ...product,
            counter: product.counter - 1 > 1 ? --product.counter : 1,
          }
        }
        return product
      })
    })
  }

  const onRemoveCardBasket = (obj: ICard) => {
    setCardItemBasket((prev) => prev.filter((item) => item.id !== obj.id))
  }

  const onAddCardBasket = (obj: any) => {
    if (cardItemBasket.find((item) => item.id === obj.id)) {
      onRemoveCardBasket(obj)
    } else {
      setCardItemBasket((prev) => [...prev, obj])
    }
  }

  return (
    <AppContext.Provider
      value={{
        cardItemBasket,
        setCardItemBasket,
        onAddCardBasket,
        onRemoveCardBasket,
        counter,
        setCounter,
        onPlus,
        onMin,
        allPrice,
        setAllPrice,
        posts,
        setPosts,
      }}
    >
      <HashRouter>
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
      </HashRouter>
    </AppContext.Provider>
  )
}

export default App
