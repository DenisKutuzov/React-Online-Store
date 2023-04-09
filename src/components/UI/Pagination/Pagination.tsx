import React, { FC } from 'react'
import './pagination.scss'
import homePage from '../../../homePage'

export interface PaginationProps {
  cardsPerPages: any
  totalCards: any
  paginate: (pageNumbers: any) => void
  prevPage: () => void
  nextPage: () => void
  currentPage: number
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
  console.log(pageNumbers)
  return (
    <div className="pagination">
      <button onClick={prevPage} disabled={currentPage === 1 ? true : false}>
        <img src={homePage + '/img/paginationPrev.svg'} alt="prev" />
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
            <p
              // href="#!"
              className="pagination__link"
              onClick={() => paginate(number)}
            >
              {number}
            </p>
          </li>
        ))}
      </ul>
      <button
        onClick={nextPage}
        disabled={currentPage + 1 > pageNumbers.length ? true : false}
      >
        <img src={homePage + '/img/paginationNext.svg'} alt="next" />
      </button>
    </div>
  )
}

export default Pagination
