import React from 'react';
import './styles.css';
import ControlPage from "./ControlPage";
import LogIn from "./LogIn";


interface DataType {
    id: number;
    name: string;
    votesCount: number;
    percent: number;
}

interface IProps {
    role: 'admin';
}

export const Admin = (props: IProps) => {
    const { role = "admin" } = props;
const testData: DataType[] = [
    {
        id: 1,
        name: "asd asd dsadasd",
        votesCount: 12,
        percent: 12,
    },
    {
        id: 2,
        name: "asd asd asd",
        votesCount: 1,
        percent: 50,
    },
    {
        id: 3,
        name: "asd asd",
        votesCount: 123,
        percent: 30,
    }
];

    if (role === "admin") {
        return (
            <ControlPage data={testData}/>
        )
    } else {
        return (
            <LogIn/>
        )
    }


};
