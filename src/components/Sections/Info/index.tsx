import React from 'react';
import {Col, Row} from "antd";
import './styles.css';


export const Info = () => {

    return (
        <div className="info-bg">
            <div className="info-container">
                <Row justify="space-between" align="middle">
                    <Col className="info-text">
                        Текст с содержанием информации о правилах проведения выборов, важности голосования и сделанного выбора
                    </Col>
                </Row>
            </div>
        </div>
    )
}

