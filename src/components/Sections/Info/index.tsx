import React from 'react';
import {Col, Row} from "antd";
import './styles.css';


export const Info = () => {

    return (
        <div className="info-bg">
            <div className="info-container">
                <Row justify="space-between" align="middle">
                    <Col className="info-text">
                        <Col>
                            Это официальный сайт выборов в Председатели Совета обучающихся Университета ИТМО. Сами выборы начнутся 28 октября 2022 года в 18:00. Следите за новостями в группе ITMO.Students
                        </Col>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

