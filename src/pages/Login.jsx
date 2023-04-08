import React from "react";
import "../assets/css/login.css";
import "../assets/css/styles.css";
import { Button, Card, Col, Form, Input, Row } from "antd";
import { login } from "../services/UserService";
import { useDispatch} from "react-redux";
import { changeUser } from "../features/UserSlice";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
    const dispatch = useDispatch();

    const onFinish = (values) => {
        login(values.username, values.password).then(response => {
                dispatch(changeUser(response.data.userId));
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
                                                Entrar
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </Col>
                                <Col span={4}>
                                </Col>
                            </Row>
                            <Row className="justify-center">
                                <Col className="text-center">
                                <p>Não tem uma conta ainda? Crie a sua GRATUITAMENTE!</p>
                                    <Link to="/cadastro" ><Button>CADASTRO</Button></Link>
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

export default Login;