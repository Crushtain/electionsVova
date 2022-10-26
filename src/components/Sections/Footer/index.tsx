import React from 'react';
import {ExternalLink} from "react-external-link";
import './styles.css';
import '../../../fonts.css';



export const Footer = () => {

    return (
        <div className="main-footer">
            <div className="footer-leaders">
                ITMO.LEADERS
            </div>
            <div className="footer-date">
                28/10 - 30/10
            </div>
            <ExternalLink href ="https://vk.com/itmostudents">
                <div className="footer-question">При возникновении вопросов писать в личные сообщения сообщества ITMO.Students</div>
            </ExternalLink>
        </div>
    )

}