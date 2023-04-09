import { FC, useContext, useState } from 'react'
import { ICard } from '../../../types/types'
import './checkBox.scss'
import homePage from '../../../homePage'
import { CheckboxGroup } from '../../UI/CheckBoxGroup/CheckboxGroup'
import {
  ICheckboxGroupOption,
  ICheckedGroup,
} from '../../CreateCard/CreateCard'
import AppContext from '../../../context'

interface CheckboxCards {
  posts: ICard[]
  onClickCheckBox: (a: string[]) => void
}

const Checkbox: FC<CheckboxCards> = ({ posts, onClickCheckBox }) => {

   const {setPosts} = useContext(AppContext)

  const [list, setList] = useState(false)

  let tmpArray: any[] = []

  function itemCheck(item: ICard) {
    if (tmpArray.indexOf(item.manufacturer) === -1) {
      tmpArray.push(item.manufacturer)
      return true
    }
    return false
  }

  tmpArray = posts.filter((item) => itemCheck(item))

  const listManufacturer = tmpArray.map((e) => e.manufacturer)

  const checkboxGroupOptions: ICheckboxGroupOption[] = [
    {
      option: { optionNameRu: 'Категория', optionNameOnBackend: 'category' },
      entities: listManufacturer,
    },
  ]
  const [checkedBoxByGroup, setCheckedBoxByGroup] = useState<ICheckedGroup>({
    category: [],
  })

  const handleChangeCheckedBoxGroup = (
    { target: { checked, value } }: any,
    nameGroup: string | number
  ) => {
    if (checked) {
      if (checkedBoxByGroup[nameGroup].includes(value)) {
        setCheckedBoxByGroup((prevState) => ({
          ...prevState,
        }))
      } else {
        setCheckedBoxByGroup((prevState) => ({
          ...prevState,
          [nameGroup]: [...prevState[nameGroup], value],
        }))
      }
    } else {
      setCheckedBoxByGroup((prevState) => ({
        ...prevState,
        [nameGroup]: [...prevState[nameGroup].filter((x) => x !== value)],
      }))
    }
  }




  return (
    <div>
      <div>
        {checkboxGroupOptions.map((item, index) => (
          <div key={index}>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
              key={index}
            >
              {item.entities.map((label, index) => (
                <div key={index}
                  style={
                    index < 4 || list
                      ? { display: 'flex' }
                      : { display: 'none' }
                  }
                >
                  <CheckboxGroup
                    id={index.toString() + label}
                    label={label}
                    // check={check}
                    checkedBoxByGroup={checkedBoxByGroup}
                    key={index}
                    nameGroup={item.option.optionNameOnBackend}
                    onChange={handleChangeCheckedBoxGroup}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="checkbox__btn" onClick={() => setList(!list)}>
        Показать все{' '}
        <img
          src={homePage + '/img/checkbox-img.svg'}
          alt=""
          className="checkbox__img"
        />{' '}
      </button>
      <div className="checkbox__br">
        <div style={{ display: 'flex', gap : '10px' }}>
          <button
            className="checkbox__showbtn"
            onClick={() => onClickCheckBox(checkedBoxByGroup.category)}
          >
            Показать
          </button>
          <button onClick={() => onClickCheckBox([])}>
            <img src={homePage + '/img/basket-basket.svg'} alt="basket" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkbox
