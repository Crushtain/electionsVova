import React, {useState} from "react";
import {ExternalLink} from "react-external-link";
import {FileTextOutlined} from "@ant-design/icons";

import Button from "../Button";
import "./styles.css";
import {ModalComponent} from "../Modal";
import {useMakeVote} from "../../hooks/useMakeVote";

interface IProps {
    human: {
        id: number;
        name: string;
        image: string;
        fullDescription?: string;
    };
    voteStatus: string;
    canVote: boolean;
}

export const Card = (props: IProps) => {
    const {human, voteStatus, canVote} = props;
    const {id, name, image, fullDescription} = human;
    const makeVote = useMakeVote();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        makeVote(id);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleOnClick = () => {
        showModal();
    };
    return (
        <div className="card">
            <img src={image} alt="" className="card-image"/>
            <div className="card-name">{name}</div>
            <ExternalLink href={fullDescription} className="programm">
                <FileTextOutlined/> Полная программа
            </ExternalLink>
            {voteStatus === "Started" && canVote && (
                <Button onClick={handleOnClick} type="vote">
                    Проголосовать
                </Button>
            )}
            <ModalComponent
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
        </div>
    );
};

