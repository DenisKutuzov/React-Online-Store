import React, { FC } from 'react'
import './selectionPrice.scss'

interface PriceCards {
  valueMin : string,
  valueMax : string,
  onChangeMin: (e : any) => void
  onChangeMax: (e : any) => void
}

const SelectionPrice : FC<PriceCards> = ({valueMin, valueMax,  onChangeMin, onChangeMax}) => {
  return (
    <div className="selection">
      <span className='selection__text'>
        Цена <b>₸</b>
      </span>
      <div className="selection__price">
        <input className="selection__input" onChange={onChangeMin} type="number"   value={valueMin} />
        <p className='selection__slash'>-</p>
        <input className="selection__input" onChange={onChangeMax} type="number"  value={valueMax}   />
      </div>
     
    </div>
  )
}

export default SelectionPrice
