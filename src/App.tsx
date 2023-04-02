import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import BasketPage from './pages/BasketPage/BasketPage'
import CardPages from './pages/CardPages/CardPages'
import CatalogPage from './pages/CatalogPages/CatalogPage'
import AppContext from './context'
import { ICard } from './types/types'
import Footer from './components/Footer/Footer'

function App() {
  const [cardItemBasket, setCardItemBasket] = useState<ICard[]>([])

  const [allPrice, setAllPrice] = useState(0)

  const [counter, setCounter] = useState(1)


  // const   allpriceFun = () => {
  //   cardItemBasket.reduce((s, i) => s = s + (i.counter * i.price) , 0);
  // }


  const onPlus = (obj: ICard) => {
    setCardItemBasket((card) => {
      return card.map((product) => {
        if (product.id === obj.id) {
          
          return {
            ...product,
            counter: ++product.counter,
          }
        }
        return product
      })
 
    })

   
  }

  const onMin = (obj: ICard) => {
    console.log(obj)
    setCardItemBasket((card) => {
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
      // console.log(1)
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
      }}
    >
      <BrowserRouter>
        <div className="wrapper">
          <Header />
        </div>
        <div style={{marginBottom : '50px', marginTop : '45px'}} className="navbar wrapper">
          <div className="navbar__item">
            <Link to="/catalog" className="navbar__link">
              Главная
            </Link>
            <Link to="/catalog" className="navbar__link">
              Каталог
            </Link>

            {/* <Link to={/ + ${} }></Link> */}
          </div>
        </div>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<CatalogPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:baracode" element={<CardPages />} />
            <Route path="/catalog/basket" element={<BasketPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
