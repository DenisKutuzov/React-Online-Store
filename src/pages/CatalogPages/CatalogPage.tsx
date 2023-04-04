import React, { useContext, useMemo, useState } from 'react'
import CardList from '../../components/CardList/CardList'
import Categories from '../../components/Filters/Categories/Categories'
import Pagination from '../../components/Pagination/Pagination'
import Search from '../../components/Filters/Seacrh/Search'
import SelectionPrice from '../../components/Filters/SelectionPrice/SelectionPrice'
import Sort from '../../components/Filters/Sort/Sort'
import Chechbox from '../../components/Checkbox/Checkbox'
import './catalogPage.scss'
import CreateCard from '../../components/CreateCard/CreateCard'
import AppContext from '../../context'
import ChangeCard from '../../components/ChangeCard/ChangeCard'

function CatalogPage() {
  const { posts, setPosts } = useContext(AppContext)

  const [modulCreateCard, setmodulCreateCard] = useState(true)

  // const [posts, setPosts] = useState(newCards)

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
    switch (filter.sort) {
      case '':
        return [...posts]

      case 'titleUp':
        return [...posts].sort((a: any, b: any) =>
          a['title'].localeCompare(b['title'])
        )

      case 'priceUp':
        return [...posts].sort((a: any, b: any) => a['price'] - b['price'])

      case 'priceDown':
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
    return sortedPriceMin.filter((post) => post.price <= +filter.priceMax)
  }, [filter.priceMax, sortedPriceMin])

  // сортировка по checkbox

  const sortedCheckBox = useMemo(() => {
    return sortedPriceMax.filter((post) => {
      return post.manufacturer.toLowerCase().includes(filter.checkBox)
    })
  }, [filter.checkBox, sortedPriceMax])

  // Сортировка по Категориям

  const sortedCategories = useMemo(() => {
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
      {/* <ChangeCard/> */}
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
          cards={posts}
          onClick={(e) => {
            setFilter({ ...filter, categories: e.target.value })
            // console.log(e.target.value)
          }}
        />
        <div className='mobil-section'>
          <p className="selection__title">ПОДБОР ПО ПАРАМЕТРАМ</p>
          <div style={{position: 'relative'}}>
          {/* <img src={process.env.PUBLIC_URL + 'img/mobil-activ.svg'} className='mobil-section__img' alt="" /> */}
          </div>
        </div>
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
              posts={posts}
            />
            <Chechbox
              checkedBool={() => setEmptyCheckbox(!emptyCheckbox)}
              value={emptyCheckbox}
              posts={posts}
              onChange={(e: any) => {
                if (emptyCheckbox) {
                  setFilter({ ...filter, checkBox: '' })
                } else setFilter({ ...filter, checkBox: e.target.value })
              }}
            />
            <Categories
              style={style}
              cards={posts}
              onClick={(e) => {
                setFilter({ ...filter, categories: e.target.value })
              }}
            />
          </div>

          <div className="cardlinkpagination">
            <CardList posts={currentCards} setPosts={setPosts} />

            {/* <button onClick={prevPage}>Down</button> */}
            {posts.length !== 0 && (
              <Pagination
                prevPage={prevPage}
                nextPage={nextPage}
                currentPage={currentPage}
                cardsPerPages={cardsPerPages}
                totalCards={posts.length}
                paginate={paginate}
              />
            )}
            <p className="cardlinkpagination__text">
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
