import React from 'react';
import {Col, Row} from "antd";
import {Card} from "../../Card";
import arush from '../../../images/arush.png';
import './styles.css'

export const Home = () => {
    return (
        <div className="home-bg">
            <div className="home-container">
                <Row gutter={[30, 40]}>
                    <Col span={12} lg={6}>
                        <Card human={{id: '123', name: 'Артем Арушанян', image: arush}}/>
                    </Col>
                    <Col span={12} lg={6}>
                        <Card human={{id: '123', name: 'Артем Арушанян', image: arush}}/>
                    </Col>
                    <Col span={12} lg={6}>
                        <Card human={{id: '123', name: 'Артем Арушанян', image: arush}}/>
                    </Col>
                    <Col span={12} lg={6}>
                        <Card human={{id: '123', name: 'Артем Арушанян', image: arush}}/>
                    </Col>
                    <Col span={12} lg={6}>
                        <Card human={{id: '123', name: 'Артем Арушанян', image: arush}}/>
                    </Col>
                    <Col span={12} lg={6}>
                        <Card human={{id: '123', name: 'Артем Арушанян', image: arush}}/>
                    </Col>
                    <Col span={12} lg={6}>
                        <Card human={{id: '123', name: 'Артем Арушанян', image: arush}}/>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
