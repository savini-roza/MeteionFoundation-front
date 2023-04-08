import { Button, Layout, Menu } from 'antd';
import "../assets/css/styles.css";
import { UserOutlined, InfoCircleOutlined, LogoutOutlined } from '@ant-design/icons';
import React from "react";
import { Link } from 'react-router-dom';
import Rotas from '../routes/Routes';
import { useDispatch } from 'react-redux';
import { changeUser } from '../features/UserSlice';

const { Header, Content, Sider } = Layout;
function Template() {
    const dispatch = useDispatch();
    function logout() {
        dispatch(changeUser(0));
    }

    const items = [
        {
            label: <Link to='/'>Tarefas</Link>,
            key: 'tasks',
            icon: <UserOutlined />,
        },
        {
            label: <Link to='/informacoes'>Informações</Link>,
            key: 'info',
            icon: <InfoCircleOutlined />,
        },
        {
            label: <p onClick={logout}>Sair</p>,
            key: 'logout',
            icon: <LogoutOutlined />
        }
    ]

    return (

        <Layout className='template'>
            <Header className="header" theme='dark'>
                <img className="logo-header" src={require('../assets/img/logo-maior.png')} />
            </Header>
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        items={items}
                    />
                </Sider>
                <Layout>
                    <Content>
                        <Rotas></Rotas>
                    </Content>
                </Layout>
            </Layout>
        </Layout>


    )
}

export default Template;