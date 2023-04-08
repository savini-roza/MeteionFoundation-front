import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Col, Input, Modal, Row, Table } from "antd";
import { addTask, deleteTask, editTask, getByUser } from "../services/TaskService";
import { useSelector } from "react-redux";
import { selectUser } from "../features/UserSlice";

function Tasks() {
    const user = useSelector(selectUser);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [op, setOp] = useState(0);
    const [selectedId, setSelectedId] = useState(0);
    const [taskName, setTaskName] = useState("");
    const [tasks, setTasks] = useState([]);


    const showModal = () => {
        setIsModalOpen(true);
    };

    function handleOk() {
        switch (op) {
            case 1:
                if (selectedId === 0) {
                    addTask(user.user, taskName).then(response => {
                        if (response.status)
                            getTasks();
                    });
                }
                else {
                    editTask(selectedId, user.user, taskName).then(() => {
                        getTasks();
                    });
                }
                break;
            case 2:
                deleteTask(selectedId).then(() => {
                    getTasks();
                })
                break;
        }

        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    function getTasks() {
        getByUser(user.user).then((response) => {
            setTasks(response.data);
        })
    }

    function selectOp(op, id, name) {
        setOp(op);
        setTaskName(name);
        setSelectedId(id);
        showModal();
    }

    const columns = [
        {
            title: 'Tarefa',
            dataIndex: 'task',
            key: 'task'
        },
        {
            title: 'Ações',
            dataIndex: 'actions',
            key: 'actions'
        }
    ]

    const data = tasks?.map(task => (
        {
            task: task.taskName,
            actions: <div>
                <Button onClick={() => selectOp(1, task.id, task.taskName)}><EditOutlined></EditOutlined></Button>
                <Button onClick={() => selectOp(2, task.id, task.taskName)}><DeleteOutlined></DeleteOutlined></Button>
            </div>
        })
    )
    useEffect(() => {
        getTasks();
    }, [])

    return (
        <>
            <Row>
                <Col>
                    <Button onClick={() => selectOp(1, 0, "")}>Adicionar Tarefa</Button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Table columns={columns} dataSource={data}>

                    </Table>
                </Col>
            </Row>

            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} cancelText="Cancelar">
                <Row>
                    <Col>
                        {op === 1 &&
                            <>
                                <label>Nome da tarefa</label>
                                <Input type="text" value={taskName} onChange={e => setTaskName(e.target.value)}></Input>
                            </>
                        }
                        {op === 2 && <p>Tem certeza que deseja excluir esta tarefa?</p>}
                    </Col>
                </Row>
            </Modal>
        </>
    )
}

export default Tasks