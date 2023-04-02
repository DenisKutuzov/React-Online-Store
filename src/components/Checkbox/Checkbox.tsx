import React, { FC, useState } from 'react'
import { ICard } from '../../types/types'
import './checkBox.scss'

interface CheckboxCards {
  posts: ICard[]
  value: boolean
  checkedBool: () => void
  onChange: (e: any) => void
}

const Checkbox: FC<CheckboxCards> = ({
  value,
  checkedBool,
  posts,
  onChange,
}) => {
  const [activeCheckbox, setActiveCheckbox] = useState(0)

  const [checked, setChecked] = useState(false)

  const [list, setList] = useState(false)

  // Массив состоящий только из производителей
// const arr = posts.map((man) => {
//   return man.manufacturer
// })

// коллекия из 
// const newArraySet  = Array.from(new Set(posts))
  
// console.log(newArraySet)
// console.log()
let tmpArray: any[] = [];

function itemCheck(item: ICard) {
    if (tmpArray.indexOf(item.manufacturer) === -1) {
        tmpArray.push(item.manufacturer);
        return true
    }
    return false;
}

tmpArray = posts.filter((item) => itemCheck(item));


  return (
    <div>
      {tmpArray.map((card, i) => {
        return (
          <div
            className="checkbox "
            key={card.barcode}
            style={
              i < 4 || list
                ? { display: 'flex' }
                : { display: 'none' }
            }
          >
            <input
              className="checkbox__input"
              type="checkbox"
              checked={card.barcode === activeCheckbox}
              value={card.manufacturer.toLowerCase()}
              onChange={onChange}
              onClick={() => {
                if (card.barcode === activeCheckbox) {
                  setActiveCheckbox(0)
                  // console.log(22)
                  checkedBool()
                  setChecked(checked)
                  // console.log(value)
                } else {
                  // checkedBool()
                  // console.log(25)
                  checkedBool()
                  // console.log(value)
                  setActiveCheckbox(card.barcode)
                }
              }}
            />
            <label className="checkbox__text">{card.manufacturer}</label>
          </div>
        )
      })}
      {/* {list || (
        <div>
          <input type="checkbox" />
          <label>123</label>
        </div>
      )} */}
      <button className='checkbox__btn' onClick={() => setList(!list)}>Показать все <img src="/img/checkbox-img.svg" alt="" className='checkbox__img'/> </button>
      <div className='checkbox__br'></div>
      
    </div>
  )
}

export default Checkbox
