import React from 'react';
import Logo from '../../../images/logo.svg';
import {Link} from "react-router-dom";
import './styles.css';
import {Col, Row } from 'antd';
import Button from "../../Button";

export const Header = () => {
    return (
        <header className="header">
            <Row justify="space-between" align="middle">
                <Col span={4}>
                    <Link to='/'>
                        <img src={Logo} alt="ITMO students"/>
                    </Link>
                </Col>
                <Col span={16}>
                    <Row gutter={20}>
                        <Col>
                            <Link to="/list">
                                Список кандидатов
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/support">
                                Support
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col span={4}>
                    <Button>Log in</Button>
                </Col>
            </Row>
        </header>
    );
};
