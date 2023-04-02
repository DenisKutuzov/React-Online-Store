import React, { useMemo, useState } from 'react'
import CardList from '../../components/CardList/CardList'
import Categories from '../../components/Filters/Categories/Categories'
import Pagination from '../../components/Pagination/Pagination'
import Search from '../../components/Filters/Seacrh/Search'
import SelectionPrice from '../../components/Filters/SelectionPrice/SelectionPrice'
import Sort from '../../components/Filters/Sort/Sort'
import cards from '../../JSON/json'
import Chechbox from '../../components/Checkbox/Checkbox'
import './catalogPage.scss'
import CreateCard from '../../components/UI/CreateCard/CreateCard'

function CatalogPage() {
  let newCards = cards

  if (localStorage.getItem('card')) {
    console.log(JSON.parse(localStorage.getItem('card') || '[]'))
    newCards = [...JSON.parse(localStorage.getItem('card') || '[]')]
  }

  if (newCards.length === 0) {
    newCards = cards
  }

  // users = JSON.parse(localStorage.getItem('soredUsers') || '[]')

  const [modulCreateCard, setmodulCreateCard] = useState(true)

  const [posts, setPosts] = useState(newCards)

  const [emptyCheckbox, setEmptyCheckbox] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)

  const [cardsPerPages] = useState(15)

  const lastCardsIndex = currentPage * cardsPerPages
  const firstCardsIndex = lastCardsIndex - cardsPerPages

  const [filter, setFilter] = useState({
    sort: 'titleUp',
    query: '',
    priceMin: '0',
    priceMax: '10000',
    checkBox: '',
    categories: '',
  })

  // Сортировка по навазанию и цене
  const sortedPosts = useMemo(() => {
    // console.log('обработала функция 1')

    switch (filter.sort) {
      case '':
        // console.log(posts)
        return [...posts]

      case 'titleUp':
        // console.log(posts)
        return [...posts].sort((a: any, b: any) =>
          a['title'].localeCompare(b['title'])
        )

      case 'priceUp':
        // console.log(posts)
        return [...posts].sort((a: any, b: any) => a['price'] - b['price'])

      case 'priceDown':
        // console.log(1)
        return [...posts].sort((a: any, b: any) => b['price'] - a['price'])

      default:
        return posts
    }
  }, [filter.sort, posts])

  //  Сортировка по мин и мах цене

  const sortedPriceMin = useMemo(() => {
    return sortedPosts.filter((post) => post.price >= +filter.priceMin)
  }, [filter.priceMin, sortedPosts])

  const sortedPriceMax = useMemo(() => {
    console.log('обработала функция price')
    return sortedPriceMin.filter((post) => post.price <= +filter.priceMax)
  }, [filter.priceMax, sortedPriceMin])

  // сортировка по checkbox

  const sortedCheckBox = useMemo(() => {
    // console.log('обработала функция Box')
    return sortedPriceMax.filter((post) => {
      // console.log(filter.checkBox)
      return post.manufacturer.toLowerCase().includes(filter.checkBox)
    })
  }, [filter.checkBox, sortedPriceMax])

  // Сортировка по Категориям

  const sortedCategories = useMemo(() => {
    console.log(filter.categories)
    console.log('обработала функция Категории')
    if (filter.categories === '') {
      return sortedCheckBox
    } else
      return sortedCheckBox.filter((post) =>
        post.care.includes(filter.categories)
      )
  }, [filter.categories, sortedCheckBox])

  // Сортировка по Поиску производителя

  const sortedAndSearchedPost = useMemo(() => {
    return sortedCategories.filter((post) =>
      post.manufacturer.toLowerCase().includes(filter.query.toLowerCase())
    )
  }, [filter.query, sortedCategories])

  // const currentCards = posts.slice(firstCardsIndex, lastCardsIndex)

  // Пагинация страниц

  const currentCards = useMemo(() => {
    return sortedAndSearchedPost.slice(firstCardsIndex, lastCardsIndex)
  }, [firstCardsIndex, lastCardsIndex, sortedAndSearchedPost])

  const paginate = (pageNumbers: React.SetStateAction<number>) =>
    setCurrentPage(pageNumbers)

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1)
  }
  const prevPage = () => setCurrentPage((prev) => prev - 1)

  const style = true

  return (
    <>
      <CreateCard
        posts={posts}
        setPosts={setPosts}
        setmodulCreateCard={setmodulCreateCard}
        modulCreateCard={modulCreateCard}
      />
      <div className="wrapper catalogPage">
        <div className="catalogPage__titlegroup">
          <h1>Косметика и гигиена</h1>
          <button
            className="catalogPage__createcard-btn"
            onClick={() => setmodulCreateCard(false)}
          >
            {' '}
            Добавить карточку
          </button>
          <Sort
            value={filter.sort}
            onChange={(selectedSort) =>
              setFilter({ ...filter, sort: selectedSort })
            }
          />
        </div>
        <Categories
          cards={newCards}
          onClick={(e) => {
            setFilter({ ...filter, categories: e.target.value })
            // console.log(e.target.value)
          }}
        />
        <div className="container">
          <div>
            <SelectionPrice
              valueMin={filter.priceMin}
              valueMax={filter.priceMax}
              onChangeMin={(e) =>
                setFilter({ ...filter, priceMin: e.target.value })
              }
              onChangeMax={(e) =>
                setFilter({ ...filter, priceMax: e.target.value })
              }
            />
            <Search
              value={filter.query}
              onChangeSearch={(e) =>
                setFilter({ ...filter, query: e.target.value })
              }
              // onChangeBox={}
              posts={newCards}
            />
            <Chechbox
              checkedBool={() => setEmptyCheckbox(!emptyCheckbox)}
              value={emptyCheckbox}
              posts={newCards}
              onChange={(e: any) => {
                // console.log(e.target.value)
                if (emptyCheckbox) {
                  setFilter({ ...filter, checkBox: '' })
                } else setFilter({ ...filter, checkBox: e.target.value })
              }}
            />
             <Categories
             style={style}
          cards={newCards}
          onClick={(e) => {
            setFilter({ ...filter, categories: e.target.value })
            // console.log(e.target.value)
          }}
        />
          </div>

          <div className="cardlinkpagination">
            <CardList posts={currentCards}  setPosts={setPosts} />

            {/* <button onClick={prevPage}>Down</button> */}
            {newCards.length !== 0 && (
              <Pagination
                prevPage={prevPage}
                nextPage={nextPage}
                currentPage={currentPage}
                cardsPerPages={cardsPerPages}
                totalCards={posts.length}
                paginate={paginate}
              />
            )}
            <p className='cardlinkpagination__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              interdum ut justo, vestibulum sagittis iaculis iaculis. Quis
              mattis vulputate feugiat massa vestibulum duis. Faucibus
              consectetur aliquet sed pellentesque consequat consectetur congue
              mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim,
              malesuada.
            </p>
            {/* <button onClick={nextPage}>Up</button> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default CatalogPage
