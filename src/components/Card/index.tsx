import React from 'react';
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
        id,
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
            <Button className="link" type="link">Полная программа</Button>
            <Button type="default">Проголосовать</Button>
        </div>
    );
};
