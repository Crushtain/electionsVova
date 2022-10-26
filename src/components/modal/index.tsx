import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import './styles.css';

export const Warning = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (

        <div className="warning-block">
            <div className="Warning-container">
                <div className="title-holder">
                    <Button type="primary" onClick={showModal}>
                        Open Modal
                    </Button>
                    <Modal className="modal" title="Подтверждение выбора" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <p className="confirm-text">Вы подтверждаете свой выбор?</p>
                        <p className="extra-text">Нажав кнопку "Ок" выбор изменить будет нельзя</p>
                    </Modal>
                </div>

            </div>

        </div>

    )

}