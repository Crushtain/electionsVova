import React from 'react';
import { ExternalLink } from 'react-external-link';
import { FileTextOutlined } from '@ant-design/icons';

import Button from "../Button";
import './styles.css';

interface IProps {
    human: {
        id: string;
        name: string;
        image: string;
        fullDescription?: string;
    };
}


export const Card = (props: IProps) => {
    const { human } = props;
    const {
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
            <Button type="vote">Проголосовать</Button>
        </div>
    );
};
