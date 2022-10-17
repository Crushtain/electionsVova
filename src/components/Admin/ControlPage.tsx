import React from 'react';
import {Button, Col, Collapse, Row, Typography} from "antd";
import './styles.css';

const {Panel} = Collapse;
const {Title} = Typography;

const ControlPage = () => {
    return (
        <div className="admin-control-wrapper">
            <Row gutter={[24, 24]}>
                <Col span={24}>
                    <Row justify="space-between">
                        <Col>
                            <Title>
                                Администрирование
                            </Title>
                        </Col>
                        <Col>
                            <Button danger>
                                Выйти из панели администрирования
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Collapse defaultActiveKey={1}>
                        <Panel key={1} header="Голосование">
                            <Row justify="space-between">
                                <Col>
                                     <Button size="large" type="primary">
                                        Запуск голосования
                                    </Button>
                                </Col>
                                <Col>
                                    <Button size="large" type="primary" danger>
                                        Остановить голосование
                                    </Button>
                                </Col>
                            </Row>


                        </Panel>
                        <Panel key={2} header="Выгрузка">

                        </Panel>
                        <Panel key={2} header="Лог выгрузок">

                        </Panel>
                    </Collapse>
                </Col>
            </Row>
        </div>

    );
};

export default ControlPage;