import React from 'react';
import './styles.css';
import ControlPage from "./ControlPage";
import LogIn from "./LogIn";


interface IProps {
    role: 'admin';
}

export const Admin = (props: IProps) => {
    const { role } = props;


    if (role === "admin") {
        return (
            <ControlPage/>
        )
    } else {
        return (
            <LogIn/>
        )
    }


};
