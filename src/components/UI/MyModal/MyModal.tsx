import React, { useState } from 'react'
import './myModal.scss'

const MyModal = () => {

    const [myModal, setMyModal] = useState(false)

  return (
    <div className="modal" style={myModal ? {display : 'none'} : {display : 'flex'}} onClick={() => setMyModal(!myModal)}>
      <div className="modal__content">Спасибо за заказ</div>
    </div>
  )
}

export default MyModal
