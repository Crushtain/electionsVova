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
                            Выборы начнутся 28 октября 2022 года в 18:00 и закончатся 30 октября 2022 года в 18:00. Отдать голос можно будет только за одного кандидата.
                        </Col>
                        <Col className="info-text-extra">
                            В случае, если у одного из кандидатов не наберется более 50% голосов, то второй тур голосования состоится 1 ноября в 14:00 и продлится до 3 ноября 18:00.

                        </Col>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

