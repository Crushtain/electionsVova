import React from 'react';
import {Empty, Progress, Table as BaseTable} from 'antd';
import {ColumnsType} from "antd/es/table";

interface DataType {
    id: number;
    name: string;
    votesCount: number;
    percent: number;
}



interface IProps {
    data: DataType[];
}

const Table = (props: IProps) => {
    const { data } = props;


    const columns: ColumnsType<DataType> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'ФИО',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Количество голосов',
            dataIndex: 'votesCount',
            key: 'votesCount',
            sorter: (a, b) => a.votesCount - b.votesCount,
        },
        {
            title: 'Проценты',
            dataIndex: 'percent',
            key: 'percent',
            render: percent =>  <Progress percent={percent} />,
        },
    ];

    return (
        data !== null ? (
            <BaseTable dataSource={data} columns={columns} pagination={false} rowKey="id" bordered scroll={{ x: 1000 }}/>
        ) : (
            <Empty description="Для получения отчета нажните на кноку «Загрузить»"/>
        )
    );
};

export default Table;