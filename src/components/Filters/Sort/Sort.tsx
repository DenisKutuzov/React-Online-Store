import React, { FC } from 'react'
import './sort.scss'

interface SortProps {
  value: string
  onChange: (event: any) => void
}



const Sort: FC<SortProps> = ({value, onChange }) => {
  return (
    <div className="sort">
      <p>Сортировка:</p>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {/* <option defaultValue='titleDown' selected={true}>по</option> */}
      
        <option value="titleUp" >Название ↑</option>
        <option value="titleDown" >Название ↓</option>
        <option value="priceUp">Цена ↑</option>
        <option value="priceDown">Цена ↓</option>
        {/* {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))} */}
      </select>
    </div>
  )
}

export default Sort
