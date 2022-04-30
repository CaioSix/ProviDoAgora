import Modal from 'react-modal'
import { useState } from 'react'
import './styles.css'
import chatImg from '../../assets/chat-img.svg'

Modal.setAppElement('#root');

export function ChatModal({user}) {
    const [showModal, setShowModal] = useState(false);
  
    function handleOpenModal() {
      setShowModal(true);
    }
  
    function handleCloseModal() {
      setShowModal(false);
    }
  
    return (
      <div>
        <img onClick={handleOpenModal} src={chatImg} width='25px'></img>
        <Modal
          isOpen={showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={handleCloseModal}
          shouldCloseOnOverlayClick={true}
          overlayClassName= "modal-overlay"
          className="modal-content"
        >
          <h2>Ficamos felizes por ter encontrado um match!</h2>
          <p>Entre em contato para pedalar junto com {user.name} </p>
          <p>pelo telefone {user.tel} </p>
          <p>ou pelo email {user.email}</p>
          <button onClick={handleCloseModal}>Fechar</button>
        </Modal>
      </div>
    );
  }