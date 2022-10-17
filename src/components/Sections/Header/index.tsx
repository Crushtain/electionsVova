import React from 'react';
import Logo from '../../../images/logo.png';
import {Link} from "react-router-dom";
import './styles.css';
import {Col, Row } from 'antd';
import Button from "../../Button";

export const Header = () => {
    return (
        <header className="header">
            <Row justify="space-between" align="middle">
                <Col>
                    <Link to='/'>
                        <img src={Logo} width="130" height="53" alt="ITMO students"/>
                    </Link>
                </Col>
                <Col>
                    <Button type="log-in">Log in</Button>
                </Col>
            </Row>
        </header>
    );
};
