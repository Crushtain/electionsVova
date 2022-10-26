import React from 'react';
import {Button, Card, Col, Form, Input, Row, Typography} from "antd";
import './styles.css';
import {useAdminAuth} from "../../hooks/useAdminAuth";
import {adminLogin} from "../../redux/slices/user";
import {useAppDispatch} from "../../hooks/useAppDispatch";
const {Title} = Typography;


const LogIn = () => {
    const dispatch = useAppDispatch();

    const onFinish = (values: any) => {
        console.log('Success:', values);
        dispatch(adminLogin())
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row justify="center" align="middle" className="admin-login-container">
            <Col>
                <Card className="adminCard">
                    <Title level={3} style={{ marginBottom: 40 }}>
                        Администратор
                    </Title>
                    <Form
                        name="admin"
                        labelCol={{span: 9}}
                        wrapperCol={{span: 13}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Введите логин"
                            name="username"
                            rules={[{required: true, message: 'Введите имя пользователя!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Введите пароль"
                            name="password"
                            rules={[{required: true, message: 'Введите пароль!'}]}
                        >
                            <Input.Password/>
                        </Form.Item>


                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Войти
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>

            </Col>
        </Row>
    );
};

export default LogIn;