import React from 'react';
import {Col, Row} from "antd";
import {candidates} from '../../../utils/candidates.js';
import {Card} from "../../Card";
import './styles.css'

export const Home = () => {
    return (
        <div className="home-bg">
            <div className="home-container">
                <Row gutter={[30, 40]}>
                    {candidates.map(item => (
                        <Col key={item.id} span={24} sm={12} lg={8}>
                            <Card human={item}/>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};
