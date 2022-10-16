import React from 'react';
import { ExternalLink } from 'react-external-link';
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
            <div className="c ard-name">
                {name}
            </div>
            <ExternalLink href="https://vk.com/itmostudents" >Полная программа</ExternalLink>
            <Button type="default">Проголосовать</Button>
        </div>
    );
};
