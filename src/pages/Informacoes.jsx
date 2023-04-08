import React, { useEffect, useState } from "react";
import { getInfo } from "../services/InformationService";
import { Table } from "antd";

function Informaçoes() {
    const [mounts, setMounts] = useState([]);

    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
        }
    ]

    const data = mounts.map(mount => (
        {
            key: mount.id,
            image: <img src={mount.icon}/>,
            name: mount.name,
            description: mount.enhanced_description
        })
    )
    useEffect(() => {
        getInfo().then((response) => {
            setMounts(response.data.results);
        })
    }, [])
   
    return (
        <>
            <Table columns={columns} dataSource={data}>

            </Table>
        </>
    )
}

export default Informaçoes