import React from 'react';
import Logo from '../../../images/logo.png';
import './styles.css';
import {Col, Row } from 'antd';
import Button from "../../Button";
import {ExternalLink} from "react-external-link";


export const Header = () => {
    return (
        <header className="header">
            <Row justify="center" align="middle">
                <Col>
                    <ExternalLink href ="https://vk.com/itmostudents">
                        <img src={Logo} width="130" height="53" alt="ITMO students"/>
                    </ExternalLink>
                </Col>
            </Row>
        </header>
    );
};
