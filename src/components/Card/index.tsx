import React from 'react';
import { ExternalLink } from 'react-external-link';
import { FileTextOutlined } from '@ant-design/icons';

import Button from "../Button";
import './styles.css';

interface IProps {
    human: {
        id: number;
        name: string;
        image: string;
        fullDescription?: string;
    };
    vote: (id: number) => void;
}


export const Card = (props: IProps) => {
    const { human, vote } = props;
    const {
        id,
        name,
        image,
        fullDescription,
    } = human;

    return (
        <div className="card">
            <img src={image} alt="" className="card-image"/>
            <div className="card-name">
                {name}
            </div>
            <ExternalLink href="https://vk.com/itmostudents" className="programm"><FileTextOutlined /> Полная программа</ExternalLink>
            <Button  onClick={() => vote(id)  } type="vote">Проголосовать</Button>
        </div>
    );
};



//<Button  onClick={() => vote(id)