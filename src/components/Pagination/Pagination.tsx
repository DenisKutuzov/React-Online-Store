import React, { FC } from 'react'
import './pagination.scss'

export interface PaginationProps {
  cardsPerPages: any
  totalCards: any
  paginate: (pageNumbers: any) => void
  prevPage: () => void
  nextPage: () => void
  currentPage : number
}

const Pagination: FC<PaginationProps> = ({
  cardsPerPages,
  totalCards,
  paginate,
  prevPage,
  nextPage,
  currentPage,
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPages); i++) {
    pageNumbers.push(i)
  }
  // console.log(pageNumbers)
  return (
    <div className="pagination">
      <button onClick={prevPage}>
        <img src={process.env.PUBLIC_URL + "/img/paginationPrev.svg"} alt="" />
      </button>
      <ul className="pagination__ul">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
                currentPage === number
                ? 'pagination__item pagination__item-activ'
                : 'pagination__item'
            }
          >
            <a
              href="#!"
              className="pagination__link"
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
      <button onClick={nextPage}>
        {' '}
        <img src={process.env.PUBLIC_URL + "/img/paginationNext.svg"} alt="" />
      </button>
    </div>
  )
}

export default Pagination
