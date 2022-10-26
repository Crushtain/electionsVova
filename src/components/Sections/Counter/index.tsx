import React, {useState} from 'react';
import {Col, Row} from "antd";
import './styles.css';


export const Counter = () => {
    const [counter, setCounter] = useState(1000)
    return (
        <div className="counter">
            <Row justify="space-between" align="middle">
                <Col className="counter-text" >
                    Уже отдано голосов: {counter}
                </Col>
            </Row>
        </div>
    )
}
