import React, { FC, useContext, useState } from 'react'
import { ICard } from '../../types/types'
import { ICheckboxGroupOption, ICheckedGroup } from '../CreateCard/CreateCard'
import { CheckboxGroup } from '../UI/CheckBoxGroup/CheckboxGroup'
import AppContext from '../../context'

export interface ChangeCardProps {
  card: ICard
  change: boolean
  setChange: (a : boolean) => void
  setPosts: (a: any) => void
}

const ChangeCard: FC<ChangeCardProps> = ({setPosts, change, card, setChange }) => {

   const {posts} = useContext(AppContext)


    const [title, seTitle] = useState(card.title)

    const [urlImg, seTImg] = useState(card.urlImg)
  
    const [barcode, setBarcode] = useState(card.barcode)
  
    const [manufacturer, setManufacturer] = useState(card.manufacturer)
  
    const [brand, setBrand] = useState(card.brand)
  
    const [description, setDescription] = useState(card.description)
  
    const [price, setPrice] = useState(card.price)
  
    const [size, setSize] = useState(card.size)


    const checkboxGroupOptions: ICheckboxGroupOption[] = [
        {
          option: { optionNameRu: 'Категория', optionNameOnBackend: 'category' },
          entities: ['Уход за телом', 'Уход за руками'],
        },
        // {
        //   option: { optionNameRu: 'Форма', optionNameOnBackend: 'form' },
        //   entities: ['/img/cardbox.svg', '/img/cardbottle.svg'],
        // },
      ]
      const [checkedBoxByGroup, setCheckedBoxByGroup] = useState<ICheckedGroup>({
        category: [],
        form: [],
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




    const changeCard = (card : ICard) => {
        console.log(1)
     
        const newCard = {
            id: card.id,
            title,
            urlImg,
            barcode: Number(barcode),
            manufacturer,
            brand,
            description,
            price: Number(price),
            size,
            care: checkedBoxByGroup.category,
            type: '/img/cardbottle.svg',
            counter: 1,
          }
          setChange(true)
      
        //   const arr = [...posts, newCard]
         const arr = posts.map(item => item.id === newCard.id ? newCard : item)
      
          localStorage.setItem('card', JSON.stringify(arr))

          setPosts(arr)
      
          console.log(JSON.parse(localStorage.getItem('card') || '{}'))
    }




  return (
    <div
      className="modal-createcard"
      style={change ? { display: 'none' } : { display: 'flex' }}
    >
      <div className="modal-createcard__form">
        <button onClick={() => setChange(true)}>
          <img
            src={process.env.PUBLIC_URL + 'img/closeCreateCard.svg'}
            alt="close"
            style={{ width: '20px', height: '20px' }}
          />
        </button>
        <p className="modal-createcard__text">Вставте сыллку на картинку</p>
        <input
          name="urlImg"
          className="modal-createcard__input"
          type="text"

            value={urlImg}
            onChange={(e) => seTImg(e.target.value)}
        />
        <p className="modal-createcard__text">Введите название</p>
        <input
          name="title"
          type="text"
          className="modal-createcard__input"
            value={title}
            onChange={(e) => seTitle(e.target.value)}
          required
        />
        <p className="modal-createcard__text">Введите уникальный штрихкод</p>
        <input
          name="barcode"
          type="number"
          className="modal-createcard__input"
            value={barcode}
            onChange={(e) => setBarcode(Number(e.target.value))}
          required
        />
        <p className="modal-createcard__text">Введите производителя</p>
        <input
          name="manufacturer"
          type="text"
          className="modal-createcard__input"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          required
        />
        <p className="modal-createcard__text">Введите бренд</p>
        <input
          name="brand"
          type="text"
          className="modal-createcard__input"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          required
        />
        <p className="modal-createcard__text">Введите описание</p>
        <input
          name="description"
          type="text"
          className="modal-createcard__input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          required
        />
        <p className="modal-createcard__text">Введите цену</p>
        <input
          name="price"
          type="number"
          className="modal-createcard__input"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          required
        />
        <p className="modal-createcard__text">
          Выберите тип ухода(не обязательно)
        </p>
        {checkboxGroupOptions.map((item, index) => (
          <div style={{ display: 'flex', gap: '10px' }} key={index}>
            {item.entities.map((label, index) => (
              <CheckboxGroup
                id={index.toString() + label}
                label={label}
                checkedBoxByGroup={checkedBoxByGroup}
                key={index}
                nameGroup={item.option.optionNameOnBackend}
                onChange={handleChangeCheckedBoxGroup}
              />
            ))}
          </div>
        ))}


        <p className="modal-createcard__text">Введите обьем или вес</p>
        <input
          type="text"
          className="modal-createcard__input"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          required
        />

        <button
          className="modal-createcard__btn"
          type="button"
          //   value={price}
            onClick={() => changeCard(card)}
        >
          Изменить карточку
        </button>
      </div>
    </div>
  )
}

export default ChangeCard
