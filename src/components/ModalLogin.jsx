import React from 'react'
import Modal from 'react-bootstrap/Modal'
import LoginApp from './LoginApp'

const ModalLogin = (props) => {
    const { show, handleClose } = props;
  return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <LoginApp />
        </Modal.Body>
      </Modal>
  )
}

export default ModalLogin
