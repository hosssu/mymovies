import React from 'react';
import CrudPost from './CrudPost';
import { Modal } from 'react-modal'
import { useState } from 'react'
import './style.css';



const ShowModal = () => {
    const [showModal, setShowModal] = useState(false)


    const Close = () => {
        setShowModal(false)
    }
    return (
        <Modal className='modal' isOpen={showModal} onRequestClose={Close} ariaHideApp={false}>
            < div className='ui dimmer show modals visible active' >
                <div className='ui raised very padded text container segment'>
                    <div>
                        <CrudPost /><br></br>
                        <button className='ui button' onClick={Close}>Close</button>
                    </div >
                </div >
            </div >
        </Modal>
    )
}

Modal.setAppElement("#modal")
export default ShowModal;
