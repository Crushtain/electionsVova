import React from 'react';
import Logo from '../../../images/logo.png';
import './styles.css';
import {Col, Row } from 'antd';
import Button from "../../Button";
import {ExternalLink} from "react-external-link";

interface IProps {
    isAuthUser: boolean;
    logIn: () => void;
    logOut: () => void;
}

export const Header = (props: IProps) => {
    const { isAuthUser, logIn, logOut } = props;
    return (
        <header className="header">
            <Row justify="space-between" align="middle">
                <Col>
                    <ExternalLink href ="https://vk.com/itmostudents">
                        <img src={Logo} width="130" height="53" alt="ITMO students"/>
                    </ExternalLink>
                </Col>
                <Col>
                    <Button type="log-in" onClick={isAuthUser ? logOut : logIn}>{isAuthUser ? 'Выйти' : 'Войти'}</Button>
                </Col>
            </Row>
        </header>
    );
};
