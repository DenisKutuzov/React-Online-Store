import React, { useState } from 'react'
import './myModal.scss'

const MyModal = () => {
  const [myModal, setMyModal] = useState(false)

  return (
    <div
      className="modal"
      style={myModal ? { display: 'none' } : { display: 'flex' }}
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
        })
        setMyModal(!myModal)
      
      }}
    >
      <div className="modal__content">Спасибо за заказ</div>
    </div>
  )
}

export default MyModal
