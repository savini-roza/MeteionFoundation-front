import React from "react";
import "../assets/css/login.css";
import "../assets/css/styles.css";
import { Button, Card, Col, Form, Input, Row } from "antd";
import { newUser } from "../services/UserService";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SignIn() {
    const navigate = useNavigate();

    const onFinish = (values) => {
        newUser(values.username, values.password).then(response => {
                Swal.fire({
                    title: "Parabéns!",
                    text: response.data.message,
                    icon: 'success'
                }).then(
                    navigate("/")
                )
        }).catch(
            function (error) {
                Swal.fire({
                    title: "Eita!",
                    text: error.response.data.message,
                    icon: 'error'
                })
            });
    };

    return (
        <>
            <div className="login">
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}>
                        <Card className="card-login">

                            <Row>
                                <Col>
                                    <Link to="/">
                                        <ArrowLeftOutlined />
                                    </Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24} className="text-center">
                                    <img className="logo" src={require('../assets/img/logo-maior.png')} />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={4}>
                                </Col>
                                <Col span={16}>
                                    <Form name="login"
                                        layout="vertical"
                                        onFinish={onFinish}>
                                        <Form.Item
                                            label="Nome de Usuário"
                                            name="username"
                                            required={false}
                                            rules={[{ required: true, message: 'Por favor insira nome de usuário!' }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            label="Senha"
                                            name="password"
                                            required={false}
                                            rules={[{ required: true, message: 'Por favor insira a senha!' }]}
                                        >
                                            <Input.Password />
                                        </Form.Item>

                                        <Form.Item className="text-center">
                                            <Button type="primary" htmlType="submit">
                                                Criar Conta
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </Col>
                                <Col span={4}>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={6}></Col>
                </Row>
            </div >
        </>
    )
}

export default SignIn;