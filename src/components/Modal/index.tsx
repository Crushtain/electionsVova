import { Modal } from "antd";
import React, { FC } from "react";
import "./styles.css";

interface IProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

export const ModalComponent: FC<IProps> = ({
  isModalOpen,
  handleOk,
  handleCancel,
}) => {
  return (
    <Modal
      className="modal"
      title="Подтверждение выбора"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okButtonProps={{ className: "btn-ok" }}
      cancelButtonProps={{ className: "btn-cancel" }}
    >
      <p className="confirm-text">Вы подтверждаете свой выбор?</p>
      <p className="extra-text">
        Нажав кнопку "ОК" выбор изменить будет нельзя
      </p>
    </Modal>
  );
};
